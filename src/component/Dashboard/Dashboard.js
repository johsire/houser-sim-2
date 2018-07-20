import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>

        <House />

        <div className="button">
          <Link to="/Wizard">
            <button >Add New Property </button>
          </Link>
        </div>

      </div>
    );
  }
};

export default Dashboard;
