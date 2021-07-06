import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useEffect} from 'react'

import { 
    Grid,
    Typography,
    TableFooter,
    Link
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.primary
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '10px 10px',
        display: 'inline-block'
    }
  }));

export default function Courses({courseList, department}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(()=> {

    const resetPage = () => {

      setPage(0)
    }

    resetPage()

    console.log('Resetting Page')


  }, [department])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Course Details</TableCell>
            <TableCell className={classes.tableHeaderCell}>Instructor</TableCell>
            <TableCell className={classes.tableHeaderCell}>Times</TableCell>
            <TableCell className={classes.tableHeaderCell}>Score</TableCell>
            <TableCell className={classes.tableHeaderCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.call_no}>
              <TableCell>
                  <Grid container>
                 
                  
                      <Grid item lg={10}>
                          <Typography color="primary" variant="subtitle2">
                            <Link href={row.link} >
                              {row.title}
                            </Link>
                          </Typography>
                          <Typography color="textSecondary" variant="body2">Section: {row.section}</Typography>
                          <Typography color="textSecondary" variant="body2">Call Number: {row.call_no}</Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.nugget === 'Gold' && 'gold') ||
                        (row.nugget === 'Silver' && 'grey'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.root}>
                  <Link href={row.link} >
                    CULPA
                  </Link>
                </Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={courseList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}



/*

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img from "./greyimg.jpg";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 20
  },
  base: {
    marginTop: 50,
    maxWidth: '40%'
  },
  a: {
    textDecoration: 'none',
    font: 'blue'
  }
});

export default function StickyHeadTable({courseList}) {
    const classes = useStyles()
    const data = courseList
    return (
        <div className={classes.base}>
            <Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map(elem => (
                    <Grid item xs={12} sm={6} md={30} key={data.indexOf(elem)}>
                        <Card className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={img}
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h1">
                                {elem.title}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                <b>Section: </b> {elem.section}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                <b>Call Number: </b> {elem.call_no}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                <b>Instructor: </b> {elem.instructor}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              <a href={elem.link} className = {classes.a}>Listing</a>
                            </Button>
                            <Button size="small" color="primary">
                            <a href={elem.link} className = {classes.a}>Culpa</a>
                            </Button>
                          </CardActions>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}

*/







/*
const columns = [
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'section', label: 'Section', minWidth: 80 },
  {
    id: 'call_no',
    label: 'Call Number',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'instructor',
    label: 'Instructor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'time',
    label: 'Time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'rating',
    label: 'Rating',
    minWidth: 100,
    align: 'right',
  }
]

const useStyles = makeStyles({
  root: {
    width: '70%',
    marginTop:100
  },
  container: {
    maxHeight: 800,
  },
});

export default function StickyHeadTable({courseList}) {

  const rows = courseList;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  console.log("Rows: " + rows)

  for (var i in rows) {
    console.log("item: " + i)
  }

  if (rows == null) {
    return (<Paper className={classes.root}></Paper>)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.section}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                      
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
*/