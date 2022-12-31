import { Header } from './components/Header/Header';
import './scss/index.scss';
import { Tabs } from './components/Tabs/Tabs';
function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <Tabs />
    </div>
  );
}

export default App;
