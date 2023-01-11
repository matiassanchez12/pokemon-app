import "./Footer.css";

const Footer = () => {
  return (
    <div className="section__padding">
      <hr />

      <div className="flex__between app__footer">
        <p className="p__opensans">Hecho por Matias Sanchez</p>

        <a href="https://github.com/matiassanchez12/repo" target="_blank" className="footer__link p__opensans">
          Link al repo
        </a>
      </div>
    </div>
  );
};

export default Footer;
