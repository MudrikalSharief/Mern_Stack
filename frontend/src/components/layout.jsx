import {Navbar} from "./navbar"
import { Sidebar } from "./sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react"

export function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <div className="app_layout">
            <Navbar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <main className="layout_content" onClick={closeSidebar}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout