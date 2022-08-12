import React from 'react'
import CourseList from '../courseList/CourseList'

const list = () => {
  return (
    <React.Fragment>
      <section className='section list-section'>
        <div className="welcome">
          <h2>Welcome</h2>
          <h3>To</h3>
          <h1>DESIGN 250</h1>
        </div>
        <div className='text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit dicta, 
            distinctio accusantium nulla magni, asperiores odio eaque deleniti, 
            ducimus culpa non sed nisi et! Doloribus voluptas distinctio pariatur adipisci!
          </p>
        </div>
      </section>
      <CourseList />
    </React.Fragment>
  )
}

export default list