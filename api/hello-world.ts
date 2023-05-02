import { Handler } from '@netlify/functions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handler: Handler = async (event, context) => {
  const data = await prisma.user.findMany({ include: { blogs: true } });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
