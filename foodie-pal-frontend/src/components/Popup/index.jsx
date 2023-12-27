import Swal from "sweetalert2";

export default function Popup({
  title,
  text,
  icon,
  confirmButtonText,
  confirmButtonColor,
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: confirmButtonColor,
    confirmButtonText: confirmButtonText,
  });
}
