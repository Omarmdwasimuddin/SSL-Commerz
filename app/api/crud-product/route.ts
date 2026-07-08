import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {

        const productData = await request.json();

        const newProduct = await prisma.product.createMany({
            data: productData,
        })

        return NextResponse.json(
            {status: "success", message: "Product inserted successfully!", data: newProduct},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {status: "error", message: "Failed to insert product."},
            {status: 500}
        )
    }
}

export async function GET(request: NextRequest) {
    try {


        const readProductLists = await prisma.product.findMany();

        return NextResponse.json(
            {status: "success", message: "Product retrieved successfully!", data: readProductLists},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {status: "error", message: "Failed to retrieve products."},
            {status: 500}
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {

        const {searchParams} = new URL(request.url);
        const productId = searchParams.get("id");

        if (!productId) {
            return NextResponse.json(
                {status: "error", message: "Product ID is required for deletion."},
                {status: 400}
            )
        }
        const readProductLists = await prisma.product.delete({
            where: {id: productId}
        });

        return NextResponse.json(
            {status: "success", message: "Product deleted successfully!", data: readProductLists},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {status: "error", message: "Failed to delete product."},
            {status: 500}
        )
    }
}

export async function PUT(request: NextRequest) {
    try {

        const {searchParams} = new URL(request.url);
        const productId = searchParams.get("id");

        const productData = await request.json();

        if (!productId) {
            return NextResponse.json(
                {status: "error", message: "Product ID is required for update."},
                {status: 400}
            )
        }
        const updateProduct = await prisma.product.update({
            where: {id: productId},
            data: productData
        });

        return NextResponse.json(
            {status: "success", message: "Product updated successfully!", data: updateProduct},
            {status: 200}
        )
    } catch (error) {
        console.error("Error updating product:", error)
        return NextResponse.json(
            {status: "error", message: "Failed to update product."},
            {status: 500}
        )
    }
}