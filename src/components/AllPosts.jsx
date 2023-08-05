import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

function AllPosts ({ token }) {
    const [ allPosts, setPosts ] = useState([])
    
    


    useEffect(() =>{
        async function fetchData(){
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-ftb-et-web-ft/posts',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
            })
                
                const data = await response.json()
                setPosts(data.data.posts)
                console.log(data.data.posts)
            

        }
         {
            fetchData() 
        }
    }, [token])

    

    return<>
    { allPosts.map((p, index) => 
            <div key={index} 
                className='all posts'
                >
               <p>{p.title}</p>
               <p>Price: {p.price}</p>
               <p>Description: {p.description}</p>
               <p>Location: {p.location}</p>
               <p>User: {p.author.username}</p>
               
            </div>)
        }
    </>
}
export default AllPosts