import React from "react";
import { useState } from "react";
import "./Project.css"






function Projects(){
  const [projects, setProjects]= useState()


  const project =[
    {
      name:"Leadorbit Solutions",
      title:"Leadorbit Solutions",
      link:"https://leadorbitsolutions.com/",
      id:1,
      description: "Leadorbit Solutions is a professional business and lead generation website that I designed and developed to help companies grow through data-driven digital marketing solutions. The website showcases services such as demand generation, sales development, database services, and digital marketing with a clean, modern, and user-friendly interface. I focused on creating a fully responsive layout, well-structured sections, and smooth user experience across all devices, ensuring the platform effectively represents the brand and supports business growth.",
  technology: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap",
      img:"leadorbitsolutions.png"
      
     
    },
    {
      name:"Education Centre",
      title:"Education Trust",
      link:"https://islamiceducationcentre.com/",
      id:2,
      description: "A full-stack dynamic educational website developed using PHP, MySQL, JavaScript, HTML, CSS, and Bootstrap. The platform includes a secure authentication system with APIs, allowing users to log in and access personalized features. An admin panel is implemented on the backend to manage website content, users, courses, notices, and other data efficiently. The website is fully responsive, ensuring smooth performance across mobile, tablet, and desktop devices. Both frontend and backend are custom-built, providing a complete and scalable solution for educational management.",
  technology: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap",
      img:"islamiceducationcentre.png"
      
     
    },
    {
      name:"Fithub Fitness",
      title:"Gym website using React.js",
      link:"https://naumanmalikfithubfitness.netlify.app/",
      id:3,
      description:"A gym website built with React.js showcasing various fitness exercises. Users can explore different exercises, read detailed descriptions about them, and view instructional materials. The website is fully responsive, ensuring a seamless experience across devices.",
      technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
      img:"gym.png"
      
     
    }, {
      name:"Weather App",
      title:"Weather app using React.js",
      link:"https://naumanmalikweatherapp.netlify.app/",
      id:4,
    description:"A weather application created with React.js that provides current weather conditions, forecasts, and temperature details for different locations.",
    technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
    img:"weather.png"
    
      
     
    }, {
      name:"Todo List",
      title:"TodoList using React.js",
      link:"https://naumanmaliktodolist.netlify.app/",
      id:5,
      description:"A simple to-do list application built using React.js. Users can add and delete tasks, organizing their tasks efficiently.",
      technology:"React.js, JavaScript, CSS, HTML, Bootstrap",
      img:"todo.png"
      
     
    }
  ]
  function btn(link){
  //   if(link === "Islamic Education Centre"){
  //   return window.location.href =  "https://islamiceducationcentre.com/"
  // }
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
    if(link === "Leadorbit Solutions"){
    return window.location.href =  "https://leadorbitsolutions.com/"
  }
    if(link === "Education Centre"){
    return window.location.href =  "https://islamiceducationcentre.com/"
  }
    else if (link === "Fithub Fitness"){
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
       <p>  {item.description}  </p>
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