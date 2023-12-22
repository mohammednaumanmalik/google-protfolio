import React from "react";
import { useState } from "react";
import "./Skill.css"
import { Link } from "react-router-dom";



function Skills(){
    const [skill, setSkill] = useState()

    const skills = [
        {
            name: "React.js",
            img: "assets/React.png",
            link: "https://react.dev"
        },
        {
            name: "JavaScript",
            img: "assets/javascript.png",
            link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }, {
            name: "CSS",
            img: "assets/css.png",
            link:"https://www.w3schools.com/css/"
        },
        {
            name: "HTML",
            img: "assets/html.png",
            link:"https://www.w3.org/html/"
        },
        {
            name: "Bootstrap",
            img: "assets/bootstrap.png",
            link:"https://getbootstrap.com/"
        },
        {
            name: "PHP",
            img: "assets/php.png",
            link:"https://www.w3schools.com/php/"
        },
        {
            name: "MySql",
            img: "assets/mysql.png",
            link:"https://www.w3schools.com/MySQL/default.asp"
        },{
            name: "Git",
            img: "assets/git.png",
            link:"https://git-scm.com/"
        }
        
    ];

    function redirectToLink(skillName) {
        const skill = skills.find(item => item.name === skillName);
        if (skill && skill.link) {
            window.open(skill.link, "_blank");
        }
    }

    function getSkillClassName(name) {
        if (name === 'React.js') {
          return 'react-bg';
        
        } else if (name === 'JavaScript') {
          return 'javascript-bg';
        }  else if (name === 'CSS') {
            return 'css-bg';
          } 
          else if (name === 'HTML') {
            return 'html-bg';
          } 
          else if (name === 'Bootstrap') {
            return 'bootstrap-bg';
          } 
          else if (name === 'PHP') {
            return 'php-bg';
          } 
          else if (name === 'MySql') {
            return 'mysql-bg';
          } 
          else if (name === 'Git') {
            return 'git-bg';
          }  

        
        else {
          return '';
        }
      }
    return(

        <div className=" row container-fluid" style={{ backgroundColor: "", fontFamily: "Arial, sans-serif;" }}>

           
              

                <div className="skills">
                   
               <div className="skill_content">
                Nauman loves to develop innovative web apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive web apps.
               </div>

        <div className="skill_content-1">
               
                <div className="skill-box">
                   <h5>Frontend Skills</h5>
                   <p><b>React.js, JavaScript, CSS, HTML, Bootstrap</b></p>
                </div>

                <div className="skill-box">
<h5>Backend Skills</h5>
 <p><b>PHP, MySql</b></p> 
                </div>
               </div>
                  


               <div className="parent_skill">
  <div className="api-skill">
    {skills.map((item, index) => (
  <div className={`api-skill-item ${getSkillClassName(item.name)}`} key={index} onClick={() => redirectToLink(item.name)}>
                    <img src={item.img} alt={item.name} width={60}/>
                  
                    <p style={{fontSize:"1.1rem", fontWeight:"bold"}}>{item.name}</p>
                </div>
            ))}
        </div>
        </div>
       

                </div>
                </div>
    )
}
export default Skills