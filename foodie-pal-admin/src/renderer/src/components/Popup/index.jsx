import Swal from 'sweetalert2'

export default function Popup({
  title,
  text,
  icon,
  confirmButtonText,
  confirmButtonColor,
  action
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: confirmButtonColor,
    confirmButtonText: confirmButtonText
  }).then((result) => {
    if (result.isConfirmed && action) {
      action()
    }
  })
}
