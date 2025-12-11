import React from 'react';
import './styles/globals.css';
import AbsherDashboard from './components/ui/AbsherDashboard';

const App: React.FC = () => {
  return (
    <div className="app">
      <AbsherDashboard title="Absher Chatbot" />
    </div>
  );
};

export default App;
