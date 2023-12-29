

import axios from "axios"
import configUrl from "./db"

const URL = configUrl.APIURL
const FORM = configUrl.FORMULARIO
const USERS = configUrl.USERS

export const FormRows = async () => {
  const forms = await axios.get(`${URL}/${FORM}`)
  return forms.data.items
}

export const UserRows = async () => {
  const users = await axios.get(`${URL}/${USERS}`)
  return users.data.items
}

