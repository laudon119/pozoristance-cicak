import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/sr";
  return NextResponse.redirect(url);
}

// ✅ only run for the root URL
export const config = {
  matcher: ["/"],
};
