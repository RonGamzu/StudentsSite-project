import { useState } from "react";
import Header from "./Header";
import StudentList from "./StudentsList";
import StudentCard from "./StudentCard";
import { addStudent, getStudents, sortNames } from "../DAL/api";
import { Container } from "react-bootstrap";
import "./index.css";

function App() {
  const [select, setSelect] = useState(false);
  const [studentNumber, setStudentNumber] = useState(0);
  const [students, setStudents] = useState(getStudents());

  const updateStudents = (student) => {
    let newStudent = addStudent(student);
    setStudents([...students, newStudent]);
  };

  const sortStudents = () => {
    setStudents(sortNames());
  };

  const onClick = (e, index) => {
    if (select && index === studentNumber) {
      setSelect(false);
    } else {
      setStudentNumber(index);
      setSelect(true);
    }
  };

  return (
    <div>
      <Header updateStudents={updateStudents} addStudent={addStudent} />
      <Container className="Container mt-4">
        <div className="d-flex justify-content-between">
          <StudentList
            students={students}
            sortStudents={sortStudents}
            onClick={onClick}
          />
          <div>
            {select && (
              <StudentCard
                studentNumber={studentNumber}
                name={students[studentNumber].name}
                email={students[studentNumber].email}
                address={students[studentNumber].address}
                course={students[studentNumber].course}
                gender={students[studentNumber].gender}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
