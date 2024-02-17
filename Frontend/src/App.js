import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TaskList from './components/TaskList/TaskList'; 
import AllUsers from './components/AllUsers/AllUsers';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header/>
      <div id="main-container">
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/mylist" element={<TaskList/>}/>
          <Route path="/users" element={<AllUsers/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
