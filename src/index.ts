// Inicialize o Datadog antes de qualquer outra coisa
import "dd-trace/init"; // Faz a auto-instrumentação automática
import ipinfo from "ipinfo-express";
import "./tracer";

import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(
  ipinfo({
    token: "token",
    cache: null,
    timeout: 5000,
  })
);
const PORT = process.env.PORT || 3000;

// Middleware para fazer parsing do corpo da requisição
app.use(express.json());

// Exemplo de middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rota básica de teste
app.get("/", (req: Request, res: Response) => {
  const userAgent = req.headers["user-agent"]; // Obter o User-Agent
  const ipinfo = req.ipinfo;

  res.status(200).json({
    message: "Server is running with Datadog instrumentation!",
    userAgent,
    ipinfo,
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
