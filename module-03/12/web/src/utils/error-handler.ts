import Swal from "sweetalert2";
import { isAxiosError } from "axios";
export default function ErrorHandler(err: any) {
  let message = err.message;
  if (isAxiosError(err)) {
    message = err.response?.data.message;
  }
  Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
}
