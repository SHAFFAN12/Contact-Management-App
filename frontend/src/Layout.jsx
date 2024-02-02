import { Outlet, Link } from "react-router-dom";
import {useEffect} from "react";

const Layout = () => {
  useEffect(() => {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.innerHTML = link.innerText
        .split('')
        .map((letters, i) => `<span style="transition-delay:${i * 60}ms;">${letters}</span>`)
        .join('');
    });
  }, []);
  return (
    <>
      <nav className="shadow-xl">
        <ul className={"flex  m-3 p-3 space-x-5 font-bold"} >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Sign Up</Link>
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;