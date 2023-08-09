import { NextResponse } from 'next/server';

export async function POST(request: Request) {

 const body = await request.json()
 const data = body.data
  console.log("request: ",data )
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/ngo/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  const response = await res.json();
  console.log(response)
  return NextResponse.json(response);
}