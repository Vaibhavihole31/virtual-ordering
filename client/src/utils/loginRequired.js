import swal from 'sweetalert'

import { virtualUser } from './virtualUser'

export async function loginRequired() {
  if (!virtualUser) {
    await swal({
      title: "Login Required",
      text: "Please login to continue",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    window.location.href = '/login'
  }
}