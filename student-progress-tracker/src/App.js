import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

// components
import AddNewStudent from './Components/AddNewStudent';
import CurrentStudents from './Components/CurrentStudents';
import Welcome from './Components/Welcome';


const initialValues = {
  name : "",
  age : "",
  grade : "",
  // commands: [], // array of objects {command/"sit": (number hooked to button)}
  // oldGoals: [], // array of objects {goal/"sit for 10 min": "accomplished 3/31"}
  // newGoals: [], // array of strings "stop yelling at recess" (with "completed" button ^)
}

const exampleStudent = {
  name : "Bill",
  age : "7",
  grade : "1",
  // commands: [{"sit":"2"}],
  // oldGoals: [{"go a day without hitting":"completed: 3/31/22"}], 
  // newGoals: ["ask to go to the bathroom"],
}

function App() {

  const [studentInfo, setStudentInfo] = useState(initialValues)
  const [students, setStudents] = useState([exampleStudent])

  const onChange = (evt) => {
    setStudentInfo({...studentInfo, [evt.target.name]: evt.target.value})
    console.log("onChange info:", studentInfo)
  }

  const onSubmit = () => {
    setStudents([...students, studentInfo]);
    setStudentInfo({initialValues})
    console.log("onSubmit students:", students)
    console.log("onSubmit info:", studentInfo)
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
          studentInfo={studentInfo}
          change={onChange} 
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