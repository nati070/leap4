import axios from "axios";

const severName = process.env.REACT_APP_SERVER + '/api';

export const getAllUrlsAndMapping = async () => {
  try {
    const resonse = await axios.get(severName + "/get-all-mapping");
    return resonse.data;
  } catch (err) {
    console.log(err);
  }
};

export const validateURL = (url) => {
  const regex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  return regex.test(url) ? true : false;
};

export const addUrlMapping = async (url) => {
  try {
    const response = await axios.post(severName + "/create-map-url", {
      url: url,
    });
    return response.data;
  } catch (err) {
    if (err.response.status == 409) {
      alert("already exist");
      return;
    }
    console.log(err);
  }
};

export const getUrlById = async (id) => {
  try {
    const resonse = await axios.post(severName + "/get-map-url", {
      id: id,
    });
    return resonse.data;
  } catch (err) {
    console.log(err);
  }
};
