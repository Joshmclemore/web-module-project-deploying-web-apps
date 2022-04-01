import React, { useState, useEffect } from 'react';

const AddNewStudent = (props) => {

    const { studentInfo, submit, change } = props

    const [disabled, setDisabled] = useState(true)

    const handleChange = event => {
        change(event)
    }

    const handleSubmit = event => {
        event.preventDefault();
        submit();
    }

    // const switchDisabled = () => {
    //     if(studentInfo.name.length > 1 && studentInfo.age.length > 0 && studentInfo.grade.length > 0) {
    //       setDisabled(false)
    //     } else {
    //       setDisabled(true)
    //     }
    // }
    // useEffect(() => {
    //     switchDisabled()
    // }, [studentInfo])


    return (
        <>
            <h2>Add New Student Component</h2>
            <form onSubmit={handleSubmit}>
                <label>NAME:
                    <input
                        placeholder="student name"
                        value={studentInfo.name}
                        name="name"
                        onChange={handleChange}
                    />  
                </label>
                <label>AGE:
                    <input
                        placeholder="student age"
                        value={studentInfo.age}
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <label>GRADE:
                    <input
                        placeholder="student grade"
                        value={studentInfo.grade}
                        name="grade"
                        onChange={handleChange}
                    />
                </label>
                <div className="submit">
                    <button >Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddNewStudent;