import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  render() {
    return (
      <div>
        <h3>Wizard</h3>
          <div className="button">
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
      </div>
    );
  }
};

export default Wizard;