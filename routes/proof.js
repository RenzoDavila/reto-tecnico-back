// Rutas de proof

const express = require("express");
const router = express.Router();
const proofController = require("../controllers/proofController");

/**
 * @swagger
 * components:
 *  schemas:
 *      Proof:
 *          type: object
 *          properties:
 *              action: 
 *                  type: string
 *                  description: el tipo de acción que se realizo
 *              group: 
 *                  type: string
 *                  description: su grupo
 *              registerId: 
 *                  type: string
 *                  description: es el id del registro
 *              registerDesc: 
 *                  type: string
 *                  description: alguna descripción del registro
 *          required:
 *              - action
 *              - group
 *              - registerId
 *              - registerDesc
 *          example:
 *              action: C
 *              group: USERS
 *              registerId: 64ee580bede9b24e2b1c5dd3
 *              registerDesc: RDAVILAC
 * 
 *      ProofCreateResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: notificación
 *              body: 
 *                  type: object
 *                  properties:
 *                      action: 
 *                          type: string
 *                          description: el tipo de acción que se realizo
 *                      group: 
 *                          type: string
 *                          description: es el tipo de registro que se cambio
 *                      registerId: 
 *                          type: string
 *                          description: es el id del registro
 *                      registerDesc: 
 *                          type: string
 *                          description: alguna descripción del registro
 *                      date: 
 *                          type: string
 *                          description: fecha de creación
 *          example:
 *              message: Constancia creada
 *              body:
 *                  action: C
 *                  group: USERS
 *                  registerId: 64ee580bede9b24e2b1c5dd3
 *                  registerDesc: RDAVILAC
 *                  date: 2023-08-29T20:59:02.445Z
 * 
 *      ProofUpdateResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: notificación
 *              body: 
 *                  type: object
 *                  properties:
 *                      action: 
 *                          type: string
 *                          description: el tipo de acción que se realizo
 *                      group: 
 *                          type: string
 *                          description: es el tipo de registro que se cambio
 *                      registerId: 
 *                          type: string
 *                          description: es el id del registro
 *                      registerDesc: 
 *                          type: string
 *                          description: alguna descripción del registro
 *                      date: 
 *                          type: string
 *                          description: fecha de creación
 *          example:
 *              message: Constancia actualizada
 *              body:
 *                  action: C
 *                  group: USERS
 *                  registerId: 64ee580bede9b24e2b1c5dd3
 *                  registerDesc: RDAVILAC
 *                  date: 2023-08-29T20:59:02.445Z
 * 
 *      ProofDeleteResponse:
 *          type: object
 *          properties:
 *              message: 
 *                  type: string
 *                  description: notificación
 *          example:
 *              message: Constancia "tipo C - RDAVILAC" eliminada
 * 
 *      ProofResponse:
 *          type: object
 *          properties:
 *              _id: 
 *                  type: string
 *                  description: es el id de la constancia
 *              action: 
 *                  type: string
 *                  description: el tipo de acción que se realizo
 *              group: 
 *                  type: string
 *                  description: es el tipo de registro que se cambio
 *              registerId: 
 *                  type: string
 *                  description: es el id del registro
 *              registerDesc: 
 *                  type: string
 *                  description: alguna descripción del registro
 *              date: 
 *                  type: string
 *                  description: fecha de creación
 *          example:
 *              _id: 64ec78a35eba0bce8d310e50
 *              action: C
 *              group: USERS
 *              registerId: 64ee580bede9b24e2b1c5dd3
 *              registerDesc: RDAVILAC
 *              date: 2023-08-29T20:59:02.445Z
 * 
 *      ProofsResponse:
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
 *                              description: es el id de la constancia
 *                          action: 
 *                              type: string
 *                              description: el tipo de acción que se realizo
 *                          group: 
 *                              type: string
 *                              description: es el tipo de registro que se cambio
 *                          registerId: 
 *                              type: string
 *                              description: es el id del registro
 *                          registerDesc: 
 *                              type: string
 *                              description: alguna descripción del registro
 *                          date: 
 *                              type: string
 *                              description: fecha de creación
 *          example:
 *              registers: 4
 *              pages: 1
 *              page: 1
 *              data:
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    action: C
 *                    group: USERS
 *                    registerId: 64ee580bede9b24e2b1c5dd3
 *                    registerDesc: RDAVILAC
 *                    date: 2023-08-29T20:59:02.445Z
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    action: PRUEBA1
 *                    group: NOMBRE PRUEBA1
 *                    registerId: PRUEBA1.PRUEBA1@PRUEBA1.com
 *                    registerDesc: PRUEBA1
 *                    date: 1994-03-03T00:00:00.000Z
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    action: PRUEBA2
 *                    group: NOMBRE PRUEBA2
 *                    registerId: PRUEBA2.PRUEBA2@PRUEBA2.com
 *                    registerDesc: PRUEBA2
 *                    date: 1994-03-03T00:00:00.000Z
 *                  - _id: 64ec78a35eba0bce8d310e50
 *                    action: PRUEBA3
 *                    group: NOMBRE PRUEBA3
 *                    registerId: PRUEBA3.PRUEBA3@PRUEBA3.com
 *                    registerDesc: PRUEBA3
 *                    date: 1994-03-03T00:00:00.000Z
 * 
 */


/**
 * @swagger
 * /proofs:
 *  post:
 *      summary: crea una nueva constancia
 *      tags: [Proof]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Proof'
 *      responses:
 *          200:
 *              description: Constancia creada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              message: holi
 *                              $ref: '#/components/schemas/ProofCreateResponse'
 *          500:
 *              description: Ocurrio un problema al crear el Constancia
 */
router.post("/", proofController.createProof);

/**
 * @swagger
 * /proofs/{id}:
 *  put:
 *      summary: edita una constancia con su id
 *      tags: [Proof]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Proof'
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id de la constancia
 *      responses:
 *          200:
 *              description: Constancia editado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProofUpdateResponse'
 *          500:
 *              description: Ocurrio un problema al editar la constancia
 */
router.put("/:id", proofController.updateProof);

/**
 * @swagger
 * /proofs/{id}:
 *  delete:
 *      summary: elimina una constancia según su id
 *      tags: [Proof]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id de la constancia
 *      responses:
 *          200:
 *              description: Constancia eliminado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProofDeleteResponse'
 *          500:
 *              description: Ocurrio un problema al eliminar la constancia
 */
router.delete("/:id", proofController.deleteProof);

/**
 * @swagger
 * /proofs/{number}/{page}/{sort}:
 *  get:
 *      summary: muestra los Constancias según los filtros enviados
 *      tags: [Proof]
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
 *            description: tipo de ordenamiento pueden ser action(por la acción realizada) - date(por la fecha de cración) - group(por su grupo) - registerId(por su el registro alterado), si se manda cualquier otra cosa por defecto sera date
 *      responses:
 *          200:
 *              description: Constancias encontrados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              message: holi
 *                              $ref: '#/components/schemas/ProofsResponse'
 *          500:
 *              description: Ocurrio un problema al cargar los Constancias
 */
router.get("/:number/:page/:sort", proofController.getProofs);

/**
 * @swagger
 * /proofs/{id}:
 *  get:
 *      summary: muestra una constancia según su id
 *      tags: [Proof]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id de la constancia
 *      responses:
 *          200:
 *              description: Constancia encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProofResponse'
 *          500:
 *              description: Ocurrio un problema al cargar la constancia
 */
router.get("/:id", proofController.getProof);

module.exports = router;
