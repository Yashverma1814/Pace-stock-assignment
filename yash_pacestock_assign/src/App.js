import './css/login/loginPage.css'
import './css/home/homepage.css'
import './App.css';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { SubCard } from './components/homeComp/SubCard';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
