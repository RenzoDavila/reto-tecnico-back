// Rutas de user

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name: 
 *                  type: string
 *                  description: es el usuario
 *              firstName: 
 *                  type: string
 *                  description: sus nombres
 *              lastName: 
 *                  type: string
 *                  description: sus apellidos
 *              email: 
 *                  type: string
 *                  description: su correo electrónico
 *              pass: 
 *                  type: string
 *                  description: su contraseña
 *              role: 
 *                  type: string
 *                  description: el tipo de rol que ocupara el usuario
 *              age: 
 *                  type: string
 *                  description: fecha de nacimiento
 *          required:
 *              - name
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *              - role
 *              - age
 *          example:
 *              name: RDAVILAC
 *              firstName: RENZO JHAIR
 *              lastName: DAVILA ACOSTA
 *              email: RENZO.DAVILA@TECSUP.EDU.PE
 *              pass: CONTRASENIA123
 *              role: DESARROLLADOR WEB
 *              age: 1997-01-03
 * 
 *      UserUpdate:
 *          type: object
 *          properties:
 *              name: 
 *                  type: string
 *                  description: es el usuario
 *              firstName: 
 *                  type: string
 *                  description: sus nombres
 *              lastName: 
 *                  type: string
 *                  description: sus apellidos
 *              email: 
 *                  type: string
 *                  description: su correo electrónico
 *              role: 
 *                  type: string
 *                  description: el tipo de rol que ocupara el usuario
 *              age: 
 *                  type: string
 *                  description: fecha de nacimiento
 *          required:
 *              - name
 *              - firstName
 *              - lastName
 *              - email
 *              - role
 *              - age
 *          example:
 *              name: RDAVILAC
 *              firstName: RENZO JHAIR
 *              lastName: DAVILA ACOSTA
 *              email: RENZO.DAVILA@TECSUP.EDU.PE
 *              role: DESARROLLADOR WEB
 *              age: 1997-01-03
 * 
 *      UserCreateResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: Usuario Creado
 *              body: 
 *                  type: object
 *                  properties:
 *                      name: 
 *                          type: string
 *                          description: es el usuario
 *                      firstName: 
 *                          type: string
 *                          description: sus nombres
 *                      lastName: 
 *                          type: string
 *                          description: sus apellidos
 *                      email: 
 *                          type: string
 *                          description: su correo electrónico
 *                      pass: 
 *                          type: string
 *                          description: su contraseña
 *                      role: 
 *                          type: string
 *                          description: el tipo de rol que ocupara el usuario
 *                      age: 
 *                          type: string
 *                          description: fecha de nacimiento
 *          example:
 *              message: Usuario creado
 *              body:
 *                  name: RDAVILAC
 *                  firstName: RENZO JHAIR
 *                  lastName: DAVILA ACOSTA
 *                  email: RENZO.DAVILA@TECSUP.EDU.PE
 *                  password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                  role: DESARROLLADOR WEB
 *                  age: 1997-01-03
 * 
 *      UserUpdateResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: Usuario Editado
 *              body: 
 *                  type: object
 *                  properties:
 *                      name: 
 *                          type: string
 *                          description: es el usuario
 *                      firstName: 
 *                          type: string
 *                          description: sus nombres
 *                      lastName: 
 *                          type: string
 *                          description: sus apellidos
 *                      email: 
 *                          type: string
 *                          description: su correo electrónico
 *                      role: 
 *                          type: string
 *                          description: el tipo de rol que ocupara el usuario
 *                      age: 
 *                          type: string
 *                          description: fecha de nacimiento
 *          example:
 *              message: Usuario actualizado
 *              body:
 *                  name: RDAVILAC
 *                  firstName: RENZO JHAIR
 *                  lastName: DAVILA ACOSTA
 *                  email: RENZO.DAVILA@TECSUP.EDU.PE
 *                  password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                  role: DESARROLLADOR WEB
 *                  age: 1997-01-03
 * 
 *      UserDeleteResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: Usuario Editado
 *          example:
 *              message: Usuario "Renzo Jhair Davila Acosta" eliminado
 * 
 *      UserResponse:
 *          type: object
 *          properties:
 *              _id: 
 *                  type: string
 *                  description: es el id del usuario
 *              name: 
 *                  type: string
 *                  description: es el usuario
 *              firstName: 
 *                  type: string
 *                  description: sus nombres
 *              lastName: 
 *                  type: string
 *                  description: sus apellidos
 *              email: 
 *                  type: string
 *                  description: su correo electrónico
 *              pass: 
 *                  type: string
 *                  description: su contraseña
 *              role: 
 *                  type: string
 *                  description: el tipo de rol que ocupara el usuario
 *              age: 
 *                  type: string
 *                  description: fecha de nacimiento
 *          required:
 *              - name
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *              - role
 *              - age
 *          example:
 *              _id: 64ec78a35eba0bce8d310e50
 *              name: RDAVILAC
 *              firstName: RENZO JHAIR
 *              lastName: DAVILA ACOSTA
 *              email: RENZO.DAVILA@TECSUP.EDU.PE
 *              pass: CONTRASENIA123
 *              role: DESARROLLADOR WEB
 *              age: 1997-01-03
 * 
 *      UsersResponse:
 *          type: object
 *          properties:
 *              registers: 
 *                  type: integer
 *                  description: número de registros totales
 *              pages: 
 *                  type: integer
 *                  description: número de paginas totales
 *              page: 
 *                  type: integer
 *                  description: número de pagina actual
 *              data:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          _id: 
 *                              type: string
 *                              description: es el id del usuario
 *                          name: 
 *                              type: string
 *                              description: es el usuario
 *                          firstName: 
 *                              type: string
 *                              description: sus nombres
 *                          lastName: 
 *                              type: string
 *                              description: sus apellidos
 *                          email: 
 *                              type: string
 *                              description: su correo electrónico
 *                          pass: 
 *                              type: string
 *                              description: su contraseña
 *                          role: 
 *                              type: string
 *                              description: el tipo de rol que ocupara el usuario
 *                          age: 
 *                              type: string
 *                              description: fecha de nacimiento
 *          example:
 *              registers: 4
 *              pages: 1
 *              page: 1
 *              data:
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    name: RDAVILAC
 *                    firstName: RENZO JHAIR
 *                    lastName: DAVILA ACOSTA
 *                    email: RENZO.DAVILA@TECSUP.EDU.PE
 *                    password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                    role: DESARROLLADOR WEB
 *                    age: 1997-01-03
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    name: PRUEBA1
 *                    firstName: NOMBRE PRUEBA1
 *                    lastName: APELLIDO PRUEBA1
 *                    email: PRUEBA1.PRUEBA1@PRUEBA1.com
 *                    password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                    role: PRUEBA1
 *                    age: 1994-03-03T00:00:00.000Z
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    name: PRUEBA2
 *                    firstName: NOMBRE PRUEBA2
 *                    lastName: APELLIDO PRUEBA2
 *                    email: PRUEBA2.PRUEBA2@PRUEBA2.com
 *                    password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                    role: PRUEBA2
 *                    age: 1994-03-03T00:00:00.000Z
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    name: PRUEBA3
 *                    firstName: NOMBRE PRUEBA3
 *                    lastName: APELLIDO PRUEBA3
 *                    email: PRUEBA3.PRUEBA3@PRUEBA3.com
 *                    password: $2a$08$bfZvh.EfFk4S0B4jUpVE0uy4VLsTcHeHeWkgXQB3mZPG2jUM9XC1
 *                    role: PRUEBA3
 *                    age: 1994-03-03T00:00:00.000Z
 * 
 */


/**
 * @swagger
 * /users:
 *  post:
 *      summary: crea un nuevo usuario - crea una constancia de la operación
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Usuario creado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              message: holi
 *                              $ref: '#/components/schemas/UserCreateResponse'
 *          500:
 *              description: Ocurrio un problema al crear el usuario
 */
router.post("/", userController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: edita un usuario con su id  - crea una constancia de la operación
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/UserUpdate'
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del usuario
 *      responses:
 *          200:
 *              description: Usuario editado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserUpdateResponse'
 *          500:
 *              description: Ocurrio un problema al editar el usuario
 */
router.put("/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: elimina un usuario según su id - crea una constancia de la operación
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del usuario
 *      responses:
 *          200:
 *              description: Usuario eliminado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserDeleteResponse'
 *          500:
 *              description: Ocurrio un problema al eliminar el usuario
 */
router.delete("/:id", userController.deleteUser);

/**
 * @swagger
 * /users/{number}/{page}/{sort}:
 *  get:
 *      summary: muestra los usuarios según los filtros enviados
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: number
 *            schema:
 *              type: integer
 *            required: true
 *            description: número de registros a mostrar por pagina
 *          - in: path
 *            name: page
 *            schema:
 *              type: integer
 *            required: true
 *            description: número de la pagina a mostar
 *          - in: path
 *            name: sort
 *            schema:
 *              type: string
 *            required: true
 *            description: tipo de ordenamiento pueden ser name(por usuario) - age(por fecha de cumpleaños) - role(por su rol) - lastName(por su apellido), si se manda cualquier otra cosa por defecto sera name
 *      responses:
 *          200:
 *              description: Usuarios encontrados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              message: holi
 *                              $ref: '#/components/schemas/UsersResponse'
 *          500:
 *              description: Ocurrio un problema al cargar los usuarios
 */
router.get("/:number/:page/:sort", userController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: muestra un usuario según su id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del usuario
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserResponse'
 *          500:
 *              description: Ocurrio un problema al cargar el usuario
 */
router.get("/:id", userController.getUser);

module.exports = router;
