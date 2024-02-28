import "./../styles/main.scss";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <header className="row">
        <div className="col-12">
        <img src="./../../img/text.png" alt="Jennika Elisson" id="header-img" /></div>
      </header>
      <main className="row">
        <Outlet />
      </main>
      <footer className="row">
        <div className="col-12 flex">
          <p>
            <Link to={"https://github.com/jennikaelisson"} target="_blank">
              <img src="./../../img/github-mark.png" alt="Github link" />
            </Link>
          </p>
          <p>
            <Link
              to={"https://www.linkedin.com/in/jennika-elisson/"}
              target="_blank"
            >
              <img src="./../../img/LI-In-Bug.png" alt="Github link" />
            </Link>
          </p>
        </div>
        <div className="col-12">
          <img
            id="copyright"
            src="./../../img/copyright.png"
            alt="Copyright Jennika Elisson"
          />
        </div>
      </footer>
    </>
  );
};
