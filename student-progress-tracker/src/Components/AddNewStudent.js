import React, { useState, useEffect } from 'react';

const initialValues = {
    name : "",
    age : "",
    grade : "",
    // commands: [], // array of objects {command/"sit": (number hooked to button)}
    // oldGoals: [], // array of objects {goal/"sit for 10 min": "accomplished 3/31"}
    // newGoals: [], // array of strings "stop yelling at recess" (with "completed" button ^)
  }

const AddNewStudent = (props) => {

    const { submit } = props

    const [disabled, setDisabled] = useState(true)
    const [values, setValues] = useState(initialValues)

    const handleChange = event => {
        const { name, value } = event.target
        setValues({...values, [name] : value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        submit(values);
        setValues(initialValues);
    }

    useEffect(() => {
        toggleDisabled()
    }, [values])

    const toggleDisabled = () => {
        if (values.name.trim().length > 1 && values.age.trim().length > 0
        && values.grade.trim().length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <h2>Add New Student Component</h2>
            <form onSubmit={handleSubmit}>
                <label>NAME:
                    <input
                        placeholder="student name"
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                    />  
                </label>
                <label>AGE:
                    <input
                        placeholder="student age"
                        value={values.age}
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <label>GRADE:
                    <input
                        placeholder="student grade"
                        value={values.grade}
                        name="grade"
                        onChange={handleChange}
                    />
                </label>
                <div className="submit">
                    <button id='add-submit' disabled={disabled} >Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddNewStudent;