import React from "react";
import { useState } from "react";
import "./Project.css"






function Projects(){
  const [projects, setProjects]= useState()


  const project =[
    {
      name:"Fithub Fitness",
      title:"Gym website using React.js",
      link:"https://naumanmalikfithubfitness.netlify.app/",
      id:1,
      description:"A gym website built with React.js showcasing various fitness exercises. Users can explore different exercises, read detailed descriptions about them, and view instructional materials. The website is fully responsive, ensuring a seamless experience across devices.",
      technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
      img:"gym.png"
      
     
    }, {
      name:"Weather App",
      title:"Weather app using React.js",
      link:"https://naumanmalikweatherapp.netlify.app/",
      id:2,
    description:"A weather application created with React.js that provides current weather conditions, forecasts, and temperature details for different locations.",
    technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
    img:"weather.png"
    
      
     
    }, {
      name:"Todo List",
      title:"TodoList using React.js",
      link:"https://naumanmaliktodolist.netlify.app/",
      id:3,
      description:"A simple to-do list application built using React.js. Users can add and delete tasks, organizing their tasks efficiently.",
      technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
      img:"todo.png"
      
     
    }
  ]
  function btn(link){
    if(link === "Fithub Fitness"){
    return window.location.href =  "https://github.com/mohammednaumanmalik/fithub_fitness"
  }
  else if(link === "Weather App"){
  return window.location.href =  "https://github.com/mohammednaumanmalik/Weather-App"
}
else if(link === "Todo List"){
  return window.location.href =  " https://github.com/mohammednaumanmalik/TodoList-"
}
  } 
  function demoBtn(link){
    if(link === "Fithub Fitness"){
    return window.location.href =  "https://naumanmalikfithubfitness.netlify.app/"
  }
  else if(link === "Weather App"){
  return window.location.href =  "https://naumanmalikweatherapp.netlify.app/"
}
else if(link === "Todo List"){
  return window.location.href =  " https://naumanmaliktodolist.netlify.app/"
}
  }




  
  return(


<div className="projects_container">
  <div className="project">
    {project.map((item) => (
      <div className="project-item" key={item.id}>
        <h5>{item.title}</h5>
        <img src={item.img} alt="" />
       <p>  <li>{item.description} </li> </p>
       <p><b>Technologies used</b>: {item.technology}</p>


      

      <div className="btn-parent">
       <div className="btn">
      
       <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => btn(item.name)}
            >
              Source Code
            </button>
       </div>
       <div className="btn">
       <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => demoBtn(item.name)}
            >
             
       Live Demo</button> 
       </div>
      </div>
      </div>

    ))}
  </div>
</div>
  )
}
export default Projects;