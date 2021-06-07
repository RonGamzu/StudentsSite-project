import { Table, Tooltip, OverlayTrigger } from "react-bootstrap";
import "./studentsList.css";


function StudentList(props) {
  return (
    <div style={{ width: "50%" }}>
      <Table
        striped
        bordered
        hover
        style={{
          width: "50%",
          backgroundColor: "white",
          boxShadow: "10px 10px 5px grey",
        }}
        className="text-center"
      >
        <thead style={{ fontSize: "25px" }}>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">
                Click here to sort the list by neme
              </Tooltip>
            }
          >
            <tr>
              <th
                onClick={props.sortStudents}
                style={{ cursor: "pointer" }}
              >
                Student name
              </th>
            </tr>
          </OverlayTrigger>
        </thead>

        <tbody style={{ fontSize: "20px" }}>
          {props.students.map((student, index) => (
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">
                  Click here to show/close {student.name}'s details
                </Tooltip>
              }
            >
              <tr
                id={index}
                key={index}
                onClick={(e) => props.onClick(e, index)}
              >
                <td>{student.name}</td>
              </tr>
            </OverlayTrigger>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default StudentList;
