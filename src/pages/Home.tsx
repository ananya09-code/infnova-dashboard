import SideBar from "../layout/SideBar";
import DesktopHeader from "../layout/DesktopHeader";
import MobileHeader from "../layout/MobileHeader";
import Footer from "../layout/Footer";
import { useIsMobile } from "../hooks/useisMobile";
import Dashbored from "../layout/Dashbored";
function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
  {isMobile ? <MobileHeader /> : <DesktopHeader />}

  <div className="flex flex-1">
    {!isMobile && (
      <aside className="w-64 border-r bg-white">
        <SideBar />
      </aside>
    )}

    <main className="flex-1 p-6">
      <Dashbored />
    </main>
  </div>

  <Footer />
</div>
  );
}

export default Home;