// import Image from "next/image";
// import Button from "@/components/Button";
// import {Button} from "@/components/ui/button";
import { HomeNavbar } from "@/modules/home/ui/components/home-navbar";

export default function Home() {
  return (
    <div className="h-20">
      {/* <HomeNavbar/> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700">This is a simple home page layout.</p>
        {/* Add more content or components as needed */}
      </div>
    </div>
  );
}
