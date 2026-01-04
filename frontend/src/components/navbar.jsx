import { Link } from "react-router-dom"
import { navbarData } from "./navbardata" // import the navbar data from navbardata.js

export function Navbar() {
    return (
        <div className='navbar'>
            {
                navbarData.map((page) => { // map through the navbar data to create links   
                    return (
                        <Link to={page.path} key={page.id} className='navlink'>
                            <button>{page.name}</button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Navbar