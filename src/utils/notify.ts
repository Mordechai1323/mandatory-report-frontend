import { Bounce, ToastOptions, toast } from "react-toastify"

export type TypeOptions = 'success' | 'warning' | 'error' | 'info'

export const notify = (type: TypeOptions, message: string, options?: ToastOptions) => {
    toast[type](message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      ...{ options },
    })
  }