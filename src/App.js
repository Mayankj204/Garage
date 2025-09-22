import logo from './logo.svg';
import './App.css';
import Garage from './components/cars';

function App() {
  return (
    <>
   <div className='intro'>
    <h1>Welcome to Garage </h1>
    <p>Find your dream car here ....</p>
    </div>

    <Garage />
    </>
  );
}

export default App;
