import { NextResponse } from 'next/server';

export async function GET(request) {
  console.log('get id');
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  // const id = '64cdc0894196ec7b5b4076a8';
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/orphanage/id/${id}`,
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
