/** @format */

import HeaderComp from "@/components/header/HeaderComp";
import HeaderFixed from "@/components/header/HeaderFixed";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <HeaderFixed />
      <div className="flex flex-col text-[16px] text-destructive min-h-full">
        <header className="flex flex-col">
          <HeaderComp />
        </header>
        <main className="mx-4 flex grow mt-14">{children}</main>
        <footer>User Footer</footer>
      </div>
    </>
  );
};

export default layout;