import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}`,
          {
            start: 0,
            limit: 10,
          },
          {
            headers: {
              Username: "amitphatak$r5labs.com",
            },
          }
        );
        const locations = response.data;
        console.log({ locations });
      } catch (error) {
        console.log({ error });
      }
    };
    getLocations();
  }, []);

  return (
    <div>
      <h1>Locations Lister</h1>
    </div>
  );
}

export default App;
