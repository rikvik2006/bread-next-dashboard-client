import { ReactElement } from "react";
import { Sidebar } from "../misc/Sidebar";

export function DashboardLayout({ children }: { children: ReactElement }) {
    return (
        <>
            <Sidebar />
            <>{children}</>
        </>
    )
}