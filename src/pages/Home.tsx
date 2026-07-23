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

    <div className="flex flex-1 items-stretch">

      {!isMobile && <SideBar />}

      <main
        className={`
          flex-1
          min-w-0
          p-6
          ${isMobile ? "pt-20" : ""}
        `}
      >
        <Dashbored />
      </main>

    </div>

    <Footer />

  </div>
);

}

export default Home;