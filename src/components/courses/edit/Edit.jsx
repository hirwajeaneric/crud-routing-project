import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom';


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

  return (
    <React.Fragment>
      <section className={classes.aSection}>
        <h2>Edit</h2>
        <div className={classes.user}>
          <img src='https://www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg' alt=''/>
          <form>
            <table>
              <tr>
                <td>
                  <label htmlFor='name'>Course Name</label>
                </td>
                <td>
                  <input type='text' className='name' required="true" value='' name='name' placeholder='Course Name' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='lecturer'>Lecturer</label>
                </td>
                <td>
                  <input type='text' className='lecturer' required="true" value='' name='lecturer' placeholder='Lecturer Name' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='numberofcredits'>Number of Credits</label>
                </td>
                <td>
                  <input type='text' className='numberofcredits' required="true" value='' name='credits' placeholder='Number of Credits' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='cost'>Cost</label>
                </td>
                <td>
                  <input type='number' className='cost' required="true" name='cost' value='' placeholder='Cost of the course' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='image'>Photo</label>
                </td>
                <td>
                  <input type="file" className='cost' required="true" name='cost' value='' />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className={classes.buttons}>
          <button type='submit' >Update</button>
          <Link to={"/courses/"} className={classes.backButton}>Cancel</Link>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Edit