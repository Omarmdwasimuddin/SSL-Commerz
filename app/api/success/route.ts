import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    let {searchParams} = new URL(request.url);
    let tran_id = searchParams.get("tran_id");

    /* 
        According to tran_id
        Update your payment status = "Success" in your database
    */

    return NextResponse.redirect(new URL('/success', request.url), 303)
}