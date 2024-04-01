import Text from '../assets/text.json'
import '../styles/BottomContainer.css'

const BottomContainer = () => {
  return (
    <div className="sub-container-bottom">
      <div className="flex-top">
        <div className="ft-text">
          <h1 className="text-title-bottom"> Your day at the gallery</h1>
          <p className="text-copy-bottom">
                {Text['copy-2']}
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
                {Text['copy-3']}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;
