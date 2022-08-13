import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'; 
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { CourseServices } from '../../../services/CourseServiceS';
import Spinner from '../../Spinner/Spinner';

const useStyles = createUseStyles({
    top: {
        display: "flex",
        justifyContent:"space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        '& a':{
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            padding: 10,
        },
    },
    commands: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTop: "1px solid black",
        padding: 5,
        '& a':{
            color:"black",
        },
        '& button':{
            background: "none",
            fontSize: "120%",
        }
    },
    data: {
        marginBottom: 10,
        '& span':{
            fontSize: "90%",
        }
    }
})

const CourseList = () => {
  
    let [state, setState] = useState({
        loading: false,
        courses: [],
        errorMessage: ''
    }); 

    useEffect(()=> {
        setState({...state, loading: true});
        CourseServices.getCourses()
        .then(response => {
            let fetchedCourses = response.data;
            setState({
                ...state,
                loading: false,
                courses: fetchedCourses,
            });
        })
        .catch((error)=>{
            setState({
                ...state, 
                loading: false,
                errorMessage: error.message
            });
        })
    },[]);

    const classes = useStyles();

    let { loading, courses, errorMessage} = state;

    return (
        <React.Fragment>
            <div className='course-list-container'>
                <div className={classes.top}>
                    <p className='section-title'>Our Courses</p>
                    <Link to={"/courses/add/"} className={classes.top}>
                        New Course
                    </Link>
                </div>
                {
                    loading ? <Spinner/> : <React.Fragment>
                        <div className='courses'>
                            {
                                courses.length > 0 && courses.map(course => {
                                    return(
                                        <div className='a-course' key={course.id}>
                                            <div className="img">
                                                <img className='course-img' src={course.photo} alt="" />
                                            </div>
                                            <div className='course-details'>
                                                <div className={classes.data}>
                                                    <strong>Name: </strong>
                                                    <span>{course.name}</span> 
                                                </div>
                                                <div className={classes.data}>
                                                    <strong>Lecturer: </strong>
                                                    <span>{course.lecturer}</span>
                                                </div>
                                                <div className={classes.data}>
                                                    <strong>Credits: </strong>
                                                    <span>{course.credit}</span>
                                                </div>
                                                <div className={classes.data}>
                                                    <strong>Cost: </strong>
                                                    <span>{course.cost}</span>
                                                </div>
                                            </div>
                                            <div className={classes.commands}>
                                                <Link to={`/courses/details/${course.id}`} >
                                                    <AiOutlineEye className='icon'/>
                                                </Link>
                                                <Link to={`/courses/edit/${course.id}`}>
                                                    <BiEdit className='icon'/>
                                                </Link>
                                                <button type="submit"><TiDeleteOutline className='icon'/></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}

export default CourseList