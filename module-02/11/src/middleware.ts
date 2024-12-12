import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/admin"];

export default async function middleware(req: NextRequest) {
  try {
    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookies().get("authToken")?.value;
    console.log(token);

    console.log(req.cookies.get("authToken")?.value);
    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
