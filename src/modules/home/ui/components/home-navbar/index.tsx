import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SearchBar } from "./searchBar";

export const HomeNavbar = () => {
    return (
      <header className="bg-gray-800 text-white px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-screen-xl mx-auto">
                {/* Left: Logo or Title */}
                <div className="text-xl font-bold">Home Navbar</div>

                {/* Center: Search Bar */}
                <div className="w-full md:w-1/2">
                    <SearchBar />
                </div>

                {/* Right: Sidebar Trigger & Links */}
                <div className="flex items-center gap-4">
                    <SidebarProvider>
                        <SidebarTrigger />
                    </SidebarProvider>
                    <nav className="space-x-4 hidden md:block">
                        {/* <a href="/" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/contact" className="hover:underline">Contact</a> */}
                    </nav>
                </div>
            </div>
        </header>
    );
};
