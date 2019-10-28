import React from 'react';
import '../App.css';
import BlockContent from './edu/BlockContent';

export default function Exp(props) {
  const { projects} = props;
  // render project list
  const projectList = projects.map((project, index) => {
    return <BlockContent obj={project} key={index}/>
  });

  return (
    <div className="content-box">
      <div className="d-flex align-items-center p-2 pb-0 pl-4">
        <i className="fas fa-suitcase text-bold royal-blue heading-size"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading heading-size">
          Work Experience
        </div>
      </div>
      <p className="mb-0 px-4">
        I have no experience work at company. I am just learning web programming by myself. Base on knowledge gained. I have done some project, which were stored on github. To visitmy github click the link: <a href="https://github.com/Thachdong" className="royal-blue">github.com/Thachdong</a>
      </p>
      <p className="px-4 mb-0 mt-2 font-weight-bold">The latest 3 projects:</p>
      {projectList}
    </div>
  );
}
