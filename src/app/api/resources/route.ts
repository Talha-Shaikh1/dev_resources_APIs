

import { NextResponse } from 'next/server';
import { resources } from '../../../../data/resources';



export async function GET() {
  return NextResponse.json(resources);
}
