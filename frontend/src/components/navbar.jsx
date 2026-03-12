export function Navbar({ isSidebarOpen, onToggleSidebar }) {
    return (
        <div className='navbar'>
            <div className='navbar_left'>
                <button
                    className="sidebar_toggle"
                    onClick={onToggleSidebar}
                    aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isSidebarOpen ? "✕" : "☰"}
                </button>
                {!isSidebarOpen && (
                    <div className='navlogo'>
                        <p>LogoHere</p>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default Navbar