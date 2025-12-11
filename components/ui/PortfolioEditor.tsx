import React, { useState } from 'react';

interface PortfolioEditorProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

const PortfolioEditor: React.FC<PortfolioEditorProps> = ({
  initialContent = '',
  onSave,
}) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    if (onSave) {
      onSave(content);
    }
  };

  return (
    <div className="portfolio-editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter portfolio content..."
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PortfolioEditor;
