import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
    return (
        <form className="flex items-center w-full bg-white rounded-lg shadow-md px-4 py-2">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <Button type="submit" className="ml-3">Search</Button>
        </form>
    );
};