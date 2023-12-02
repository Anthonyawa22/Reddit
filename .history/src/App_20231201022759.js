import './App.css';
import Sidenav from './components/sidenav/Sidenav.js'
import Main from './components/main/Main.js'

const App = () => {
  return (
    <div className='app'>
      <Sidenav />
      <Main />
    </div>
  );
};

export default App;

