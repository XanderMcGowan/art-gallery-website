import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import Footer from "./Footer";
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="main-container">
      <TopContainer />
      <BottomContainer />
      <Footer />
    </div>
  );
};

export default Home;
