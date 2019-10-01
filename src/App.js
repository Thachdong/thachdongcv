import React, { Component } from 'react';
import './App.css';
import { db } from './components/Firebase';
import Info from './components/infos/Info';
import Edu from './components/edu/Edu';
import Exp from './components/Exp';
import MyGoals from './components/MyGoals';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      languages: [],
      edu: [],
      project: []
    }
  }

  componentDidMount() {
    // get skill data
    db.collection("skill")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState(
        () => {
          return {skills: data}
        }
      );
    });
    // get language data
    db.collection("language")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState(
        () => {
          return {languages: data}
        }
      );
    });
    // get edu data
    db.collection("education")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState(
        () => {
          return {edu: data}
        }
      );
    });
    // get project data
    db.collection("project")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState(
        () => {
          return {project: data}
        }
      );
    });
  }

  render() {
    const {skills, languages, edu, project } = this.state;
    return (
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-sm-4 p-2 bg-transparent">
            <Info skills={skills} languages={languages} />
          </div>
          <div className="col-sm-8 p-2 bg-transparent">
            <MyGoals />
            <Exp projects={project} />
            <Edu edu={edu} />
          </div>
        </div>
      </div>
    )
  }
}
