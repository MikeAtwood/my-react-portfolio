import React from "react";

function Project() {
    const projects = [
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },
        {
            name: "Take A Hike",
            description: "A Fun and easy to use application to view and share your very own hiking experience.",
            image: "take-a-hike.jpeg",
            technologies: "JavaScript, Handlebars.js",
            github: "https://github.com/willig0203/Take-A-Hike#usage",
            deployed: "https://taka-hike.herokuapp.com/",
        },

        
    ]
    return (
        <div className='portfolio-container'>
          <div className='portfolio'>
            {projects.map((project, i) => (
              <div className='project' key={project.key}>
                <h2>{project.title}</h2><br/>
                <a href={project.github}>GitHub</a>
              </div>
            ))}
          </div>
    
        </div>
      )
    }

export default Project;