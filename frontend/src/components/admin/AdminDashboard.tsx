import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/Button"

export function AdminDashboard(){
    const [user, setUser] = useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:3000/admin/dashboard',{
            headers:{
                "token":localStorage.getItem('token')
            }
        }).then((response) => setUser(response.data))
    },[])
    {console.log(user)}

    return <div>
        AdminDashboard
        {JSON.stringify(user)}
        <Button title="Add Course" onClick={()=>navigate('/admin/dashboard')}/>
    </div>
}