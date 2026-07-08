import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    let json = await request.json();
    let tran_id = json['tran_id'];
    let val_id = json['val_id'];
    let status = json['status'];

    /* 
    
        According to tran_id
        Update your payment status = status
        Update your payment validation id = val_id
    
    */

    return NextResponse.json({ status: "success" });
}