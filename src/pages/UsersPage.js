import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UsersPage(props) {
  // Setting initial state
  const initialUserState = {
    users: [],
    loading: true,
  }

  // Getter and setter for user state
  const [users, setUser] = useState(initialUserState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUsers = async () => {
      // Pass our param (:id) to the API call
    //  const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)
      const { data } = await axios(`https://dummy.restapiexample.com/api/v1/employees`)

      // Update state
      setUser(data.data)
    }

    // Invoke the async function
    getUsers()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return users.loading ? (
    <div>Loading...</div>
  ) : (

    <div className="container">
         <table width="60%" className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>employee_name</th>
            <th>employee_salary</th>
            <th>employee_age</th>
          </tr>
        </thead>
        <tbody>
            {users.map(function(user){
                 return <tr key='{user.id}'>
                 <td>{user.id}</td>
                 <td><a href={'/user/'+ user.id}>{user.employee_name}</a></td>
                 <td>{user.employee_salary}</td>
                 <td>{user.employee_age}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}