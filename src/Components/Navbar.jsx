import logo from ".././assets/yebena-blanco.png";

//styles
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <img
        className="navbar-brand"
        src={logo}
        alt="logo"
        width="80px"
        height="90px"
      />

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <h1 className="title nav-link">Menu</h1>
        </li>
        </ul>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
}
