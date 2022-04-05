import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

// components
import AddNewStudent from './Components/AddNewStudent';
import CurrentStudents from './Components/CurrentStudents';
import Welcome from './Components/Welcome';


const exampleStudent = {
  name : "Bill",
  age : "7",
  grade : "1",
  // commands: [{"sit":"2"}],
  // oldGoals: [{"go a day without hitting":"completed: 3/31/22"}], 
  // newGoals: ["ask to go to the bathroom"],
}

function App() {
  
  const navigate = useNavigate();

  const [students, setStudents] = useState([exampleStudent])

  const onSubmit = (newStudent) => {
    setStudents([...students, newStudent]);
    navigate('/students')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='header-title'>
          <h2>STUDENT PROGRESS TRACKER</h2>
        </div>
        <nav>
          <Link className='links' to="/">HOME</Link>
          <Link className='links' to="/students" >CURRENT STUDENTS</Link>
          <Link className='links' to="/students/add" >ADD NEW STUDENT</Link>
        </nav>
      </header>

      <Routes>
        <Route element={<Welcome/>} exact path='/' />

        <Route element={
          <CurrentStudents
            students={students}
          />} exact path='/students'/>

        <Route element={
          <AddNewStudent 
          submit={onSubmit} 
          />} path='/students/add' />
      </Routes>
    </div>
  );
}

export default App;

/**
Links : CurrentStudents, AddNewStudent, Goal Ideas

 */