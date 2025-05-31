interface LayoutProps{
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps)=>{
    return (
    <div>
        <h1 className="text-2xl font-bold">Feed Layout</h1>
        <div className="mt-4">
            {children}
        </div>
    </div>
    )
}

export default Layout;