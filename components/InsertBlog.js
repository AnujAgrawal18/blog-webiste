"use server"

import React from 'react'
import { promises as fs } from 'fs';

const InsertBlog = async (val) => {
    const file = await fs.readFile(process.cwd() + '/components/blogs.json', 'utf8');
    const datas = JSON.parse(file);
    datas.push(val)
    await fs.writeFile('./components/blogs.json', JSON.stringify(datas));
    return
}

export default InsertBlog