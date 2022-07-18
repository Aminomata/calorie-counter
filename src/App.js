import CaloriesSlider from './components/CaloriesSlider/CaloriesSlider';
import './App.scss';
import { Container } from '@mui/system';
import { macrosEnum } from './components/MacroSlider/constants';
import MacroSlider from './components/MacroSlider/MacroSlider';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <CaloriesSlider />
        {Object.keys(macrosEnum).map(v => <MacroSlider key={v} macroType={v} />)}
      </Container>
    </div>
  );
}

export default App;
