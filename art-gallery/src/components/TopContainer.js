import Button from "./Button";
import Text from '../assets/text.json'

const TopContainer = () => {
    return (
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
        <p className="text-copy-sct">{Text["copy-1"]}</p>
        <Button />
      </div>
    </div>
  );
};

export default TopContainer;
