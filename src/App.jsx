import './App.css';
import { BrowserRouter } from 'react-router'
import NavigationMenu from './components/task1/NavigationMenu';

function App() {

  return (
    <>
      <h3>Задание №1 - Навигационное меню</h3>
      <BrowserRouter>
        <NavigationMenu />
      </BrowserRouter>
    </>
  )
}

export default App
