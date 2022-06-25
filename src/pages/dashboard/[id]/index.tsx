import { GetServerSidePropsContext, NextPage } from "next"
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dsashboard";
import { fetchGuild } from "../../../utils/api";
import { NextPageWithLayout } from "../../../utils/types";

const DashboardPage: NextPageWithLayout = () => {
    return <div className="page">Dashboard page</div>
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return fetchGuild(ctx);
}

export default DashboardPage; 