import SideBar from "../layout/SideBar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-1">
      <Header />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 bg-gray-50 p-6">
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Home;