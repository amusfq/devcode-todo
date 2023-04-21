import Navbar from "@/layouts/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F4F4F4] min-h-[calc(100vh-48px)]">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
