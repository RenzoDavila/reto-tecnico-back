const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const path = require("path")

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:4000"
      }
    ]
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

//creamos el servidor

const app = express();

//Conectamos con la DB

conectarDB();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => { res.json({mensaje: 'Reto Técnico Para Interbank'}) });
app.use("/proofs", require("./routes/proof"));
app.use("/users", require("./routes/user"));

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.listen(4000, () => {
  console.log("Corriendo en puerto 4000");
});
