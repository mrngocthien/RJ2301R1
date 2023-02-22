import React from 'react';
import { Link } from 'react-router-dom';
import Employees from '../data/data';

export default function EmployeeList({ user, onLogout }) {

  return (
      <div className="container">
        <h1>Welcome {user.email}</h1>
        <div className="btn">
          <button onClick={onLogout}>Logout</button>
        </div>
        <h3>employees list :</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>
                  <button><Link to={`/employees/${employee.id}`}>Details</Link></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}
