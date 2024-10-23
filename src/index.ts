// Inicialize o Datadog antes de qualquer outra coisa
import "dd-trace/init"; // Faz a auto-instrumentação automática

import { PrismaClient } from "@prisma/client";
import "./tracer";
import express, { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para fazer parsing do corpo da requisição
app.use(express.json());

interface IpInfoRequest extends Request {
  ipinfo: any;
}

// Exemplo de middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rota básica de teste
app.get("/", async (req: Request, res: Response) => {
  const userAgent = req.headers["user-agent"]; // Obter o User-Agent

  const currentAccess = await prisma.access.create({
    data: {
      userAgent: userAgent as string,
    },
  });

  const previusAccess = await prisma.access.findMany({
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({
    currentAccess,
    previusAccess,
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
