import React from 'react'
import './Sec1.scss'
function Sec1() {
  return (
    <section id='sec1'>
        <h1>Get your <span>Education</span> Today!</h1>
        <div className="courses">
            <div className="cours">
            <i class="fa-solid fa-earth-americas"></i><h5>Online_Courses</h5>
            </div>
            <div className="cours">
            <i class="fa-solid fa-book"></i><h5>Our_Library</h5>
            </div>
            <div className="cours">
            <i class="fa-solid fa-chalkboard-user"></i><h5>Our_Teachers</h5>
            </div>
        </div>
    </section>
  )
}

export default Sec1
