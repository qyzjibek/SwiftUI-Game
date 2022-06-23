import './App.css';
import { NavBar } from './components/NavBar';
import { GameSimulator } from './components/SImulator';
import { GameDescription } from './components/Description';
import { Editor } from './components/Editor';

function App() {
  return (
    <div>
      <NavBar />
      <GameSimulator />
      <GameDescription />
      <Editor />
    </div>
  );
}

export default App;
