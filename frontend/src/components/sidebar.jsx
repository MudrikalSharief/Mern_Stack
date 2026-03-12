import { NavLink } from "react-router-dom"
import { navbarData } from "./navbardata"

export function Sidebar({ isOpen, onClose }) {
    return (
        <>
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar_header">
                    <p>LogoHere</p>
                </div>
                <div className="sidebar_nav">
                    {
                        navbarData.map((page) => {
                            const Icon = page.icon

                            return (
                                <NavLink
                                    to={page.path}
                                    key={page.id}
                                    className={({ isActive }) => `sidelink ${isActive ? "active" : ""}`}
                                    onClick={onClose}
                                >
                                    <button>
                                        {Icon && <Icon className="sidelink_icon" aria-hidden="true" />}
                                        <span>{page.name}</span>
                                    </button>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </aside>
            {isOpen && <div className="sidebar_overlay" onClick={onClose}></div>}
        </>
    )
}

export default Sidebar