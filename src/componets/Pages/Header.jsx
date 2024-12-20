import logo from "../../assets/Images-logos/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto my-4" src={logo} alt="" />
      <p className="text-lg mb-3">Journalism Without Fear or Favour</p>
      <p className="text-xl mb-2">{moment().format("dddd, MMMM M, YYYY ")}</p>
    </div>
  );
};

export default Header;
