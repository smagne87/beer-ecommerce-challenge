const Alert = ({ type, message }) => {
  const baseClasses = "px-4 py-3 rounded relative mb-4";
  let alertClasses = "";

  switch (type) {
    case "success":
      alertClasses = "bg-green-100 border border-green-400 text-green-700";
      break;
    case "error":
      alertClasses = "bg-red-100 border border-red-400 text-red-700";
      break;
    case "warning":
      alertClasses = "bg-yellow-100 border border-yellow-400 text-yellow-700";
      break;
    case "info":
      alertClasses = "bg-blue-100 border border-blue-400 text-blue-700";
      break;
    default:
      alertClasses = "bg-gray-100 border border-gray-400 text-gray-700";
      break;
  }

  return (
    <div className={`${baseClasses} ${alertClasses}`} role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
