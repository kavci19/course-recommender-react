import './App.css';
import {SubjectPicker, Courses, Title} from './components'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [department, setDepartment] = useState("Accounting")
  const [courseList, setCourseList] = useState([])

  const getCourses = async () => {

    const url = "http://127.0.0.1:5000/courses/" + department
    var {data} = await axios.get(url)
    data = data['data']
    setCourseList(data)
    
  }

  useEffect(()=>getCourses(), [department])

  return (
    
    <div className={styles.container}>
        <Title/>
        <SubjectPicker setDepartment = {setDepartment}/>
        <Courses courseList = {courseList}/>
    </div>
  );
}

export default App;
