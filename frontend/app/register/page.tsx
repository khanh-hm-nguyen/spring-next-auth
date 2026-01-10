import RegisterPage from "@/components/auth/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join us today.",
};

const page = () => {
  return (
    <>
      <RegisterPage />
    </>
  );
};

export default page;
