import { useState } from "react";
const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
  ]);
  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };
  return (
    <div>
      <h2>Student Management</h2>
      {students.map(s => (
        <p key={s.id}>
          {s.name}
          <button onClick={() => deleteStudent(s.id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};
export default StudentList;