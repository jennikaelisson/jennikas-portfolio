import './../styles/main.scss';
import { Link, Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"


export const Layout = () => {
    return (
        <>
            <header>
                <NavBar />
                <img src="./../../img/text.png" alt="Jennika Elisson" />
            </header>   
            <main>
                <Outlet />
            </main>
            <footer>
                <p><Link to={"https://github.com/jennikaelisson"} target="_blank"><img src="./../../img/github-mark.png" alt="Github link" /></Link></p>
                <p><Link to={"https://www.linkedin.com/in/jennika-elisson/"} target="_blank"><img src="./../../img/LI-In-Bug.png" alt="Github link" /></Link></p>
                
            </footer>
        </>
    )
}