const User = require("../models/User");
const Proof = require("../models/Proof");
const bcryptjs = require('bcryptjs');

exports.getUsers = async (req, res) => {
    try {
        const { number, page, sort } = req.params;
        const num = Number(number);
        const pag = Number(page) - 1;
        const skip = num * pag;
        let pages = 0;
        let residue = 0;
        let data = {};
        let dbSort;
        let registers = await User.find().count();
        data.registers = 0;
        data.pages = 0;
        data.page = 0;
        
        if (registers > 0) {
            pages = Math.floor(registers / num);
            residue = Math.floor(registers % num);
            if (residue > 0) {
                pages = pages + 1;
            }
            data.registers = registers;
            data.pages = pages;
            data.page = Number(page);
        };

        switch (sort) {
            case "name":
                dbSort = { name: 1 }
                break;
            case "age":
                dbSort = { age: -1 }
                break;
            case "role":
                dbSort = { role: 1 }
                break;
            case "lastName":
                dbSort = { lastName: 1 }
                break;
            default:
                dbSort = { name: 1 }
                break;
        }

        data.data = await User.find().sort(dbSort).skip(skip).limit(num);
        return res.json(data);
    }
    catch (error) {
        console.log(" ****************** Error en getUsers ==>", error);
        return res.status(500).send("Ocurrio un problema al cargar los usuarios");
    }
};

function createProof(action, group, registerId, registerDesc) {
    try {
        const date = new Date(); 
        const newProof = { action, group, date, registerId, registerDesc };
        const body = new Proof(newProof);
        body.save();
        console.log("se agrego una constancia")
    }
    catch (error) {
        console.log(" ****************** Error en createProof ==>", error);
        return res.status(500).send("Ocurrio un problema al crear los proofs");
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, firstName, lastName, email, pass, role } = await req.body;
        let { age } = await req.body;
        console.log("req.body", req.body)
        age = new Date(age);
        let password = await bcryptjs.hash(pass, 8);
        const newUser = { name, firstName, lastName, email, password, role, age };
        console.log("newUser", newUser)
        const body = new User(newUser);
        await body.save();
        createProof("C","USER",body._id,body.name);
        return res.json({
            message: 'Usuario creado',
            body
        });
    }
    catch (error) {
        console.log(" ****************** Error en createUser ==>", error);
        return res.status(500).send("Ocurrio un problema al crear el usuario");
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const { name, firstName, lastName, email, role } = req.body;
        let { age } = req.body;
        age = new Date(age);
        let password = user.password;
        let body = { name, firstName, lastName, email, password, role, age };
        const updatedUser = await User.findByIdAndUpdate(id, {
            name, firstName, lastName, email, password, role, age
        });
        createProof("U","USER",body._id,body.name);
        return res.json({
            message: 'Usuario actualizado',
            body
        });
    }
    catch (error) {
        console.log(" ****************** Error en updateUser ==>", error);
        return res.status(500).send("Ocurrio un problema al editar el usuario");
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.json(user);
    }
    catch (error) {
        console.log(" ****************** Error en getUser ==>", error);
        return res.status(500).send("Ocurrio un problema al cargar el usuario");
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndRemove(id);
        createProof("D","USER",id,user.name);
        return res.json({ message: `Usuario "${user.firstName} ${user.lastName}" eliminado` });
    }
    catch (error) {
        console.log(" ****************** Error en deleteUser ==>", error);
        return res.status(500).send("Ocurrio un problema al eliminar el usuario");
    }
};
