import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import "swiper/css";

export default function RootLayout() {
  return (
    <div className="min-h-dvh">
      <div className="font-sans">
        <header className="sticky top-0 w-full bg-gray-scale-0 px-main py-3 z-20">
          <MainNavigation />
        </header>
        <Outlet />
      </div>
    </div>
  );
}
