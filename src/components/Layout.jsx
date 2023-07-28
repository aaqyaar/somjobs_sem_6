import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
}
