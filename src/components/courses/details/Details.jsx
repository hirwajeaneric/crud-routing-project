import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom';

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
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <section className={classes.aSection}>
        <div className={classes.user}>
          <img src='https://www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg' alt=''/>
          <table>
            <tr>
              <th>Name: </th>
              <td>OOP</td>
            </tr>
            <tr>
              <th>Lecturer: </th>
              <td>MUKWENDE Placide</td>
            </tr>
            <tr>
              <th>Creadits: </th>
              <td>4</td>
            </tr>
            <tr>
              <th>Cost: </th>
              <td>$60,000</td>
            </tr>
          </table>
        </div>
        <Link to={"/courses/"} className={classes.backButton}>Back</Link>
      </section>
    </React.Fragment>
  )
}

export default Details