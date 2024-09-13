import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy;
        {year} Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/paulopbi/" target="_blank">
          Paulo Victor
        </a>
        , alguns direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
