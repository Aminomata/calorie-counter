import axios from "axios";

const test = async () => {
  const a = await axios.get('http://localhost:5000/')
  alert(a.data)
}

export {
  test
} 