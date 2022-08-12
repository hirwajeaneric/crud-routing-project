import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'; 

const CourseList = () => {
  return (
    <React.Fragment>
        <div className='course-list-container'>
            <p className='section-title'>Our Courses</p>
            <div className='courses'>
                <div className='a-course'>
                    <div className="img">
                        <img className='course-img' src='https://learn.g2.com/hubfs/What_is_Information_Technology.jpg' alt='course-photo'/>
                    </div>
                    <div className='course-details'>
                        <div>
                            <strong>Name: </strong>
                            <span>Introduction To Information Management</span> 
                        </div>
                        <div>
                            <strong>Lecturer: </strong>
                            <span>Muyango Bailly</span>
                        </div>
                        <div>
                            <strong>Credits: </strong>
                            <span>3</span>
                        </div>
                        <div>
                            <strong>Cost: </strong>
                            <span>$60,000</span>
                        </div>
                    </div>
                    <div className='commands'>
                        <AiOutlineEye className='icon'/>
                        <BiEdit className='icon'/>
                        <TiDeleteOutline className='icon'/>
                    </div>
                </div>
                <div className='a-course'>
                    <div className="img">
                        <img className='course-img' src='https://learn.g2.com/hubfs/What_is_Information_Technology.jpg' alt='course-photo'/>
                    </div>
                    <div className='course-details'>
                        <div>
                            <strong>Name: </strong>
                            <span>Introduction To Information Management</span> 
                        </div>
                        <div>
                            <strong>Lecturer: </strong>
                            <span>Muyango Bailly</span>
                        </div>
                        <div>
                            <strong>Credits: </strong>
                            <span>3</span>
                        </div>
                        <div>
                            <strong>Cost: </strong>
                            <span>$60,000</span>
                        </div>
                    </div>
                    <div className='commands'>
                        <AiOutlineEye className='icon'/>
                        <BiEdit className='icon'/>
                        <TiDeleteOutline className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CourseList