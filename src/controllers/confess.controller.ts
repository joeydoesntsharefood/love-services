import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Create = async (req: Request, res: Response) => {
  try {
    const confess = await prisma.confess.create({ data: req.body });

    res.status(200).send({ message: 'confess created success', success: true, data: confess });
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: 'aaaaaah', success: false });
  }
}

const Index = async (req: Request, res: Response) => {
  try {
    const confess = await prisma.confess.findUnique({ where: { id: req.params.id } });

    res.status(200).send({ message: 'okay', success: true, data: confess });
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: 'aaaaaah', success: false });
  }
}

export default {
  Create,
  Index,
}