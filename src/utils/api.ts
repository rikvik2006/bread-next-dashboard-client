import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import { Guild } from "./types";

const API_URL = "http://localhost:3001/api"

export const FetchMutalGuilds = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    if (!headers) return { redirect: { destination: "/" } };

    try {
        const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, { headers });
        return { props: { guilds } };
    } catch (err) {
        console.log(err);
        return { redirect: { destination: "/" } };
    }
};

export const fetchGuild = async (ctx: GetServerSidePropsContext) => {
    const headers = validateCookies(ctx);
    console.log(headers);
    if (!headers) return { redirect: { destination: "/" } };
    try {
        const { data: guild } = await axios.get<Guild>(
            `${API_URL}/guilds/${ctx.query.id}`, { headers, }
        );
        console.log(guild);
        return { props: { guild } };
    } catch (err) {
        console.log(err);
        return { redirect: { destination: "/" } };
    }
}

export const fetchValidGuild = (id: string, headers: HeadersInit) => {
    console.log(id);
    //important
    return fetch(`${API_URL}/guilds/${id}/permissions`, {
        headers,
    });
};