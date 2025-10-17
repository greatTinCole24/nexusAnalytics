import { NextResponse } from 'next/server';
import { registry } from '@nexus/core';

export async function GET() {
  return NextResponse.json({ games: registry.games });
}
