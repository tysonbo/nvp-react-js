import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        This application is calling this api using react/axios:
      </p><br></br>

      <a href="http://dummy.restapiexample.com/api/v1/employees">http://dummy.restapiexample.com/api/v1/employees</a>
      <br/>
      <br/>     
            <h3>Click 'Users' on the menu bar to the left or the drop down on the top right.</h3>
    </div>
  )
}