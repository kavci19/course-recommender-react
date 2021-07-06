import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import styles from './SubjectPicker.module.css';

const SubjectPicker = ({setDepartment}) => {


    const optionsList = ["Accounting", "Anthropology"];


    return (

        <div className={styles.container}>

            <Autocomplete
                id="subject-picker"
                options={optionsList}
                //getOptionLabel={(option) => option.title}
                style={{ width: 300, marginBottom: 20 }}
                renderInput={(params) => <TextField {...params} label="Search subject(s)" variant="outlined" />}
                autoComplete={true}
                onChange={(event, value) => setDepartment(value)}
                color='white'
            />


        </div>
    )
}

export default SubjectPicker;