import './App.css';
import {SubjectPicker, Courses, Title} from './components'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios';


function App() {

  const [department, setDepartment] = useState("Accounting")
  const [courseList, setCourseList] = useState([])


  useEffect(()=> {

    const getCourses = async () => {

      const url = "http://127.0.0.1:5000/courses/" + department
      var {data} = await axios.get(url)
      data = data['data']
      setCourseList(data)
      
    }

    getCourses()


  }, [department])

  return (
    
    <div className={styles.container}>
        <Title/>
        <SubjectPicker setDepartment = {setDepartment}/>
        <Courses courseList = {courseList} department = {department}/>
    </div>
  );
}

export default App;
