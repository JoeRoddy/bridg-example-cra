import { Handler } from '@netlify/functions';
import { PrismaClient } from '@prisma/client';
import { handleRequest } from 'bridg/app/server/request-handler';

const prisma = new PrismaClient();

export const handler: Handler = async (event, context) => {
  const body = JSON.parse(event.body || '{}');
  if (!body.model) return { statusCode: 200, body: JSON.stringify({ a: 1 }) };

  const { data, status } = await handleRequest(body, { db: prisma, rules: { default: true } });

  return { statusCode: status, body: JSON.stringify(data) };
};
