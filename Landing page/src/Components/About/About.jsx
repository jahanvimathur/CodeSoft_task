import React from "react";
import './About.css'

function About(){
    return(
        <div className="about_Section">
            <div className="about_Container">
                    <div className="about_Container1">
                        <h3>About Us </h3>
                        <p>we are passionate about transforming ideas into digital experiences that captivate and convert. Founded in [Year], our mission has always been to deliver cutting-edge web solutions that help businesses thrive in a competitive online landscape.

                        With a deep understanding of the latest technologies and trends, we specialize in creating custom websites that are not only visually stunning but also highly functional. Whether you're looking to build an e-commerce platform, a mobile-friendly site, or a robust web application, our team has the expertise to bring your vision to life.

                        We believe in a client-first approach, working closely with you from concept to completion to ensure your project meets and exceeds your expectations. Our commitment to excellence and innovation has earned us the trust of clients across various industries.

                        At the heart of [Company Name] is a team of creative thinkers, skilled developers, and strategic planners who are dedicated to your success. We take pride in our collaborative culture, where every project is an opportunity to push the boundaries of what's possible in web development.</p>
                        <button aria-hidden="true" className="button" type="button" >See More</button>

                    </div>
                    <div className="about_container2">
                            <img src="imag1.png" alt="" srcset="" width="100%"  height="100%"/>
                        </div>
                    </div>
        </div>
    )
}
export default About