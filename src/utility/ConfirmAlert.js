import Swal from "sweetalert2";

const AlertMessage = (message) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1000,
  });
};
export default AlertMessage;
