import DashboardPage from "@/components/dashboard/DashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const page = () => {
  return (
    <>
      <DashboardPage />
    </>
  );
};

export default page;
