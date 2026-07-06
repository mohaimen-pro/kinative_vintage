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
  const [isAdminView, set_admin_view] = useState(false);
  const is_customer = true;
  const pathname = usePathname();

  const page_name = pathname.toString().split("/Customer_Panel/")[1]

  return (

    <>
      <section className="flex bg-[#F7F7F7] h-screen max-[500px]:min-h-screen overflow-hidden gap-2">
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
            isCustomer={is_customer}
          />

          <main className="flex-1 min-w-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </section>


    </>
  );
}