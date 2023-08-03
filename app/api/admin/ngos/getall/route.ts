import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/ngo`,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  ).then((res) => res.json());

  return NextResponse.json({ data: response });
}
