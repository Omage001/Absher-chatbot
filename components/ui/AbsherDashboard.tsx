import React from 'react';

interface AbsherDashboardProps {
  title?: string;
}

const AbsherDashboard: React.FC<AbsherDashboardProps> = ({ title = 'Dashboard' }) => {
  return (
    <div className="dashboard">
      <h1>{title}</h1>
      <div className="dashboard-content">
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default AbsherDashboard;
