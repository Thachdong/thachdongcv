import React from 'react';
import '../../App.css';

export default function Contact() {
  return (
    <div>
      <div className="d-flex align-items-center p-2 pl-4">
        <i className="fas fa-briefcase royal-blue"></i>
        <div className="text-capitalize pl-4 basic-text">student (learn web programming by myself)</div>
      </div>
      <div className="d-flex align-items-center p-2 pl-4">
        <i className="fas fa-map-marker-alt royal-blue"></i>
        <div className="text-capitalize pl-4 basic-text">HCM city, vietNam</div>
      </div>
      <div className="d-flex align-items-center p-2 pl-4">
        <i className="fas fa-envelope royal-blue"></i>
        <div className="pl-4 basic-text">thachdong270293@gmail.com</div>
      </div>
      <div className="d-flex align-items-center p-2 pl-4">
        <i className="fas fa-phone royal-blue"></i>
        <div className="text-capitalize pl-4 basic-text">0353 860 797</div>
      </div>
    </div>
  )
}
