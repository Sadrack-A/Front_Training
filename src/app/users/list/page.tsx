'use client'
import { instance } from "@/src/service/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "@/src/components/Menu"

 interface User{
        
        id: number,
        name: string,
        email: string
    }

export default function  User(){
    const [error, setError] = useState <string | null> (null)
    const [users, setUsers] = useState <User[]> ([])
   

    const pegarUser = async () => {
       try{

        const response = await instance.get("/users")
        
         setUsers (response.data)

        }
        catch(error){
            setError("Erro ao listar usuarios, tente novamente")

        }

    }
useEffect(() => {
    pegarUser()
}, [])

    return(
        <div className="flex flex-col h-screen bg-gray-100">
            <Menu/>
            <h1>Lista de Usuarios </h1>

            <Link href="/users/create">Cadastrar</Link>

            {error && <p style= {{color: "#f00"}}>  {error}</p>}
           <table> 
            <thead> 
                <tr> 
                    <th  style={{ padding: "10px 20px" }}> ID</th>
                    <th  style={{ padding: "10px 20px" }}>Nome</th>
                    <th  style={{ padding: "10px 20px" }}> emai</th>
                </tr>
            </thead>
            <tbody> 
                { users.map((user)=> (
                    <tr key= {user.id}> 
                        <td> 
                            {user.id}
                        </td>
                        <td> {user.name}</td>
                        <td> {user.email}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    )
}