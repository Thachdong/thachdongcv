import React from 'react';
import '../App.css';
import BlockContent from './edu/BlockContent';

export default function Exp(props) {
  const { projects, knowledge} = props;
  // render project list
  const projectList = projects.map((project, index) => {
    return <BlockContent obj={project} key={index}/>
  });

  // render knowledge
  const knowledgeList = knowledge.map((knowledge, index) => {
    return <tr key={index}>
        <td className="text-capitalize">{knowledge.name}</td>
        <td>{knowledge.level}</td>
      </tr>
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
        I have no experience work at company job. I am just learning web programming about 5 months. After 4 months, i have basic knowledge about: 
      </p>
      <table className="pb-0 mx-4 table table-sm table-borderless knowledge-table">
        <thead>
          <tr>
            <th className="text-left">Knowledge</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {knowledgeList}
        </tbody>
      </table>
      <p className="px-4 pb-0">Base on knowledge gained, I have done 2 project, which deployed to netlify as below:</p>
      {projectList}
    </div>
  );
}
