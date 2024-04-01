import Button from "./Button";

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
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
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
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
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
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
      <div className="footer">
        <h1 className="footer-title">
          Modern
          <br></br>
          Art Gallery
        </h1 >
        <p className="footer-copy">
        The Modern Art Gallery is free to all visitors and open seven days a week 
  from 8am to 9pm. Find us at 99 King Street, Newport, USA.
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
