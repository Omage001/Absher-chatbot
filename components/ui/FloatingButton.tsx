import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      className={`floating-button ${className || ''}`}
      onClick={onClick}
      aria-label="Floating action button"
    >
      {icon || '+'}
    </button>
  );
};

export default FloatingButton;
