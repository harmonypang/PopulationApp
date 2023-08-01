import './App.css';
import Census from './component/Census';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://emojiisland.com/cdn/shop/products/Earth_Globe_Americas_Emoji_large.png?v=1571606063" className="App-logo" alt="logo" />
        <p>
          <Census></Census>
        </p>
        <p id="refresh">
          Refresh to see other regions' population!
        </p>
        <a
          className="App-link"
          href="https://www.kaggle.com/datasets/peretzcohen/2019-census-us-population-data-by-state"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Source from Kaggle
        </a>
      </header>
    </div>
  );
}

export default App;
