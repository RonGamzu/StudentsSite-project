let students = [
  {
    name: "Ron Gamzu",
    email: "Ron3121998@gmail.com",
    address: "Ashdod, Nahalal 1",
    course: "JS",
    gender: "Male",
  },
  {
    name: "Mark Zukerberg",
    email: "Zuki350@facebook.com",
    address: "NYC, Lorem 25",
    course: "React",
    gender: "Male",
  },
];
const getStudents = () => {
  if (!JSON.parse(localStorage.getItem("students"))) {
    localStorage.setItem("students",JSON.stringify([...students]));
  }
  return JSON.parse(localStorage.getItem("students"));
};

const addStudent = (student) => {
  const localStudents = JSON.parse(localStorage.getItem("students"));
  const newStudent = {
    name: student.username.value,
    email: student.email.value,
    address: student.address.value,
    course: student.course.value,
    gender: student.gender.value
  }
  localStorage.setItem("students",JSON.stringify([...localStudents, newStudent]));
  return newStudent
}

const sortNames = () =>{
  const localStudents = JSON.parse(localStorage.getItem("students"));
  localStudents.sort(function(a, b){
    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;
})
localStorage.setItem("students",JSON.stringify([...localStudents]));
return JSON.parse(localStorage.getItem("students"));
}


export { students, getStudents, addStudent, sortNames};
