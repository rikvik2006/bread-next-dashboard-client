import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dsashboard";
import { NextPageWithLayout } from "../../../utils/types";

const CommandsPage: NextPageWithLayout = () => {
    return <div className="page">Commands page</div>
}

CommandsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
};

export default CommandsPage; 