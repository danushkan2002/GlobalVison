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
import MessagesScreen from './Screens/MessagesScreen';
import MessageFormScreen from './Screens/MessageFormScreen';
import MessageScreen from './Screens/MessageScreen';
import ResultFormScreen from './Screens/ResultFormScreen';
import ResultsScreen from './Screens/ResultsScreen';
import ResultScreen from './Screens/ResultScreen';
import CourseFromScreen from './Screens/CourseFromScreen';
import CoursesScreen from './Screens/CoursesScreen';
import CourseScreen from './Screens/CourseScreen';
import ProjectFormScreen from './Screens/ProjectFormScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import ProjectScreen from './Screens/ProjectScreen';
import ArticlesCategoryScreen from './Screens/ArticlesCategoryScreen';
import ArticlesByCategoryScreen from './Screens/ArticlesByCategoryScreen';
import ArticleScreen from './Screens/ArticleScreen';
import ArticleFormScreen from './Screens/ArticleFormScreen';

function App() {
  return (
    <Router>
      <Navbar>
      <Routes>
        <Route  element={<PrivateRoute/>}>
          <Route path='/profile/' element={<ProfileScreen/>} />
          <Route path='/learn/' element={<SubjectCategoryScreen/>} />
          <Route path='/learn/:cat/' element={<SubjectsScreen/>} />
          <Route path='/learn/:cat/:id/' element={<SubjectScreen/>} />
          <Route path='/review/' element={<MessageFormScreen/>}/>
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/admin/' element={<AdminScreen/>} />
          <Route path='/register/' element={<RegisterScreen/>}/>
          <Route path='/applications/' element={<ApplicationsScreen/>}/>
          <Route path='/applications/:id/' element={<ApplicationScreen/>}/>
          <Route path='/users/' element={<UsersScreen/>}/>
          <Route path='/users/:id/' element={<UserScreen/>}/>
          <Route path='/inbox/' element={<MessagesScreen/>}/>
          <Route path='/inbox/:id' element={<MessageScreen/>}/>
          <Route path='/addResult/' element={<ResultFormScreen/>}/>
          <Route path='/results/' element={<ResultsScreen/>}/>
          <Route path='/add_course/' element={<CourseFromScreen/>}/>
          <Route path='/add_project/' element={<ProjectFormScreen/>}/>
          <Route path='/add_article/' element={<ArticleFormScreen/>}/>
          
        </Route>

        <Route element={<UnPrivateRoute/>}>
          <Route path='/application/' element={<ApplicationFormScreen/>}/>
          
        </Route>
        <Route path='/result/' element={<ResultScreen/>}/>
        <Route path='/login/' element={<LoginScreen/>}/>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/courses/' element={<CoursesScreen/>}/>
        <Route path='/courses/:id/' element={<CourseScreen/>}/>
        <Route path='/projects/' element={<ProjectsScreen/>}/>
        <Route path='/projects/:id' element={<ProjectScreen/>}/>
        <Route path='/articles/' element={<ArticlesCategoryScreen/>}/>
        <Route path='/articles/:cat/' element={<ArticlesByCategoryScreen/>}/>
        <Route path='/articles/:cat/:id/' element={<ArticleScreen/>}/>     
        
      </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
