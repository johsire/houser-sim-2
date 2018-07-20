import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    
  render() {
    return (
      <div>
        <h3>Wizard</h3>

        Property Name: {this.state.propertyName} <br/>
        Address: {this.state.address} <br/>
        City: {this.state.city}
        State: {this.state.state}
        Zip: {this.state.zip} <br/><br/>


          <div className="button">
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        <div className="inputBox">
          <br/>
          <input type='text' placeholder='Property Name' onChange={this.handlePropertyNameChange}/>
          <br/>
          <br/>
          <input type='text' placeholder='Address' onChange={this.handleAddressChange}/>
          <br/>
          <br/>
          <input type='text' placeholder='City' onChange={this.handleCityChange}/>
          <input type='text' placeholder='State' onChange={this.handleStateChange}/>
          <input type='number' placeholder='Zip' onChange={this.handleZipChange}/>
        </div>    
      </div>
    );
  }
};

export default Wizard;
