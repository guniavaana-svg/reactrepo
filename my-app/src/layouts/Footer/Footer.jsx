import Nav from "../Components/Nav/Nav.jsx";
import Logo from "../Components/Logo/Logo.jsx";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer container">
        <div className="footerItems">
          <Logo></Logo>
          <Nav></Nav>
        </div>
        <p>
          &copy;{new Date().getFullYear()} განათლებისა და მეცნიერების სამინისტრო
        </p>
      </footer>
    </>
  );
}
export default Footer;
