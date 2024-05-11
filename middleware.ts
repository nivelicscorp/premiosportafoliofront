import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('user-data')
  if (!cookie) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/usuario/:path*'],
}
