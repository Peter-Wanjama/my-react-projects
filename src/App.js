import Button from 'react-bootstrap/Button'
import ThemeSwitcher from './ThemeSwitcher';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello there</p>
        <Button variant='primary'>This is a button</Button>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
