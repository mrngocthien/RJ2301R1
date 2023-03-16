
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Employees from "../data/data";

export default function EmployeeDetail() {
  const { id } = useParams();
  const employee = Employees.find(e => e.id === Number(id));

  return (
    <div className='container'>
      <h1>Employee Detail</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Facebook</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.fullname}</td>
            <td>{employee.facebook}</td>
            <td>{employee.age}</td>
          </tr>
        </tbody>
      </table>
      <div className='btn'>
        <button><Link to="/">Go back</Link></button>
      </div>
    </div>
  );
}



