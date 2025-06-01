export const HomeNavbar = ()=>{
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">Home Navbar</div>
            <nav className="space-x-4">
                <a  className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </nav>
        </div>
    )
}