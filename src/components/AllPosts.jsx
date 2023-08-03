import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

function AllPosts () {
    const [ allPosts, setPosts ] = useState([])
    const navigate = useNavigate()
    


    useEffect(() =>{
        async function fetchData(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-ftb-et-web-ft/posts')
                const data = await response.json()

                setPosts(data.data.posts)
                
            
        } catch (err){
            console.log('Error occured fetching all Posts')

        }
    
}
fetchData()
    },[])
console.log(allPosts)

    return<>
    { allPosts.map((p, index) => 
            <div key={index} 
                className='all posts'
                onClick={() => navigate(`/`)}>
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