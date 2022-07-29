import { GetServerSidePropsContext, NextPage } from "next"
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dsashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { Guild, NextPageWithLayout } from "../../../utils/types";

type Props = {
    guild: Guild;
};

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        console.log(guild);
        setGuild(guild);
    }, []);
    return (
        <div className="page">
            Dashboard page
            <p>{guild.name}</p>
        </div>
    )
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return fetchGuild(ctx);
}

export default DashboardPage; 