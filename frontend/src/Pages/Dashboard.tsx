import axios from "axios"
import { useEffect, useState } from "react"

export function Dashboard(){
    const [user, setUser] = useState()
    
    useEffect(()=>{
        axios.get('http://localhost:3000/dashboard',{
            headers:{
                "token":localStorage.getItem('token')
            }
        }).then((response) => setUser(response.data))
    },[])
    {console.log(user)}

    return <div>
        Dashboard
        {JSON.stringify(user)}
    </div>
}