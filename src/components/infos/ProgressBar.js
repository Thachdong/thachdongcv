import React from 'react';
import { Progress } from 'reactstrap';

export default function ProgressBar(props) {
  const obj = props.obj;
  return (
    <div>
      <p className="basic-text text-capitalize px-4">{obj.name}</p>
      <Progress 
        className="mx-4 mb-4" 
        color="info" 
        animated striped 
        value={obj.value}
      >
        {
          `${obj.value}%`
        }
      </Progress>
    </div>
  )
}
