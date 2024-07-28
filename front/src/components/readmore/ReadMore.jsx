import { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength) + "...";

  return (
    <div>
      <p className="text-sm text-gray-500 mt-3 inline">{displayText}</p>
      <button
        className="text-custom-orange font-semibold focus:outline-none"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default ReadMore;
