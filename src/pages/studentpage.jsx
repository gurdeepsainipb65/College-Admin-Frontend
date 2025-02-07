
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const StudentTable = ({ students }) => {
  const handleAction = (action, studentId) => {
    console.log(`${action} action for student with ID: ${studentId}`);
    // You can add the logic for View, Edit, Delete here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Student List</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Class</th>
            <th className="px-4 py-2 border">Section</th>
            <th className="px-4 py-2 border">Roll Number</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border">{student.class}</td>
              <td className="px-4 py-2 border">{student.section}</td>
              <td className="px-4 py-2 border">{student.rollNumber}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => handleAction("View", student.id)}
                  className="text-blue-500 hover:text-blue-700 mx-2"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleAction("Edit", student.id)}
                  className="text-yellow-500 hover:text-yellow-700 mx-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleAction("Delete", student.id)}
                  className="text-red-500 hover:text-red-700 mx-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
