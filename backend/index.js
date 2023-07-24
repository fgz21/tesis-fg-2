import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import { connection } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Configura las opciones de cors
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Agrega middleware para permitir cors
app.use(cors(corsOptions));

// Agregar middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.get("/users", (req, res) => {
  connection.query("SELECT * from users", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  connection.query(query, [email, password], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      const user = results[0];
      res.json({
        message: "Sesión iniciada correctamente",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({
        message: "Credenciales inválidas",
      });
    }
  });
});

app.post("/users", (req, res) => {
  const uuid = uuidv4();
  const { email, password, name } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [email], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.status(200).json({
        title: "Todo bien solo que:",
        message: "El usuario ya existe",
      });
    } else {
      const insertQuery =
        "INSERT INTO users (name, uuid, email, password) VALUES (?, ?, ?, ?)";
      connection.query(
        insertQuery,
        [name, uuid, email, password],
        (error, results) => {
          if (error) throw error;
          res.status(201).json({
            message: "Usuario creado",
          });
        }
      );
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
