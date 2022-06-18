import { NextPage } from "next"
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dsashboard";
import { NextPageWithLayout } from "../../../utils/types";

const DashboardPage: NextPageWithLayout = () => {
    return <div className="page">Dashboard page</div>
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
};

export default DashboardPage; 