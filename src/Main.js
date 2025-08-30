import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header'
const Main = () => {
  return (
    <>
<Header/>
      <main className="main-content">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Main;
