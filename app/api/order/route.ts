import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {

        const orderData = await request.json();
        const {searchParams} = new URL(request.url);
        const productId = searchParams.get("id");

        if (!productId) {
            return NextResponse.json(
                {status: "error", message: "Product ID is required."},
                {status: 400}
            )
        }

        const newOrder = await prisma.order.create({
            data: {
                ...orderData,
                productId: productId,
            },
        })

        return NextResponse.json(
            {status: "success", message: "Order inserted successfully!", data: newOrder},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {status: "error", message: "Failed to insert order."},
            {status: 500}
        )
    }
}