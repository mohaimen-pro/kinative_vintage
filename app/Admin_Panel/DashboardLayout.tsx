"use client";

import { useState } from "react";
import Header from "../Templates/Header"
import Sidebar from "../Templates/sidebar"
import { usePathname } from "next/navigation";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminView, set_admin_view] = useState(true);
  const pathname = usePathname();

  const page_name = pathname.toString().split("/Admin_Panel/")[1]

  return (

    <>
      <section className="flex bg-[#F7F7F7] h-screen overflow-hidden">
        <Sidebar
          isAdminView={isAdminView}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pageName={page_name}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            setIsOpen={setIsOpen}
            isAdminView={isAdminView}
            set_admin_view={set_admin_view}
            pageName={page_name}
          />

          <main className="flex-1 min-w-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </section>


    </>
  );
}