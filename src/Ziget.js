import React, { Component } from "react";
import logo from "./logo.svg";
import "./Ziget.css";

export default class Ziget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: ``,
      individual: false,
      jobId: ``,
      data: {},
      dataOut: ``,
      loading: false
    };

    this.handleTAChange = this.handleTAChange.bind(this);
    this.handleCBChange = this.handleCBChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getJobID = this.getJobID.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleTAChange = event => this.setState({ usernames: event.target.value });
  handleCBChange = event => this.setState({ individual: event.target.checked });

  getJobID = () => {
    const postURL = `https://fe-test-zyper-engagement.herokuapp.com/start`;
    const userInput = {
      username: this.state.usernames,
      individual: this.state.individual
    };
    console.log(JSON.stringify(userInput));
    fetch(postURL, {
      method: `POST`,
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.text())
      .then(jobId => this.setState({ jobId }));
  };

  getData = () => {
    const getURL = `https://fe-test-zyper-engagement.herokuapp.com/results/`;
    console.log(this.state.jobId);
    console.log(`Result URL: `, getURL + this.state.jobId);
    fetch(getURL + this.state.jobId, {
      method: `GET`,
      mode: `cors`,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  displayData = () => {
    const data = this.state.data;
    document.getElementById("results").innerHTML = ``;
    let x, y;
    for (x in data) {
      let obj = data[x].output;
      for (y in obj) {
        document.getElementById("results").innerHTML +=
          y + "&nbsp;:&nbsp;" + obj[y] + "<br>";
      }
      document.getElementById("results").innerHTML += "<br><br>";
    }
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    this.getJobID();
    setTimeout(this.getData, 3000);
    setTimeout(this.displayData, 5000);
    this.setState({ loading: false });
  };

  render() {
    return (
      <div className="Ziget">
        <header className="Ziget-header">
          <img src={logo} className="Ziget-logo" alt="Zyper Logo" />
          <h2>Hi! Welcome to Zyper Instagram Engagement Tool aka ZIGET.</h2>
        </header>
        <form id="ziget-form" className="Ziget-form">
          <label className="textarea-label" htmlFor="usernames">
            <h3 className="textarea-label-text">Username(s):</h3>
            <textarea
              id="usernames"
              value={this.state.value}
              onChange={this.handleTAChange}
              autoFocus
              required
              rows={10}
              cols={100}
              placeholder="Enter Instagram handles here"
            />
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="individual"
              onChange={this.handleCBChange}
            />
            <h4 className="checkbox-text">
              Tick to list all accounts individually.
            </h4>
          </label>
          <button type="button" className="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <button type="reset" className="reset">
            Clear
          </button>
        </form>
        <h3>Results:</h3>
        <p className="output" id="results" />
      </div>
    );
  }
}
