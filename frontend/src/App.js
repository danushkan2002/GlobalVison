import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Componets/Navbar';
import AdminScreen from './Screens/AdminScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SubjectCategoryScreen from './Screens/SubjectCategoryScreen';
import SubjectsScreen from './Screens/SubjectsScreen';
import AdminRoute from './Utils/AdminRoute';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  element={<PrivateRoute/>}>
          <Route path='/profile' element={<ProfileScreen/>} />
          <Route path='/learn' element={<SubjectsScreen/>} />
          <Route path='/learn/:cat' element={<SubjectCategoryScreen/>} />
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/admin' element={<AdminScreen/>} />
        </Route>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/register' element={<RegisterScreen/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
