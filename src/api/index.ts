import axios from "axios";

export const api = {
  post: async (endpoint: string, body: { start: number; limit: number }) => {
    const { REACT_APP_API_BASE_URL, REACT_APP_API_USERNAME } = process.env;
    const response = await axios.post(
      `${REACT_APP_API_BASE_URL}/${endpoint}`,
      body,
      {
        headers: {
          Username: `${REACT_APP_API_USERNAME}`,
        },
      }
    );
    return response;
  },
};
