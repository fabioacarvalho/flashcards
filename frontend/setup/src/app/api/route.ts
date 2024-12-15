import { NextResponse } from "next/server";

export async function GET(){
    const cards = [
        {
            id: "1",
            lastLevel: "beginner",
            front: "How are you?",
            back: "Como você está?",
            updatedAt: new Date("2024-12-12"),
            createdAt: new Date("2024-12-10"),
            picture: "https://example.com/images/how-are-you.png",
            nextView: new Date("2024-12-15"),
            daysLastView: "3",
            study: true,
        },
    ]

    return new NextResponse(JSON.stringify(cards), {
        status: 200,
        statusText: "OK",
    });
}