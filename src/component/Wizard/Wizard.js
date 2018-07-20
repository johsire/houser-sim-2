import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
  constructor() {
    super();

    this.state={
      propertyName: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
    }
  };
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      propertyName: this.state.propertyName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    
    axios.post('api/house', data)
      .then(res => {
        // console.log(res.data, 'response from backend');
        this.setState({
          propertyName: '',
          address: '',
          city: '',
          state: '',
          zip: 0,
        })
     })
     .catch(err => {
       console.log(err, 'error from the backend after axios call');
     })
    //  console.log('api/house');
  }  



    
  render() {
    return (
      <div>
        <h3>Wizard</h3>

        Property Name: {this.state.propertyName} <br/>
        Address: {this.state.address} <br/>
        City: {this.state.city}
        State: {this.state.state}
        Zip: {this.state.zip} <br/><br/>

      <form onSubmit={e => this.handleSubmit(e)}>  
          <div className="button">
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        <div className="inputBox">
          <br/>
          <input name="propertyName" type='text' placeholder='Property Name' 
          value={this.state.propertyName} onChange={e => this.handleChange(e)} 
          />
          <br/>
          <br/>
          <input name="address" type='text' placeholder='Address' value={this.state.address} onChange={e => this.handleChange(e)}/>
          <br/>
          <br/>
          <input name="city" type='text' placeholder='City' value={this.state.city} onChange={e => this.handleChange(e)} />
          <input name="state" type='text' placeholder='State' value={this.state.state} onChange={e => this.handleChange(e)} />
          <input name="zip" type='number' placeholder='Zip' value={this.state.zip} onChange={e => this.handleChange(e)} />
        </div>
      </form>        
      </div>
    );
  }
};

export default Wizard;
