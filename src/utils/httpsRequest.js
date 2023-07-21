import axios from 'axios';

const httpsRequest = axios.create({
  baseURL: '',
});

export const get = async () => {
  try {
    const response = await httpsRequest.get(path, options);
    return response.data;
  } catch (err) {
    console.log('error:', err);
    throw err;
  }
};

export default get;
