"use server"
import { promises as fs } from 'fs';

async function GetData(){
    const file = await fs.readFile(process.cwd() + '/components/blogs.json', 'utf8');
    const data = JSON.parse(file);
    return data;
}

export default GetData