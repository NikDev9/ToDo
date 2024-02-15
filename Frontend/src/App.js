import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskList from './components/TaskList'; 
import AllUsers from './components/AllUsers';
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
