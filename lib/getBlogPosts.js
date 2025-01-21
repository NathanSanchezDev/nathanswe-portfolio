// lib/getBlogPosts.js
import fs from 'fs';
import path from 'path';

export async function getBlogPosts() {
  const filePath = path.join(process.cwd(), 'data', 'blogPosts.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}