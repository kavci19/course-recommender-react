import './App.css';
import {SubjectPicker, SubjectPickerHelper, Courses, Title} from './components'
import styles from './App.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  subjectLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  center: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
 }
});

function App() {

  const [department, setDepartment] = useState([])
  const [courseList, setCourseList] = useState([])
  const [loading, setLoading] = useState(false)

  const classes = useStyles();

  useEffect(()=> {

    const getCourses = async () => {
      
      // const url = "http://127.0.0.1:5000/courses/"
      const url = "https://course-rec-api.herokuapp.com/courses/"
      setLoading(true)
      var {data} = await axios.get(url, {
        params: {
          deps: department
        }
      })
      data = data['data']

      setLoading(false)
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
        <div className={classes.center}>
          {loading ? (<CircularProgress />) : ""}
        </div>

        
        
        {courseList.length === 0 &&
                  
           <Alert severity="error">No top-rated courses found. Select a different department!</Alert>
       
        }

        <Courses courseList = {courseList} department = {department}/>
    </div>
  );
}

export default App;
