import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const cookie = JSON.parse(req.cookies.get('userData') ?? '{}')
  const token = cookie?.token ?? false
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/usuario/:path*'],
}
