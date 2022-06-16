import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Componets/Navbar';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
