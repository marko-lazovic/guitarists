import './App.css';

import Navbar from './components/Navigation/Navbar/Navbar';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navbar appName="Guitarists" />
      <div className="container py-4">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="Button group">
            <Button classes="btn btn-secondary btn-lg" name="Hendirx" />
            <Button classes="btn btn-secondary btn-lg" name="Malmsteen" />
            <Button classes="btn btn-secondary btn-lg" name="Slash" />
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
