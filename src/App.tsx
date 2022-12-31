import { Header } from './components/Header/Header';
import './scss/index.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Slider } from './components/Slider/Slider';
function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <Tabs />
      <Slider />
    </div>
  );
}

export default App;
