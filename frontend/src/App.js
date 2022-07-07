import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Componets/Navbar';
import AdminScreen from './Screens/AdminScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SubjectsScreen from './Screens/SubjectsScreen';
import SubjectCategoryScreen from './Screens/SubjectCategoryScreen';
import SubjectScreen from './Screens/SubjectScreen';
import AdminRoute from './Utils/AdminRoute';
import PrivateRoute from './Utils/PrivateRoute';
import UnPrivateRoute from './Utils/UnPrivateRoute';
import ApplicationScreen from './Screens/ApplicationScreen';
import ApplicationFormScreen from './Screens/ApplicationFormScreen';
import ApplicationsScreen from './Screens/ApplicationsScreen';
import UsersScreen from './Screens/UsersScreen';
import UserScreen from './Screens/UserScreen';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  element={<PrivateRoute/>}>
          <Route path='/profile/' element={<ProfileScreen/>} />
          <Route path='/learn/' element={<SubjectCategoryScreen/>} />
          <Route path='/learn/:cat/' element={<SubjectsScreen/>} />
          <Route path='/learn/:cat/:id/' element={<SubjectScreen/>} />
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/admin/' element={<AdminScreen/>} />
          <Route path='/register/' element={<RegisterScreen/>}/>
          <Route path='/applications/' element={<ApplicationsScreen/>}/>
          <Route path='/applications/:id/' element={<ApplicationScreen/>}/>
          <Route path='/users/' element={<UsersScreen/>}/>
          <Route path='/users/:id/' element={<UserScreen/>}/>
        </Route>

        <Route element={<UnPrivateRoute/>}>
          <Route path='/application/' element={<ApplicationFormScreen/>}/>
          
        </Route>

        <Route path='/login/' element={<LoginScreen/>}/>
        <Route path='/' element={<HomeScreen/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
