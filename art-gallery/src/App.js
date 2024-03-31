import Home from './components/Home'
import Mobile from './components/Mobile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <useMediaQuery maxWidth={600}>
 <Mobile />
</useMediaQuery>
    </div>
  );
}

export default App;
