import MainHeader from "@/components/main/main-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
};

export default Layout;
