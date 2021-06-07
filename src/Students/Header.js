import {Navbar, Container} from 'react-bootstrap'
import StudentForm from "./StudentForm";

function Header({updateStudents}) {
    return (
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Students.com</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end" style={{color: 'white'}}>
                <StudentForm updateStudents={updateStudents}/>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;