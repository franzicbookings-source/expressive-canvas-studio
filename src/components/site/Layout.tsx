import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteNav, SiteFooter } from "./Nav";
import { WhatsAppFab } from "./WhatsAppFab";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
};
