import React, { Component } from 'react';

import House from '../House/House';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <House />
      </div>
    );
  }
};

export default Dashboard;