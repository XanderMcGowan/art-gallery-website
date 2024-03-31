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
          <p className="text-sct-upper">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
        <Button />
                </div>
      </div>
      <div className="sub-container-bottom">
        <div className="flex-top">
          <div className="ft-text"></div>
          <div className="ft-photo"></div>
        </div>
        <div className="flex-bottom">
          <div className="fb-sub-1"></div>
          <div className="fb-sub-2">
            <div className="fb-sub-2-photo1"></div>
            <div className="fb-sub-2-photo2"></div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
