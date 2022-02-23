export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-md p-3 mb-2 bg-primary text-white">
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarsExampleDefault"
      >
        <ul className="navbar-nav mr-auto d-flex">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              <h2>LOGO</h2>
            </a>
          </li>
        </ul>
        <div>
          <ul className="navbar-nav mr-auto d-flex">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <h2>Home</h2>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <h2>About</h2>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <h2>Contact</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
