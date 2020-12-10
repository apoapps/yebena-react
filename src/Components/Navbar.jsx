import logo from ".././assets/yebena-blanco.png";

//styles
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">
      <img
        src={logo}
        alt="logo"
        width="80px"
        height="80px"
      />
      <h1 className="title">Menu</h1>
      </div>

      <div className="collapse navbar-collapse" id="navbarColor01">

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
