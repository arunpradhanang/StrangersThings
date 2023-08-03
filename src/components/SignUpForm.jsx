import {useState} from 'react'

function SignUpForm( { setToken } ) {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()

       try {
        // call the server and give it the password / username
        const response = await fetch('https://strangers-things.herokuapp.com/api/2306-ftb-et-web-ft/users/register',
            {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )

        const data = await response.json()

        setToken(data.token)

        setUsername('')
        setPassword('')

        } catch(err){
            setError(err)
        }

    }


    return <>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>Password:
                <input value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </>
}

export default SignUpForm