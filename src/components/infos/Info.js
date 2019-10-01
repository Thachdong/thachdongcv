import React, { Component } from 'react';
import Contact from './Contact';
import Skills from './Skills';
import Language from './Language';
import "../../App.css";

export default class Info extends Component {
  render() {
    const { skills, languages } = this.props;
    return (
      <div className="content-box">
        {/* candidate image here */}
        <div className="candidate-image">
          <div className="img d-flex align-items-end">
            <h2 className="text-capitalize text-light px-3">thach dong</h2>
          </div>
        </div>

      {/* candidate contact info here */}
      <div>
        <Contact />
        <Skills skills={skills} />
        <Language languages={languages} />
      </div>
      </div>
    )
  }
}
