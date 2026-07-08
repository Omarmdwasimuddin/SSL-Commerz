import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {

        

        return NextResponse.json(
            {status: "success", message: "", data: ""},
            {status: 200}
        )
    } catch (error) {
        console.error("Error :", error);
        return NextResponse.json(
            {status: "error", message: ""},
            {status: 500}
        )
    }
}