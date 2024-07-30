

import React from 'react'



function CourseCard(props) {
    console.log(props.course);  
  return (
    <div key={course.id} className="course-list">
<div className="course-item">
<div className="course-item__img">
<img src="images/img1.jpg" alt="image-1" />
</div>
<div className="course-item__detail">
    <div className="course-item__body">
        <div>
            <p className="title">{props.course.title}</p>
            <p className="decs">{props.course.description}</p>
        </div>
        <span className="rate">4</span>
    </div>
    <div className="course-item-footer">
        <div className="tags">
            {
                props.course.tags.map(t => 
                <span className="badge badge--secondary">
                    React.js
                    </span>)
            }
        </div>
        <div className="caption">
            <div className="date">
                {new Date(props.course.start).toLocaleDateString("en-US", {
                month: "short", 
                year: "numeric", 
                day: "numeric", 
            })}
            </div>
            <span className="badge badge--primary">{props.course.status}</span>
        </div>
    </div>
</div>  
</div>
            </div>
  )
}

export default CourseCard
