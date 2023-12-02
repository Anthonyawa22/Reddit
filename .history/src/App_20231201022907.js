import './App.css';
import Sidenav from './components/sidenav/Sidenav.js'
import Main from './components/main/Main.js'

const App = () => {
  return (
    <div className="App">
      <div className="container">
         <Sidenav />
         <Main />
      </div>
    </div>
  );
};

export default App;

