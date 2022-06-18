import { GetServerSidePropsContext, NextPage } from "next";
import { FetchMutalGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";

type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {

    return <div>{guilds.map((g) => <div key={g.id}>{g.name}</div>)}</div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return FetchMutalGuilds(context)
}

export default MenuPage;

