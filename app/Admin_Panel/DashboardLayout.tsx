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
  const [isDarkMode, set_isDarkMode] = useState(false);
  const pathname = usePathname();
  const is_customer = false;
  const page_name = pathname.toString().split("/Admin_Panel/")[1]

  return (

    <>
      <section className="flex bg-[#F7F7F7] h-screen max-[500px]:min-h-screen overflow-hidden gap-2 items center">
        <Sidebar
          isAdminView={isAdminView}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pageName={page_name}
        />

        <div className="flex-1 flex flex-col overflow-hidden pt-2">
          
          <Header
            setIsOpen={setIsOpen}
            isAdminView={isAdminView}
            set_admin_view={set_admin_view}
            pageName={page_name}
            set_isDarkMode={set_isDarkMode}
          />

          <main className="flex-1 min-w-0 pr-2 overflow-y-auto">
            {children}
          </main>
        </div>
      </section>


    </>
  );
}