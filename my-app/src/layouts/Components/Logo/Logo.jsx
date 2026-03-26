import "./Logo.css";
import Logo from "../../../assets/logo.svg";
function logo() {
  return (
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
  );
}
export default logo;
