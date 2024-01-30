import './../styles/main.scss';
import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"


export const Layout = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>   
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}