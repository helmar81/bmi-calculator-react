/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      bmi: "",
      msg: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateBMI = () => {
    let heightSq = (this.state.height / 100) * (this.state.height / 100);
    let bmi = this.state.weight / heightSq;
    let msg = "";
    if (bmi < 18.5) {
      msg = "under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      msg = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      msg = "Over Weight";
    } else if (bmi >= 30) {
      msg = "Obesity";
    }
    this.setState({ msg: msg });
    this.setState({ bmi: Math.round(bmi * 100) / 100 });
  };

  handleSubmit = (e) => {
    this.calculateBMI();
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
         
          <img
      src="/GIFSouad.gif"
      alt="Souad"
    />


          <h2> BMI calculator </h2>
          <div>
         
            <label>Height(cm)</label>
            <input
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Weight</label>
            <input
              type="number"
              value={this.state.weight}
              name="weight"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
          <h2> {this.state.bmi} </h2>
          <h2> {this.state.msg} </h2>
          <p>check your Body mass index</p>
          <p class="text-lg leading-relaxed text-gray-300n justify-around">
          Weight loss can dramatically improve overall health, alleviate symptoms and lower risk of developing obesity related diseases such as cardiovascular disease, type 2 diabetes and more
      </p>

          <footer class="flex flex-col items-center">
    <div class="text-sm text-center ">
      <a
      
      href="https://helmarbachle.web.app/" rel="noopener noreferrer"  target="_blank"  >
     
       Copyright © {new Date().getFullYear()} 
    </a>
    </div>
    </footer>
      

    
        </form>

       </div>

       

      
    );
  }

 
} 
export default App;