import Button from "./Button";
import Text from '../assets/text.json'
import '../styles/Mobile.css'

const Mobile = () => {
  return (
    <div className="mobile-container">
      <div className="container-top">
        <div className="container-top-photo"></div>
        <h1 className="container-top-title">
          modern
          <br></br>
          art gallery
        </h1>
        <p className="container-top-copy">
          {Text["copy-1"]}
        </p>
        <Button />
      </div>
      <div className="container-bottom">
        <div className="container-bottom-photo1"></div>
        <h1 className="container-bottom-title1">
          Your day
          <br></br>
          at the gallery
        </h1>
        <p className="container-bottom-copy1">
        {Text["copy-2"]}
        </p>
        <div className="container-bottom-photo2"></div>
        <div className="container-bottom-photo3"></div>
        <div className="container-bottom-text-box">
          <h1 className="container-bottom-title2">
            Come &amp; be
            <br></br>
            inspired
          </h1>
          <p className="container-bottom-copy2">
          {Text["copy-3"]}
          </p>
        </div>
      </div>
      <div className="footer">
        <h1 className="footer-title">
          Modern
          <br></br>
          Art Gallery
        </h1>
        <p className="footer-copy">
        {Text["footer-text"]}
        </p>
        <div className="footer-icons">
          <div className="icon" id="icon-fb"></div>
          <div className="icon" id="icon-ig"></div>
          <div className="icon" id="icon-tw"></div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
