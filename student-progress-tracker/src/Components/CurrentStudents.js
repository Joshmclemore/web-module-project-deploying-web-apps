import React from 'react';

const CurrentStudents = (props) => {
    const { students } = props

    let initialId = 0

    const idx = () => initialId++

    return (
    <>
        {/* <h2>CURRENT STUDENTS COMPONENT</h2> */}
            {students.map(student => {
                return (
                    <div key={idx()} id='student-box'>
                        <h3>Name: {student.name}</h3>
                        <p>age: {student.age}</p>
                        <p>grade: {student.grade}</p>
                    </div>
                )
            })}
    </>
    )
}

export default CurrentStudents;