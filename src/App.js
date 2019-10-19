import React, { Component } from 'react';
import './App.css';
import { db } from './components/Firebase';
import Info from './components/infos/Info';
import Edu from './components/edu/Edu';
import Exp from './components/Exp';
import MyGoals from './components/MyGoals';
import Footer from './components/Footer';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      languages: [],
      edu: [],
      project: [],
      knowledge: []
    }
  }

  componentDidMount() {
    function getData(collection) {
      return (
        db.collection(collection)
          .get()
      );
    }

    getData("skill")
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({skills: data});
        return getData("language");
      })
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({languages: data});
        return getData("education");
      })
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({edu: data});
        return getData("project");
      })
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({project: data});
        return getData("knowledge");
      })
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({knowledge: data});
      });
  }

  render() {
    const {skills, languages, edu, project, knowledge } = this.state;
    return (
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-sm-4 p-2 bg-transparent">
            <Info skills={skills} languages={languages} />
          </div>
          <div className="col-sm-8 p-2 pb-0 bg-transparent">
            <MyGoals />
            <Exp projects={project} knowledge={knowledge} />
            <Edu edu={edu} />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    )
  }
}
