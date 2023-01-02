import { Header } from './components/Header/Header';
import './scss/index.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Slider } from './components/Slider/Slider';
import { CardsContainer } from './components/Cards/CardsContainer';

function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <Tabs />
      <Slider />
      <CardsContainer />
    </div>
  );
}

export default App;
