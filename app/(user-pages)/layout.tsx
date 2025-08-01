import React, { ReactNode } from "react";

import Footer from "@/components/user/footer/Footer";
import Navbar from "@/components/user/navbar/Navbar";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="font-primary leading-[1.1]">
        <Navbar />
      </header>
      <main className="font-primary overflow-hidden leading-[1.1]">
        {children}
      </main>
      <footer className="font-primary leading-[1.1]">
        <Footer />
      </footer>
    </>
  );
};

export default UserLayout;
