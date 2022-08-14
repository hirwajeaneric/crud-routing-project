import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useNavigate } from 'react-router-dom';
import { CourseServices } from "../../../services/CourseServices"; 
import { v4 as uuidv4} from 'uuid';


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
    },
    "& p":{
      padding: "0 0 60px"
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
      background: "#0080ff",
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
 
const Add = () => {

  let navigate = useNavigate();

  const [state, setState] = useState({
    loading: "false",
    course: {
      id: "",
      name: "",
      lecturer: "",
      credits: "",
      cost: "",
      photo: "",
    },
    errorMessage: ""
  });

  const updateInput = (event) =>{
    setState({
      ...state,
      course: {
        ...state.course,
        [event.target.name]: event.target.value,
        ...state.course.id = uuidv4,
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    CourseServices.addCourse(state.course)
      .then(response => {
        if(response){
          navigate('/courses/',{replace: true})
        }
      })
      .catch()

  }

  const classes = useStyles();

  const {loading, course, errorMessage} = state;

  return (
    <React.Fragment>
      <section className={classes.aSection}>
        <h1 className='dark-header'>Add Course</h1>
        <p className='darkText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, rerum. Laudantium praesentium laborum accusantium, iusto exercitationem quos adipisci, nihil, aut amet vitae similique possimus reprehenderit deleniti iure! Consequuntur, nobis quod!</p>
        <div className={classes.user}>
          <img src={state.course.photo} alt=''/>
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <label htmlFor='name'>Course Name</label>
                </td>
                <td>
                  <input type='text' className='name' required="true" value={course.name} onChange={updateInput} name='name' placeholder='Course Name' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='lecturer'>Lecturer</label>
                </td>
                <td>
                  <input type='text' className='lecturer' required="true" value={course.lecturer} onChange={updateInput} name='lecturer' placeholder='Lecturer Name' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='numberofcredits'>Number of Credits</label>
                </td>
                <td>
                  <input type='text' className='numberofcredits' required="true" value={course.credits} onChange={updateInput} name='credits' placeholder='Number of Credits' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='cost'>Cost</label>
                </td>
                <td>
                  <input type='text' className='cost' required="true" onChange={updateInput} name='cost' value={course.cost} placeholder='Cost of the course' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='image'>Photo</label>
                </td>
                <td>
                  <input type='text' className='cost' required="true" onChange={updateInput} name='photo' value={course.photo} placeholder="Add course Image"/>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className={classes.buttons}>
          <button type='submit' onClick={handleSubmit}>Save</button>
          <Link to={"/courses/"} className={classes.backButton}>Cancel</Link>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Add