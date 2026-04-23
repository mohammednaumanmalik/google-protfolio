import React from "react";
import "./Project.css";

function Projects() {

  const projects = [
    {
      name: "Landing Page UI",
      title: "Landing Page UI",
      demo: "https://bizmarketeer.com/lp/UJET/Are%20you%20blind%20to%2095%20of%20your%20customer%20data.html",
      github: "#",
      id: 7,
      description:
        "Designed and developed a high-converting performance marketing landing page UI focused on lead generation. Implemented responsive layouts, optimized user experience, and integrated form handling with PHP & MySQL. Built reusable UI components and ensured fast loading performance to improve campaign conversions.",technology: "JavaScript, PHP, MySQL, HTML, CSS, Bootstrap",
      img: "Landing Page_1.png",
    },{
      name: "Bizmarketeer",
      title: "Bizmarketeer Marketing Platform",
      demo: "https://bizmarketeer.com/",
      github: "#",
      id: 7,
      description:
        "A performance marketing and lead generation platform with campaign-based landing pages, downloadable resources, and a custom admin dashboard to manage campaigns and improve conversions.",
      technology: "JavaScript, PHP, MySQL, HTML, CSS, Bootstrap",
      img: "bizmarketeer.png",
    },
    {
      name: "SaaS Tech Resources",
      title: "B2B SaaS Marketing Platform",
      demo: "https://www.saastechresources.com/",
      github: "#",
      id: 6,
      description:
        "A B2B marketing platform with multiple landing pages, admin panel for content management, and dynamic rating/comment system to enhance engagement.",
      technology: "JavaScript, PHP, MySQL, HTML, CSS, Bootstrap",
      img: "saastechresources.png",
    },
    {
      name: "Education Centre",
      title: "Education Trust",
      demo: "https://islamiceducationcentre.com/",
      github: "#",
      id: 5,
      description:
        "A full-stack educational platform with authentication system, admin panel, and responsive UI for managing users, courses, and student data.",
      technology: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap",
      img: "islamiceducationcentre.png",
    },
    {
      name: "Leadorbit Solutions",
      title: "Leadorbit Solutions",
      demo: "https://leadorbitsolutions.com/",
      github: "#",
      id: 4,
      description:
        "A professional lead generation website with structured service pages, responsive UI, and optimized performance for better conversions.",
      technology: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap",
      img: "leadorbitsolutions.png",
    },
    {
      name: "Fithub Fitness",
      title: "Gym website using React.js",
      demo: "https://naumanmalikfithubfitness.netlify.app/",
      github: "https://github.com/mohammednaumanmalik/fithub_fitness",
      id: 3,
      description:
        "A React-based fitness website where users can explore exercises and detailed instructions with a fully responsive UI.",
      technology: "React.js, JavaScript, CSS, HTML, Bootstrap",
      img: "gym.png",
    },
    {
      name: "Weather App",
      title: "Weather App using React.js",
      demo: "https://naumanmalikweatherapp.netlify.app/",
      github: "https://github.com/mohammednaumanmalik/Weather-App",
      id: 2,
      description:
        "A weather application that shows real-time weather conditions, forecasts, and temperature details for multiple locations.",
      technology: "React.js, JavaScript, CSS, HTML, Bootstrap",
      img: "weather.png",
    },
    {
      name: "Todo List",
      title: "Todo List using React.js",
      demo: "https://naumanmaliktodolist.netlify.app/",
      github: "https://github.com/mohammednaumanmalik/TodoList-",
      id: 1,
      description:
        "A simple task management app where users can add and delete tasks efficiently.",
      technology: "React.js, JavaScript, CSS, HTML, Bootstrap",
      img: "todo.png",
    },
  ];

  // 🔥 DESC ORDER (latest first)
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <div className="projects_container">
      <div className="project">
        {sortedProjects.map((item) => (
          <div className="project-item" key={item.id}>
  
  <img src={item.img} alt={item.name} />

  <div className="project-content">
    <h5>{item.title}</h5>

    <p>{item.description}</p>

    <p>
      <b>Technologies used:</b> {item.technology}
    </p>

    <div className="btn-parent">
      {item.github !== "#" && (
        <button onClick={() => window.open(item.github, "_blank")}>
          Source Code
        </button>
      )}

      <button onClick={() => window.open(item.demo, "_blank")}>
        Live Demo
      </button>
    </div>
  </div>

</div>
        ))}
      </div>
    </div>
  );
}

export default Projects;