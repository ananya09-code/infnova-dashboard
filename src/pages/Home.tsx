import SideBar from "../layout/SideBar";
import DesktopHeader from "../layout/DesktopHeader";
import MobileHeader from "../layout/MobileHeader";
import Footer from "../layout/Footer";
import { useIsMobile } from "../hooks/useisMobile";
import Dashbored from "../layout/Dashbored";
function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen flex-col gap-1">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}

      <div className="flex flex-1">
        {!isMobile && <SideBar />}

        <main className="flex-1 bg-gray-50 p-6">
          <Dashbored/>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Home;