import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dsashboard";
import { NextPageWithLayout } from "../../../utils/types";

type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: string;
    permissions: string;
    features: string[];
};

const SettingsPage: NextPageWithLayout<Guild> = () => {
    return <div className="page">Settings page</div>
}

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
};

export default SettingsPage; 