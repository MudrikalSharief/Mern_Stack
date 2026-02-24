import { Link } from "react-router-dom"

export function Landing() {
    return (
        <div>  
            <p>Landing Page</p>
            <Link to={"/dashboard"}>Get Started</Link>
        </div>
    )
}

export default Landing;