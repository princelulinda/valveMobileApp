
const BASE_URL = "http://valve.fongolab.com/api";

const GetDataFunction = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
export default GetDataFunction;

