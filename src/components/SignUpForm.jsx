import { useState } from "react";
let COHORT_NAME = '2306-FTB-ET-WEB-FT'
let BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
  

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  

  async function handleSubmit(e) {
    e.preventDefault();
    
    
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user:{
            username,
            password}
          }),
        }
      );
      const result = await response.json();
      console.log("Signup Result: ", result);
      setToken(result.data.token);
      setSuccessMessage(result.message);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}