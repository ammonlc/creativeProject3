import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Mower">Mower</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Groceries">Groceries</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/ComingSoon">Coming Soon</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    <div class="footer">
      <a class="nav-link" href="https://github.com/ammonlc/creativeProject3">GitHub</a>
    </div>
    </>
  )
};

export default Layout;