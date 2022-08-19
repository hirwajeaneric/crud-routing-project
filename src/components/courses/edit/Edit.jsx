import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseServices } from '../../../services/CourseServices';
import Spinner from '../../Spinner/Spinner';


const useStyles = createUseStyles({
  aSection:{
    padding: "60px 250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: 500,
    "& h2": {
      color: "black",
      textAlign: "left",
    }
  },
  buttons:{
    display: "flex",
    flexDirection: "row",
    margin: "10px 0px",
    justifyContent: 'space-between',
    alignItems: "center",
    "& button":{
      padding: 10,
      width: 150,
      cursor: "pointer",
      background: "#ff9933",
      color: "white",
      fontWeight: "600",
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
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: 'wrap',
    background: "#e0e0d1",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    border: "1px solid #ccccb3",
    padding: 30,
    '& img':{
      width: "300px",
    },
    '& form':{
      '& table': {
        '& tr':{
          '& td':{
            textAlign: "left",
            paddingLeft: 20,
            '& input': {
              padding: "5px 10px",
            },
          }
        }
      },
    }
  }
})

const Edit = () => {
  
  const classes = useStyles();
  
  let {courseId} = useParams();

  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    course: {
      name: "",
      lecturer: "",
      credits: "",
      cost: "",
      photo:""
    },
    errorMessage: ''
  });

  useEffect(()=>{
    setState({...state, loading: true});
    CourseServices.getOneCourse(courseId)
      .then(response =>{
        setState({
          ...state,
          loading: false,
          course: response.data,
        });
      })
      .catch(error=>{
        setState({
          ...state, 
          loading: false,
          errorMessage: error.message
        });
      })
  },[courseId, state])

  let updateInput = (event) => {
    setState({
      ...state,
      course: {
        ...state.course,
        [event.target.name] : event.target.value
      }
    });
  }

  let submitForm = async (event) => {
    event.preventDefault();
    try{
      let response = await CourseServices.updateCourse(state.course, courseId)
      if(response){
        navigate(`/courses/list`, {replace: true});
      }
    } catch(error){
      setState({...state, errorMessage: error.message});
      navigate(`/courses/edit/${courseId}`, {replace: false})
    }
  }

  let {loading, course, errorMessage} = state;

  return (
    <React.Fragment>
      <section className={classes.aSection}>
        <h2>Edit</h2>
        {
          loading ? <Spinner/> : <React.Fragment>
            <div className={classes.user}>
                <img src={course.photo} alt={course.name}/>
                <form onSubmit={submitForm}>
                  <table>
                    <tr>
                      <td>
                        <label htmlFor='name'>Course Name</label>
                      </td>
                      <td>
                        <input type='text' className='name' required="true" value={course.name} name='name' onChange={updateInput} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor='lecturer'>Lecturer</label>
                      </td>
                      <td>
                        <input type='text' className='lecturer' required="true" value={course.lecturer} name='lecturer' onChange={updateInput} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor='numberofcredits'>Number of Credits</label>
                      </td>
                      <td>
                        <input type='text' className='numberofcredits' required="true" value={course.credits} name='credits' onChange={updateInput} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor='cost'>Cost</label>
                      </td>
                      <td>
                        <input type='number' className='cost' required="true" name='cost' value={course.cost} onChange={updateInput} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor='image'>Photo</label>
                      </td>
                      <td>
                        <input type="file" className='cost' required="true" name='cost' value={course.photo} onChange={updateInput} />
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </React.Fragment>
          }
          <div className={classes.buttons}>
          <button type='submit' >Update</button>
          <Link to={"/courses/"} className={classes.backButton}>Cancel</Link>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Edit