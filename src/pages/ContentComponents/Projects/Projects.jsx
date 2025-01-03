import React from 'react';
import './Projects.css';
import { projectData } from '../../../info';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  const renderDemoContent = (project) => {
    if (isImageURL(project.demoUrl)) {
      return <img src={project.demoUrl} alt="Project Thumbnail" />;
    } else {
      return <iframe src={project.demoUrl} title="Project Demo" allowFullScreen />;
    }
  };

  const isImageURL = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some((extension) => url.toLowerCase().endsWith(extension));
  };

  return (
    <section id="Projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h3 className="wow zoomIn" data-wow-delay=".2s">
            Projects Gallery
          </h3>
          <h2 className="wow fadeInUp" data-wow-delay=".4s">
            Digital Art
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".6s">
            This is my gallery of my projects.
            Applications gallery coming soon. 
          </p>
        </div>
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-header">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-description">{project.description}</p>
                  </div>
                  <div className="demo-container">
                    {renderDemoContent(project)}
                  </div>
                  <div className="card-footer">
                    <a href={project.demoUrl} className="btn btn-primary">
                      Full image
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
