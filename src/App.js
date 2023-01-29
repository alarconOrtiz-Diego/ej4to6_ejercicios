import logo from './logo.svg';
import './App.css';
import ClockFuncional from './components/pure/clockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFuncional />
      </header>
    </div>
  );
}

export default App;
