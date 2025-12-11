import React from 'react';

interface AbsherConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AbsherConciergeDrawer: React.FC<AbsherConciergeDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <button onClick={onClose}>Close</button>
        <h2>Absher Concierge</h2>
        {/* Add your drawer content here */}
      </div>
    </div>
  );
};

export default AbsherConciergeDrawer;
