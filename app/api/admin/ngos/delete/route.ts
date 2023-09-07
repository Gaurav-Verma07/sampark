import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const data = body.data;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/ngo/delete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  const response = await res.json();
  return NextResponse.json(response);
   }