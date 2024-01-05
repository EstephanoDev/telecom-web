import axios from "axios"
import { API_URL } from "./dataTable"

export const UbiData = async () => {
  const result = await axios.get(`${API_URL}/api/collections/Ubicacion/records`)
  return result.data.items
}

