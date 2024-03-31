import Button from "./Button";

const Home = () => {
  return (
    <div className="main-container">
      <div className="sub-container-top">
        <div className="sct-black">
          <h1 className="text-title">
            Modern
            <br></br>
            Art Gallery
          </h1>
        </div>
        <div className="sct-photo"></div>
        <div className="sct-white">
          <p className="text-copy-sct">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button />
        </div>
      </div>
      <div className="sub-container-bottom">
        <div className="flex-top">
          <div className="ft-text">
            <h1 className="text-title-bottom"> Your day at the gallery</h1>
            <p className="text-copy-bottom">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
          <div className="ft-photo"></div>
        </div>
        <div className="flex-bottom">
          <div className="fb-sub-1"></div>
          <div className="fb-sub-2">
            <div className="fb-sub-2-photo1"></div>
            <div className="fb-sub-2-photo2">
              <h1 className="text-fb-sub-2-title">Come &amp; be inspired</h1>
              <p className="text-fb-sub-2-copy">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-main-container">
            <h1 className="text-title-footer">
                Modern<br></br> art gallery
            </h1>
            <p className="text-copy-footer">
            The Modern Art Gallery is free to all visitors and open seven days a week 
  from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>
            <div className="footer-icons">
                <div className="icon-fb"></div>
                <div className="icon-ig"></div>
                <div className="icon-tw"></div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
