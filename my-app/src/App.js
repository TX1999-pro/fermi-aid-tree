import './App.css';
import SearchBar from './widgets/SearchBar.js';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <h1><em>Explore the power of quick estimation</em></h1>
        <SearchBar />
      </div>
      <hr />
      <div className='box'></div>
    </div>
  );
}

export default App;
