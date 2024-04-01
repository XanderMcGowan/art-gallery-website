import Text from '../assets/text.json'

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-container">
        <h1 className="text-title-footer">
          Modern<br></br> art gallery
        </h1>
        <p className="text-copy-footer">
            {Text['footer-text']}
        </p>
        <div className="footer-icons">
          <div className="icon" id="icon-fb"></div>
          <div className="icon" id="icon-ig"></div>
          <div className="icon" id="icon-tw"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
