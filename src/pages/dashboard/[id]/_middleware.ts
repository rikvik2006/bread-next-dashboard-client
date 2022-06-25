import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "../../../utils/api";

const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies["connect.sid"];
    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false;
}

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log("Middleware Function");
    console.log(req.page.params);
    const headers = validateMiddlewareCookies(req);
    if (!headers) return NextResponse.redirect("/");
    if (!req.page.params) return NextResponse.redirect("/menu");
    const { id } = req.page.params;
    console.log(id);
    const response = await fetchValidGuild(id.toString(), headers);

    //important
    return response.status === 200 ? NextResponse.next() : NextResponse.redirect(new URL("/", req.url))
}