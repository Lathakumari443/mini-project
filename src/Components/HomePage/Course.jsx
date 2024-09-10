import React from 'react'
import './Course.css'

const Course = () => {
    return (

        <div class="container">
            <h2>Course Offering</h2>
            <p>This is a paragraph providing additional information about the content above.</p>

            <br />


            <div class="container-2">

                <div class="image-item">

                    <img src='./src/assets/img-1.PNG' alt="Image 1" />
                    <h4>Complete Python</h4>
                    <br />
                    <p>Chaitanya Reddy</p>
                    <p> IIT Roorkee alumini,20+ yrs exp</p>

                    <div class="ratings">

                        <span>4.6</span><span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half-o checked"></span>

                    </div>

                    <br />

                    <button className='btn btn-warning'>More Details... </button>

                </div>

                <div class="image-item">

                    <img src='./src/assets/img-2.PNG' alt="Image 2" />
                    <h4>Python Fullstack</h4>
                    <br />
                    <p>Chaitanya Reddy</p>
                    <p> IIT Roorkee alumini,20+ yrs exp</p>

                    <div class="ratings">

                        <span>4.6</span> <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                      

                    </div>

                    <br />

                    <button className='btn btn-warning'>More Details... </button>

                </div>

                <div class="image-item">

                    <img src='./src/assets/img-3.PNG' alt="Image 3" />
                    <h4>Frontend Technologies</h4>
                    <br />
                    <p>Chaitanya Reddy</p>
                    <p> IIT Roorkee alumini,20+ yrs exp</p>

                    <div class="ratings">

                        <span>4.9</span><span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half-o checked"></span>
                    </div>

                    <br />

                    <button className='btn btn-warning'>More Details... </button>

                </div>


                <div class="image-item">

                    <img src='./src/assets/img-4.PNG' alt="Image 4" />
                    <h4>Python Fullstack with Data Science</h4>
                    <br />
                    <p>Chaitanya Reddy</p>
                    <p> IIT Roorkee alumini,20+ yrs exp</p>

                    <div class="ratings">
                        <span>4.4</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        
                        
                    </div>
                    <br />
                    <button className='btn btn-warning'>More Details... </button>
                </div>

            </div>
        </div>


    )
}

export default Course;
