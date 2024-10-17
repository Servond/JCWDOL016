import express, { Request, Response, Application } from "express";
import { PORT as port, MOCK_API_URL } from "./config";
import axios from "axios";

const PORT = Number(port) || 8000;

const app: Application = express();

// middleware untuk memparsing body, supaya dapat mengambil request.body dari sebuah request
app.use(express.json());

// resource user

// untuk mendapatkan semua data users
app.get("/api/users", async (req: Request, res: Response) => {
  const { data } = await axios.get(`${MOCK_API_URL}/users`);
  res.status(200).send({
    message: "Ini List Users",
    data,
  });
});

// untuk mendapatkan satu data user
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = await axios.get(`${MOCK_API_URL}/users/${id}`);
  res.status(200).send({
    message: "Ini Data 1 User",
    data,
  });
});

// untuk menginsert atau memasukkan data user baru
app.post("/api/users", (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.status(200).send({
    message: "Ini Create Data User",
    data: {
      name,
      email,
      password,
    },
  });
});

// untuk mengedit data user
app.patch("/api/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send({
    message: "Ini Edit Data User",
    data: id,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
