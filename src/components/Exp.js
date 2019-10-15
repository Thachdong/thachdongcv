import React from 'react';
import '../App.css';
import BlockContent from './edu/BlockContent';

export default function Exp(props) {
  const {projects} = props;
  const projectList = projects.map((project, index) => {
    return <BlockContent obj={project} key={index} />
  });
  return (
    <div className="content-box">
      <div className="d-flex align-items-center p-2 pb-2 pl-4">
        <i className="fas fa-suitcase text-bold royal-blue heading-size"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading heading-size">
          Work Experience
        </div>
      </div>
      <p className="pb-0 px-4">
        I have no experience work at company job. I am just learning web programming about 4 months. After 4 months, i have basic knowledge about Javascript, ES6, ReactJS, HTML, CSS, Bootstrap, SCSS, Git. Base on knowledge gained, I have done 2 project, which deployed to netlify as below. 
      </p>
      {projectList}
    </div>
  );
}
