export default function StudentsList({ studentList, form, handleChange, handleSelect, handleSubmit, handleDelete }) {
    return (
        <div>
            <h1>Student List</h1>
            <div>
                <label>Name: </label>
                <input name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
                <label>Phone: </label>
                <input type="number" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div>
                <label>Email: </label>
                <input name="email" value={form.email} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Submit</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => handleSelect(student, index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  }
  