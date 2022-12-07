import './css/login/loginPage.css'
import './css/home/homepage.css'
import './App.css';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { SubCard } from './components/homeComp/SubCard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
