import "./App.css"; 


function App() {
    return (
        <div>
           <h1>My Courses (3)</h1>
           <div className="course-list">
            <div className="course-item">
            <div className="course-item__img">
            <img src="images/img1.jpg" alt="image-1" />
            </div>
            <div className="course-item__detail">
                <div className="course-item__body">
                    <div>
                        <p className="title">React.js Course</p>
                        <p className="decs"> The Ultimate React and Redux Course</p>
                    </div>
                    <span className="rate">4</span>
                </div>
                <div className="course-item-footer"></div>
            </div>  
            </div>
           </div>
        </div>
    );
}


export default App; 
