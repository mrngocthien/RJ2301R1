import React from 'react';

export default function StudentTable({ student }) {
  return (
    <div>
      <h1>Student List</h1>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {student.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
