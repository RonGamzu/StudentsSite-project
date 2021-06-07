import { useState } from "react";
import "./login.css";
import {
  Form,
  Col,
  InputGroup,
  Button,
  Container,
  Modal,
  ToggleButton,
  ButtonGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdSchool } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import ErrorMessages from "./ErrorMessages";

function StudentForm(props) {
  const resetData = {
    username: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: 2,
      },
    },
    email: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern:
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      },
    },
    address: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: 10,
      },
    },
    course: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },
    gender: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },
  }
  const [data, setData] = useState({...resetData});
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setData({...resetData})
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { validations } = data[name];
    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }
    if (
      name === "email" &&
      validations.pattern &&
      !validations.pattern.test(value)
    ) {
      newErrors.push(`Invalid ${name} value`);
    } else if (validations.pattern && value.length < validations.pattern) {
      newErrors.push(`Invalid ${name} value`);
    }
    setData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        value: value,
        errors: newErrors,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onClick = () => {
    let error = 0;
    for (const name in data) {
      const value = data[name].value
      validateInput({ target: { value, name } });
      if (!value) {
        error++
      }
    }
    if (error === 0) {
      props.updateStudents(data)
      handleClose();
    }
  }
  return (
    <>
      <Button variant="light" onClick={handleShow} style={{fontWeight: 'bold'}}>
        Add student
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="title text-center modalContainer">
          <Col>
            <h1>Students Details</h1>
            <p>Hello Student! please fill in your details</p>
            </Col>
          </Modal.Header>
          <Modal.Body className="modalContainer">
          <Container className="loginContainer">
            <Form onSubmit={onSubmit}>
              <Form.Row className="d-flex justify-content-between my-2">
                <Form.Group
                  as={Col}
                  md="4"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaUserAlt />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      className={
                        data.username.errors.length
                          ? "form-control  alert-danger"
                          : "form-control"
                      }
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Username"
                      aria-describedby="inputGroupPrepend"
                      onBlur={validateInput}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                  <div style={{ height: "30px" }}>
                    <ErrorMessages errors={data.username.errors} />
                  </div>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <MdEmail />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      className={
                        data.email.errors.length
                          ? "form-control  alert-danger"
                          : "form-control"
                      }
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      defaultValue=""
                      onBlur={validateInput}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                  <div style={{ height: "30px" }}>
                    <ErrorMessages errors={data.email.errors} />
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row className="my-2">
                <Form.Group
                  as={Col}
                >
                  <Form.Label>Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <BiBuildings />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      className={
                        data.address.errors.length
                          ? "form-control alert-danger"
                          : "form-control"
                      }
                      id="address"
                      name="address"
                      as="textarea"
                      type="email"
                      placeholder="Street, Number, City, Zip"
                      defaultValue=""
                      onBlur={validateInput}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                  <div style={{ height: "30px" }}>
                    <ErrorMessages errors={data.address.errors} />
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row className="d-flex justify-content-between my-2">
                <Form.Group
                  as={Col}
                  md="4"
                >
                  <Form.Label>Course</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <MdSchool />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      className={
                        data.course.errors.length ? "alert-danger" : ""
                      }
                      id="course"
                      name="course"
                      as="select"
                      placeholder="Select Course"
                      onBlur={validateInput}
                    >
                      <option hidden value="">
                        Select Course
                      </option>
                      <option>JS</option>
                      <option>React</option>
                      <option>Node</option>
                      <option>MongoDB</option>
                      <option>SQL</option>
                    </Form.Control>
                  </InputGroup>
                  <div style={{ height: "30px" }}>
                    <ErrorMessages errors={data.course.errors} />
                  </div>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label style={{ display: "block" }}>Gender</Form.Label>
                  <ButtonGroup
                    required
                    toggle
                    id="gender"
                    name="gender"
                    type="checkbox"
                    onChange={validateInput}
                  >
                    <ToggleButton
                    type= 'radio'
                      variant="outline-success"
                      className={data.gender.errors.length ? "alert-danger" : ""}
                      name="gender"
                      value={"Female"}
                      checked={data.gender.value === 'Female'}
                    >
                      Female
                    </ToggleButton>
                    <ToggleButton
                    type= 'radio'
                      variant="outline-success"
                      className={data.gender.errors.length ? "alert-danger" : ""}
                      name="gender"
                      value={"Male"}
                      checked={data.gender.value === 'Male'}
                    >
                      Male
                    </ToggleButton>
                  </ButtonGroup>
                  <div style={{ height: "30px" }}>
                    <ErrorMessages errors={data.gender.errors} />
                  </div>
                </Form.Group>
              </Form.Row>
              <Button className="w-100" type="submit" onClick={onClick}>
                Submit form
              </Button>
            </Form>
          </Container>
          </Modal.Body>
      </Modal>
    </>
  );
}

export default StudentForm;