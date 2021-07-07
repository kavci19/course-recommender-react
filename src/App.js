import './App.css';
import {SubjectPicker, SubjectPickerHelper, Courses, Title} from './components'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subjectLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
});

function App() {

  const [department, setDepartment] = useState([])
  const [courseList, setCourseList] = useState([])

  const classes = useStyles();

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
        <div className={classes.subjectLine}>
        <SubjectPicker setDepartment = {setDepartment}/>
        <SubjectPickerHelper/>
        </div>
        {courseList.length === 0 &&
                  
           <Alert severity="error">No top-rated courses found. Select a different department!</Alert>
       
        }

        

        
        <Courses courseList = {courseList} department = {department}/>
    </div>
  );
}

export default App;
