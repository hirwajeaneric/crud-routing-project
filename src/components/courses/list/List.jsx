import React from 'react';
import CourseList from '../courseList/CourseList';
// import hero from '../../../assets/img/hero.png';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  paragraph: {
    color: "white",
    fontSize: "140%"
  },
  headers: {
    fontSize: "400%",
  }
}); 

const List = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <section className='section list-section'>
        <div className='overlay'> 
          <div className="welcome">
            <h2>Welcome To</h2>
            <h1>LOREM IPSUM</h1>
            <p className={classes.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit dicta, 
              distinctio accusantium nulla magni, asperiores odio eaque deleniti, 
              ducimus culpa non sed nisi et! Doloribus voluptas distinctio pariatur adipisci!
            </p>
          </div>
          <div className='text'>
          </div>
        </div>
      </section>
      <CourseList />
    </React.Fragment>
  )
}

export default List