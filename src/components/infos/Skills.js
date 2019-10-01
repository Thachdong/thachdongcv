import React from 'react';
import ProgressBar from './ProgressBar';

export default function Skills(props) {
  const {skills} = props;
  const skillList = skills.map((skill, index) => {
    return <ProgressBar obj={skill} key={index} />
  });

  return (
    <div className="py-2">
      <div className="d-flex align-items-center p-2 pl-4 border-top">
        <i className="fas fa-asterisk text-bold royal-blue"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading">skills</div>
      </div>
      {skillList}
    </div>
  )
}
