import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "../components/ui/Button"
import { useNavigate } from "react-router-dom"

export function Dashboard(){
    const [user, setUser] = useState()
    const navigate = useNavigate()
    
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
        <Button title="Admin Dashboard" onClick={()=>navigate('/admin/dashboard')}/>
    </div>
}