import { Snackbar, Alert } from "@mui/material";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <Snackbar open={!!message} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={type} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
