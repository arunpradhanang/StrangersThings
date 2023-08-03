import { useState } from 'react'

function Authenticate( { token }) {
    const [ successMessage, setSuccessMessage] = useState(null)
    const [ error, setError ] = useState(null)    

    async function handleClick() {
        try {
            // authenticate the user
            const response = await fetch('https://strangers-things.herokuapp.com/api/2306-ftb-et-web-ft/users/register', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
                }
              })
            const responseData = await response.json()
            console.log(responseData)

            setSuccessMessage(`Hello, ${responseData.data.username}`)
        } catch (error) {
        setError(error.message);
        }
    }

    return <>


        { (successMessage) ? <p>{successMessage}</p> : <></>}


        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      
    </>
}

export default Authenticate