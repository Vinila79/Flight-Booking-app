import { GiRocketFlight } from "react-icons/gi";
import "./header.css"
const Header = () => {
  return (
    <header className=" w-full p-4  header">
      <nav className="max-auto navbar">
        <a href="/" className="iconspace ">
        <GiRocketFlight className="icon"/> Flight Booking
        </a>
        <button className="btn">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
