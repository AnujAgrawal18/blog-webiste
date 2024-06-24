import fs from 'fs/promises'
import { NextResponse , NextRequest} from "next/server";


export async function GET(res) {
    var datas = await fs.readFile('data.json');
    var myObject = JSON.parse(datas);
    return NextResponse.json(myObject)
}

export async function POST(req) {
    var datas = await fs.readFile('data.json');
    var myObject = JSON.parse(datas);
    const data = await req.json()
    myObject.push(data);
    const findResult = await fs.writeFile("data.json", JSON.stringify(myObject))
    return NextResponse.json({findResult})
}
