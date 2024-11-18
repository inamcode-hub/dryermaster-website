import { NextRequest, NextResponse } from 'next/server';

// This middleware will log a message and proceed without modifying the response
export function middleware(req: NextRequest) {
  console.log('Middleware triggered for:', req.url);

  // Continue processing the request without changes
  return NextResponse.next();
}
