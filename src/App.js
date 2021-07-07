import './App.css';
import {SubjectPicker, SubjectPickerHelper, Courses, Title} from './components'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';


function App() {

  const [department, setDepartment] = useState([])
  const [courseList, setCourseList] = useState([])

  useEffect(()=> {

    const getCourses = async () => {
      
      // const url = "http://127.0.0.1:5000/courses/"
      const url = "https://course-rec-api.herokuapp.com/courses/"
      var {data} = await axios.get(url, {
        params: {
          deps: department
        }
      })
      data = data['data']

      setCourseList(data)

    }

    getCourses()
    


  }, [department])

console.log(department)
  return (
    
    <div className={styles.container}>
        <Title/>
        <SubjectPickerHelper/>
        <SubjectPicker setDepartment = {setDepartment}/>
        {courseList.length === 0 &&
                  
           <Alert severity="error">No top-rated courses found. Select a different department!</Alert>
       
        }

        

        
        <Courses courseList = {courseList} department = {department}/>
    </div>
  );
}

export default App;
