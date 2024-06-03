import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header_section">
      <div className="container max-w-[1296px]">
        <div className="wrapper flex justify-between items-center">
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://ai-life-react.vercel.app/assets/logo-49876130.png"
                alt=""
              />
            </Link>
          </div>
          <nav className="flex gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About Us</Link>
            <Link to={"pricing"}>Pricing</Link>
            <Link to={"login"}>Login</Link>
            <Link to={"register"}>Register</Link>
          </nav>
          <button className="try_for_free-btn">Try For Free</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
