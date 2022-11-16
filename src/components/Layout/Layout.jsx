import Sidebar from "../Sidebar";

function Layout({ children }) {
    return (
    <div className="flex w-1/4">
        {children}
    </div>
    );
}

export default Layout;