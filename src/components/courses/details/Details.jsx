import React, { useState } from 'react'
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseServices } from '../../../services/CourseServices';
import Spinner from '../../Spinner/Spinner';

const useStyles = createUseStyles({
  aSection:{
    padding: "90px 250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: 500,
    "& h1": {
      color: "black"
    }
  },
  backButton:{
    background: "green",
    color: "white",
    padding: "10px 20px",
    margin: "40px 0",
    width:"100px"
  },
  user: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: 'wrap',
    background: "#e0e0d1",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    border: "1px solid #ccccb3",
    padding: 30,
    '& img':{
      width: "300px",
    },
    '& table':{
      padding: "0 0 0 50px",
      '& tr':{
        textAlign: "left",
      },
      '& td':{
        padding: "10px 0px"
      }
    }
  }
})

const Details = () => {
  
  let navigate = useNavigate();

  let {courseId} = useParams();

  const classes = useStyles();

  let [state, setState] = useState({
    loading: false,
    course: {
      name: "",
      lecturer: "",
      credits: "",
      cost: "",
      photo: ""
    },
    errorMessage: '',
  });

  useEffect(()=>{
    setState({...state, loading: true});
    CourseServices.getOneCourse(courseId)
      .then(response => {
        setState({
          ...state, 
          loading: false,
          course: response.data,
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        });
      })  
  },[courseId]);

  let {loading, course, errorMessage, group} = state;

  return (
    <React.Fragment>
      <section className={classes.aSection}>
        {
          loading ? <Spinner/> : <React.Fragment>
            <div className={classes.user}>
              <img src='https://www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg' alt=''/>
              <table>
                <tr>
                  <th>Name: </th>
                  <td>{course.name}</td>
                </tr>
                <tr>
                  <th>Lecturer: </th>
                  <td>{course.lecturer}</td>
                </tr>
                <tr>
                  <th>Creadits: </th>
                  <td>{course.credits}</td>
                </tr>
                <tr>
                  <th>Cost: </th>
                  <td>{course.cost}</td>
                </tr>
              </table>
            </div>
          </React.Fragment>
        }
        <Link to={"/courses/"} className={classes.backButton}>Back</Link>
      </section>
    </React.Fragment>
  )
}

export default Details