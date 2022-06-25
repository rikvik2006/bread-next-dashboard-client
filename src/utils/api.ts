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

export const fetchValidGuild = (id: string, headers: HeadersInit) => {

    //important
    return fetch(new URL(`${API_URL}/guilds/${id}/permissions`), {
        headers,
    });
};