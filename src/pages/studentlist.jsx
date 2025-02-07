import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const StudentList = () => {
  const students = [
    { id: 1, name: "John Doe", class: "10", section: "A", rollNumber: "23" },
    { id: 2, name: "Jane Smith", class: "10", section: "B", rollNumber: "24" },
    // Add more student objects as needed
  ];

  return (
    <div className="bg-gray-100 p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full  bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Class</th>
              <th className="py-3 px-6 text-left">Section</th>
              <th className="py-3 px-6 text-left">Roll Number</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.name}</td>
                <td className="py-3 px-6">{student.class}</td>
                <td className="py-3 px-6">{student.section}</td>
                <td className="py-3 px-6">{student.rollNumber}</td>
                <td className="py-3 px-6">
                  <div className="flex space-x-2">
                    <Link
                      to={`/students/${student.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to={`/students/edit/${student.id}`}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      to={`/students/delete/${student.id}`}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
