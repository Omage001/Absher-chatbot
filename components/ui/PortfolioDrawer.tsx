import React from 'react';

interface PortfolioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioDrawer: React.FC<PortfolioDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div className={`portfolio-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <button onClick={onClose}>Close</button>
        <h2>Portfolio</h2>
        {/* Add your portfolio content here */}
      </div>
    </div>
  );
};

export default PortfolioDrawer;
