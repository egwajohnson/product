import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";

function AppLayout({ children }) {
  return (
    <div>
      <div className="main">
        <Header />
        <main className="child">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
