import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  return NextResponse.json({ time: new Date().toLocaleString() });
}
