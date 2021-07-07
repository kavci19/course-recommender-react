import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import styles from './SubjectPicker.module.css';

const codes = {'Accounting': 'ACCT',
    'Actuarial Science': 'ACTU',
    'African American and African Diaspora': 'AFAM',
    'Africana Studies': 'AFSB',
    'American Language Program': 'AMLP',
    'American Studies': 'AMST',
    'American Studies @Barnard': 'AMSB',
    'Anesthesiology': 'ANES',
    'Anthropology': 'ANTH',
    'Anthropology @Barnard': 'ANTB',
    'Applied Analytics': 'APAN',
    'Applied Physics and Applied Mathematics': 'APAM',
    'Architecture @Barnard': 'ARCB',
    'Architecture, Planning and Preservation': 'ARPL',
    'Art History @Barnard': 'ARHB',
    'Art History and Archaeology': 'AHAR',
    'Arts, School of the': 'ARTS',
    'Asian and Middle East @Barnard': 'ASMB',
    'Astronomy': 'ASTR',
    'Athena Center for Leadership Studies @Barnard': 'ACLB',
    'Bioethics': 'BIET',
    'Biological Sciences': 'BIOS',
    'Biological Sciences @ Barnard': 'BIOB',
    'Biomedical Engineering': 'BMEN',
    'Biomedical Informatics': 'BINF',
    'Biostatistics': 'BIST',
    'Business': 'BUSI',
    'Business Economics': 'BUEC',
    'Cellular, Molecular, and Biophysical Studies': 'CMBS',
    'Chemical Engineering': 'CHEN',
    'Chemistry': 'CHEM',
    'Chemistry @Barnard': 'CHMB',
    'Civil Engineering and Engineering Mechanics': 'CEEM',
    'Classics': 'CLAS',
    'Classics @Barnard': 'CLSB',
    'Columbia College': 'COLL',
    'Committee on Global Thought': 'CGTH',
    'Comparative Literature and Society @Barnard': 'CSOB',
    'Comparative Literature and Society, Institute for': 'CCLS',
    'Computer Science': 'COMS',
    'Computer Science @Barnard': 'COMB',
    'Consortium for Critical Interdisciplinary Studies @Barnard': 'CCIB',
    'Construction Administration': 'CNAD',
    'Core (A&S)': 'CORE',
    'Dance @Barnard': 'DANB',
    'Decision, Risk and Operations': 'DROM',
    'Dental and Oral Surgery': 'DEOS',
    'Earth and Environmental Engineering': 'EAEE',
    'Earth and Environmental Sciences': 'EESC',
    'Earth Institute': 'EI',
    'East Asian Languages and Cultures': 'EALC',
    'Ecology, Evolution, and Environmental Biology': 'EEEB',
    'Economics': 'ECON',
    'Economics @Barnard': 'ECOB',
    'Education @Barnard': 'EDNB',
    'Electrical Engineering': 'ELEN',
    'Engineering': 'ENGI',
    'English @Barnard': 'ENGB',
    'English and Comparative Literature': 'ENCL',
    'Enterprise Risk Management': 'ERM',
    'Environmental Health Sciences': 'EHSC',
    'Environmental Sciences @Barnard': 'ENSB',
    'Epidemiology': 'EPID',
    'Epidemiology: Exec Master Program': 'EXEP',
    'Ethnicity and Race, Center for': 'CSER',
    'Executive Classes in HPM': 'EXEC'
}

const SubjectPicker = ({setDepartment}) => {

    

    const optionsList = Object.keys(codes)


    return (

        <div className={styles.container}>

            <Autocomplete
                multiple
                id="subject-picker"
                options={optionsList}
                //getOptionLabel={(option) => option.title}
                style={{ width: 300, margin: 20 }}
                renderInput={(params) => <TextField {...params} label="Type in subjects..." variant="outlined" />}
                autoComplete={true}
                onChange={(event, value) => setDepartment(value)}
                color='white'
            />


        </div>
    )
}

export default SubjectPicker;