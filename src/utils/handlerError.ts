import { notify } from "./notify"

export const handlerError = (error: unknown) => {
  console.error(error)
  notify('error', 'אירעה שגיאה, נסה שוב')
}
