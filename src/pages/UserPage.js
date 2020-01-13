import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserPage(props) {
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true,
  }

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      // Pass our param (:id) to the API call
    //  const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)
      const { data } = await axios(`https://dummy.restapiexample.com/api/v1/employee/${props.match.params.id}`)

      // Update state
      setUser(data.data)
    }

    // Invoke the async function
    getUser()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return user.loading ? (
    <div>Loading...</div>
  ) : (

    <div className="container">
         <table width="60%" class="table table-striped">
        <tbody>
          <tr>
           <td width="10%">id</td> <td>{user.id}</td>
           </tr>
           <tr>
           <td width="10%">employee_name</td>  <td><input type="text" value={user.employee_name}></input></td> </tr>
           <td width="10%">employee_salary</td>  
           <td width="10%">
           <input type="text" value={user.employee_salary}></input></td>
                <tr>
                <td>employee_age</td>  <td><input type="text" value={user.employee_age}></input></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
