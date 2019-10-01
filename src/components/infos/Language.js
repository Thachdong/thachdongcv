import React from 'react';
import '../../App.css';
import ProgressBar from './ProgressBar';

export default function Language(props) {
  const {languages} = props;
  const languageList = languages.map((language, index) => {
    return <ProgressBar obj={language} key={index} />
  });
  return (
    <div className="py-2">
      <div className="d-flex align-items-center p-2 pl-4 border-top">
        <i className="fas fa-globe-americas text-bold royal-blue"></i>
        <div className="text-capitalize pl-4 basic-text basic-heading">language</div>
      </div>
      {languageList}
    </div>
  )
}
