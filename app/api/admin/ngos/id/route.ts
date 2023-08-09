import { NextResponse } from 'next/server';

export async function GET() {
  console.log('get id');
  // const body = await request.json();
  // const data = body.data;
  const id = '64cdc0894196ec7b5b4076a8';
  // console.log('request: ', data);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/ngo/id/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const response = await res.json();
  console.log(response);
  return NextResponse.json(response);
}