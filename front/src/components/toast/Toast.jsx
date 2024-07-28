import { useEffect } from "react";

const Toast = ({ id, type, message, onClose, duration = 2000 }) => {
  const baseClasses = "fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg";
  let toastClasses = "";

  switch (type) {
    case "success":
      toastClasses = "bg-green-500 text-white";
      break;
    case "error":
      toastClasses = "bg-red-500 text-white";
      break;
    case "warning":
      toastClasses = "bg-yellow-500 text-black";
      break;
    case "info":
      toastClasses = "bg-blue-500 text-white";
      break;
    default:
      toastClasses = "bg-gray-500 text-white";
      break;
  }

  const handleOnClose = () => {
    onClose(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  return (
    <div className={`${baseClasses} ${toastClasses}`} role="alert">
      <span>{message}</span>
      <button className="ml-4 text-lg font-bold" onClick={handleOnClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
