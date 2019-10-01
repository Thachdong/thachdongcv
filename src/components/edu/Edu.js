import React from 'react';
import '../../App.css';
import BlockContent from './BlockContent';

export default function Edu(props) {
  const {edu} = props;
  const eduList = edu.map((edu, index) =>{
    return <BlockContent obj={edu} key={index} />
  });
  return (
    <div className="content-box">
      <div className="d-flex align-items-center p-2 pb-2 pl-4">
        <i className="fas fa-certificate text-bold royal-blue heading-size"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading heading-size">
          education
        </div>
      </div>
      {eduList}
    </div>
  );
}

