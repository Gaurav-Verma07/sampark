import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const body = await request.json();
  const data = body.data;
  // console.log('request: ', data);
  // const id = '64cdc0894196ec7b5b4076a8';
  // console.log('id: ', id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/event/update/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  const response = await res.json();
  console.log(response);
  return NextResponse.json(response);
}
