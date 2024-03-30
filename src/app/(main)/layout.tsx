import MainHeader from "@/components/main/main-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainHeader />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
