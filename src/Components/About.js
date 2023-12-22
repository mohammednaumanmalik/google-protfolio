import React from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillGoogleCircle } from "react-icons/ai";
function About() {
    const [showSkills1, setShowSkills1] = useState(false);
    const [showSkills2, setShowSkills2] = useState(false);
    const [showSkills3, setShowSkills3] = useState(false);
    const [showSkills4, setShowSkills4] = useState(false);




    const toggleSkills = (toggleNumber) => {
        if (toggleNumber === 1) {
            setShowSkills1(!showSkills1);
            setShowSkills2(false); // Close other toggles
        } else if (toggleNumber === 2) {
            setShowSkills2(!showSkills2);
            setShowSkills1(false); // Close other toggles

        }
        else if (toggleNumber === 3) {
            setShowSkills3(!showSkills3);
            setShowSkills1(false); // Close other toggles
            setShowSkills2(false)

        }
        else if (toggleNumber === 2) {
            setShowSkills2(!showSkills2);
            setShowSkills1(false); // Close other toggles

        }
        else if (toggleNumber === 4) {
            setShowSkills4(!showSkills4);
            setShowSkills1(false); // Close other toggles
            setShowSkills2(false);
            setShowSkills3(false)

        }


    };


    return (


        <div className=" row container-fluid" style={{ backgroundColor: "", fontFamily: "Arial, sans-serif;" }}>

            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8" id="section-1">
                <p style={{ fontWeight: "400", }}>  <a href="" >Mohammed Nauman Malik: Web Developer</a> <p style={{ fontWeight: "400", padding: "0px",fontFamily:"sans-serif"}} className="para_section"> Innovative web developer dedicated to designing immersive and efficient online experiences through dynamic web solutions.</p></p>
             <div className="div_extra">
             <div className="details-img-s">
                    <img src="picture.png" alt="" width={130}/>
                  <small style={{fontFamily:"sans-serif", opacity:"0.9", fontSize:"1rem", padding:"5px"}}> Detail-driven B.Tech grad in Computer Science, excels in web development. Proficient in crafting compelling web solutions with a focus on enhancing user experience.</small> 
                  <button className="btn btn-link">Nauman's Resume</button>
                    </div>
                </div>  

                

                <div className="work_experience">
                    <p>  <a href="" >Work Experience</a>   <p style={{ fontWeight: "bold",opacity:"0.8" }}>Web Developer</p>  </p>
                    <div className="row" style={{marginTop:"-10px"}}>
                        <div className="col-6">Incredible Marketeer</div>
                        <div className="col-6" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                            06/2023 - present
                        </div>
                    </div> <br />
                    <div className="company_project">
                        <span style={{ fontWeight: "bold", opacity: 0.9 ,fontFamily: "Arial, sans-serif;"}}>Frontend Development: </span><span> I excel in creating user-friendly -
                            and responsive frontend experiences using <b style={{ opacity: 0.8 }}>HTML, </b> <b style={{ opacity: 0.8 }}>CSS, </b>
                            <b style={{ opacity: 0.8 }}>Bootstrap, </b> <b style={{ opacity: 0.8 }}>JavaScript</b> and <b style={{ opacity: 0.8 }}>React.js </b>.</span> <br /> <br />

                        <span style={{ fontWeight: "bold", opacity: "0.9" }}>Backend Implementation & API Development: </span>

                        <span> Utilizing  <b style={{ opacity: 0.8 }}>PHP</b> and <b style={{ opacity: 0.8 }}>MySQL,</b> I establish a secure backend for landing pages, enabling seamless data collection and storage. This includes crafting purpose-built APIs with stringent security measures, ensuring data integrity and efficient integration.</span>


                        <br /> <br />

                        <span style={{ fontWeight: "bold", opacity: "0.9" }}>Landing Page Creation: </span> <span> I specialize in crafting captivating
                            landing pages for Incredible Marketeer's advertising campaigns.
                            With over 100 landing pages successfully designed and
                            developed, I have experience working with renowned clients
                            such as IBM, Dell, Cohesity, and many others. </span>
                    </div>






                </div>

                <div className="people-also_ask">
                    <div className="people-ask-main">
                        <h5>People also ask :</h5>

                        <div className="people-ask-1">
                            <span onClick={() => toggleSkills(1)}>What skills does Nauman have? <span style={{ float: "right" }}><IoIosArrowDown /></span></span>
                            {showSkills1 && (
                                <p className="ask-toggle-1" style={{ fontWeight: "500" }}>Nauman is well-versed in Javascript, React Js, CSS 3, HTML 5, Bootstrap, PHP, and MySql.</p>
                            )}
                        </div>
                        <div className="people-ask-1">
                            <span onClick={() => toggleSkills(2)}>What services does Nauman provide? <span style={{ float: "right" }}><IoIosArrowDown /></span></span>
                            {showSkills2 && (
                                <p className="ask-toggle-1" style={{ fontWeight: "500" }}>Nauman provides fully responsive frontend applications with React Js and Backend services with PHP.</p>
                            )}
                        </div>
                        <div className="people-ask-1">
                            <span onClick={() => toggleSkills(3)}>Is Nauman frontend or backend developer? <span style={{ float: "right" }}><IoIosArrowDown /></span></span>
                            {showSkills3 && (
                                <p className="ask-toggle-1" style={{ fontWeight: "500" }}>Nauman Malik is primarily a frontend developer, adept at crafting user-friendly and responsive frontend experiences using HTML, CSS, JavaScript, Bootstrap, and React.js. While they might have some proficiency in backend technologies, their main expertise lies in frontend development, focusing on creating engaging and efficient user interfaces.</p>
                            )}
                        </div>
                        <div className="people-ask-1">
                            <span onClick={() => toggleSkills(4)}>How much experience does Nauman have? <span style={{ float: "right" }}><IoIosArrowDown /></span></span>
                            {showSkills4 && (
                                <p className="ask-toggle-1" style={{ fontWeight: "500" }}>Nauman has 6 Months of experience in Web Development.</p>
                            )}
                        </div>
                    </div>

                    <div className="projects">
                        <div className="projects_main">
                            <h5>Projects :</h5>
                            <div className="projects">

                                <div className="project_item-1">



                                    <img src="gym.png" alt="" width={100} />
                                </div>
                                <div className="project_item-1">


                                    <p >  <a href="https://naumanmalikfithubfitness.netlify.app/" style={{ fontSize: "1rem" }}>Gym Website using React.js</a> <p>5-May-2023</p></p>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="projects">
                        <div className="projects_main">
                           
                            <div className="projects">

                                <div className="project_item-1">



                                    <img src="weather.png" alt="" width={100} />
                                </div>
                                <div className="project_item-1">


                                    <p >  <a href="https://naumanmalikweatherapp.netlify.app" style={{ fontSize: "1rem" }}>Weather app using React.js</a> <p>25-November-2022</p></p>

                                </div>


                            </div>

                        </div>

                    </div>
 {/* <div className="projects">
                        <div className="projects_main">
                           
                            <div className="projects">

                                <div className="project_item-1">



                                    <img src="todo.png" alt="" width={100} />
                                </div>
                                <div className="project_item-1">


                                    <p >  <a href="https://naumanmaliktodolist.netlify.app" style={{ fontSize: "1rem" }}>Todo-List using React.js</a> <p>30-July-2022</p></p>

                                </div>


                            </div>

                        </div>

                            </div> */} 
                     <Link to="/projects">    <div className="view-all ">
                       
                       <button type="button" class="btn btn-light">View all </button>
                       </div>
                       </Link>
                   
                       
                </div>
                <div className="related-search-main">
                    <div className="people-ask-main row" >
                        <h5 style={{borderBottom:"0.1rem solid rgba(206, 200, 200, 0.9)", paddingBottom:"5px"}}>Related Search :</h5>

                        <div className="related-search col-3 col-sm-12 col-md-12 col-lg-3 ">
                            <Link to="/skills">
                         <button type="button" class="btn">  <i style={{marginRight:"0px", paddingRight:"5px",opacity:"0.7"}}><FaSearch /> </i>   <span style={{opacity:0.7}}>Nauman's <b>Skills</b></span></button>
                         </Link>
                        </div>
                        <div className="related-search col-3 col-sm-12 col-md-12 col-lg-3">
                        <Link to="/projects">
                        <button type="button" class="btn "><i style={{marginRight:"0px", paddingRight:"5px",opacity:"0.7"}}><FaSearch /> </i><span style={{opacity:0.7}}>Nauman's <b>Projects</b></span></button>
                        </Link>
                        </div>
                        <div className="row">

                       
                        <div className="related-search col-3 col-sm-12 col-md-12 col-lg-3">
                        <Link to="/contact">
                        <button type="button" class="btn"><i style={{marginRight:"0px", paddingRight:"5px",opacity:"0.7"}}><FaSearch /> </i><span style={{opacity:0.7}}> <b>Contact's</b> Nauman</span></button>
                        </Link>
                        </div>
                        <div className="related-search col-3 col-sm-12 col-md-12 col-lg-3">
                        <Link to="/map">
                        <button type="button" class="btn"><i style={{marginRight:"0px", paddingRight:"5px",opacity:"0.7"}}><FaSearch /> </i><span style={{opacity:0.7}}>Nauman's <b>Location</b></span></button>
                        </Link>
                        </div>
                        </div>
                    </div>

                    </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4" id="side-container">

                <div className="details">
                    <div className="details-img">
                    <img src="picture.png" alt="" width={130}/>
                  <small style={{fontFamily:"sans-serif", opacity:"0.9", fontSize:"1rem", padding:"5px"}}> Detail-driven B.Tech grad in Computer Science, excels in web development. Proficient in crafting compelling web solutions with a focus on enhancing user experience.</small> 
                 <a href="https://github.com/mohammednaumanmalik/resume/blob/main/Nauman_malik_CV%20(4).pdf"> <button className="btn btn-link"> Nauman's Resume</button></a>
                    </div>
                    <div className="details-contacts">

                        <div className="details-contact-1">
                            <span><i><MdMarkEmailUnread /> </i></span> <span><a href="">mohamednauman74@gmail.com </a></span>
                        </div>
                        <div className="details-contact-1">
                            <span><i><BsPhoneFill />
 </i></span> <span>6268524688</span>
                        </div>
                        <div className="details-contact-1">
                            <span><i><RxLinkedinLogo /> </i></span> <span><a href="https://www.linkedin.com/in/mohammed-nauman-malik/

">Linkedin Profile</a></span>
                        </div>
                        <div className="details-contact-1">
                            <span><i><VscGithubInverted /> </i></span> <span><a href="https://github.com/mohammednaumanmalik">Github Profile </a></span>
                        </div>
                        <div className="details-contact-1">
                            <span><i><AiFillGoogleCircle /> </i></span> <span><a href="">Google Portfolio </a></span>
                        </div>
                    </div>

                </div>
               
            </div>

        </div>
    )
}
export default About;