import React from 'react';
import '../../App.css';
import BlockContent from './BlockContent';

export default function Edu(props) {
  const { edu, knowledge} = props;
  const eduList = edu.map((edu, index) =>{
    return <BlockContent obj={edu} key={index} />
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
        <i className="fas fa-certificate text-bold royal-blue heading-size"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading heading-size">
          education
        </div>
      </div>
      <div className="p-2 pb-2 pl-4">I am learning Web Programming by myself. I have basic knowledge about:</div>
      <table className="pb-0 mb-0 mx-4 table table-sm table-borderless knowledge-table">
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
      {eduList}
    </div>
  );
}

