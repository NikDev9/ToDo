import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskList from './components/TaskList'; 

function App() {

  return (
    <div id="main-container">
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mylist" element={<TaskList/>}/>
      </Routes>
    </div>
  );
}

export default App;
