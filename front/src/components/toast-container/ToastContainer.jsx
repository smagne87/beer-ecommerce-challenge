import { useToast } from "../../contexts/ToastContextProvider";
import Toast from "../toast";

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
