import { useEffect, useState } from "react";

let COHORT_NAME = '2306-FTB-ET-WEB-FT'
let BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
 

function SinglePost () {

    
    const updatePost = async () => {
        try {
          
          const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
              post: {
                title:
                description, 
                price,
                location: 
                willDeliver}
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
 }







 export default SinglePost