import React from 'react';

export default function BlockContent(props) {
  const {obj} = props;
  return (
    <div className="border-bottom py-2">
      <div className="text-capitalize pt-1 pl-4 basic-text basic-heading">
        {obj.name}
      </div>
      <div className="d-flex align-items-center px-2 py-0 pl-4">
        {
          obj.site ? 
          <>
            <i className="fab fa-chrome royal-blue"></i>
            <div className="pl-4 py-2 royal-blue">
              <a href={obj.site} className="royal-blue">{obj.site}</a>
            </div>
          </> :
          <>
            <i className="fas fa-calendar royal-blue"></i>
            <div className="text-capitalize pl-4 royal-blue">{obj.duration}</div>
          </>
        }
      </div>
      <p className="my-0 px-4">{obj.discript}</p>
      <p className="my-0 px-4">{obj.features}</p>
    </div>
  );
}
