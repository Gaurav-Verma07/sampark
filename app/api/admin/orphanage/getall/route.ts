import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(`http://localhost:5000/api/orphanage`, {
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return NextResponse.json({ data: response });
}
