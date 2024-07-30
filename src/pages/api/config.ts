// pages/api/config.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Config {
  someKey: string;
  anotherKey: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Config | { error: string }>) {
  const filePath = path.resolve(process.cwd(), 'src', 'api', 'config.json');

  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data: Config = JSON.parse(jsonData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
