import './App.css';
import Sidenav from './src/components/Sidenav/Sidenav.js'
import Main from './src/components/Main/Main.js'

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

