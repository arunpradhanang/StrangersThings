import { useState } from "react";
let COHORT_NAME = '2306-FTB-ET-WEB-FT'
let BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  console.log("Token: ", token);

  async function handleClick() {
    try {
      const response = await fetch(
        `${BASE_URL}someEndPoint`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          
        }
      );
      const result = await response.json();
      console.log("Authenticate Result: ", result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      
    </div>
  );
}