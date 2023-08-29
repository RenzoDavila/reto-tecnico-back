const Proof = require("../models/Proof");

exports.getProofs = async (req, res) => {
    try {
        const { number, page, sort } = req.params;
        const num = Number(number);
        const pag = Number(page) - 1;
        const skip = num * pag;
        let pages = 0;
        let residue = 0;
        let data = {};
        let dbSort;
        let registers = await Proof.find().count();
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
            case "action":
                dbSort = { action: 1 }
                break;
            case "date":
                dbSort = { date: -1 }
                break;
            case "group":
                dbSort = { group: 1 }
                break;
            case "registerId":
                dbSort = { registerId: 1 }
                break;
            default:
                dbSort = { date: 1 }
                break;
        }

        data.data = await Proof.find().sort(dbSort).skip(skip).limit(num);
        return res.json(data);
    }
    catch (error) {
        console.log(" ****************** Error en getProofs ==>", error);
        return res.status(500).send("Ocurrio un problema al cargar las constancias");
    }
};

exports.createProof = async (req, res) => {
    try {
        console.log("req",req.body)
        const { action, group, registerId, registerDesc } = req.body;
        const date = new Date(); 
        const newProof = { action, group, date, registerId, registerDesc };
        const body = new Proof(newProof);
        await body.save();
        return res.json({
            message: 'Constancia creada',
            body
        });
    }
    catch (error) {
        console.log(" ****************** Error en createProof ==>", error);
        return res.status(500).send("Ocurrio un problema al crear la constancia");
    }
};

exports.updateProof = async (req, res) => {
    try {
        const { id } = req.params;
        const { action, group, registerId, registerDesc } = req.body;
        const date = new Date(); 
        const body = { action, group, date, registerId, registerDesc };
        const updatedProof = await Proof.findByIdAndUpdate(id, {
            action, group, date, registerId, registerDesc
        });
        return res.json({
            message: 'Constancia actualizada',
            body
        });
    }
    catch (error) {
        console.log(" ****************** Error en updateProof ==>", error);
        return res.status(500).send("Ocurrio un problema al editar la constancia");
    }
};

exports.getProof = async (req, res) => {
    try {
        const { id } = req.params;
        const proof = await Proof.findById(id);
        return res.json(proof);
    }
    catch (error) {
        console.log(" ****************** Error en getProof ==>", error);
        return res.status(500).send("Ocurrio un problema al obtener la constancia");
    }
};

exports.deleteProof = async (req, res) => {
    try {
        const { id } = req.params;
        const proof = await Proof.findByIdAndRemove(id);
        return res.json({ message: `Constancia "tipo ${user.action} - ${proof.registerDesc}" eliminada` });
    }
    catch (error) {
        console.log(" ****************** Error en deleteProof ==>", error);
        return res.status(500).send("Ocurrio un problema al eliminar la constancia");
    }
};
