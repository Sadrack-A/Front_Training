'use client'
import { instance } from "@/src/service/api"
import Link from "next/link"
import { useEffect, useState } from "react"
import React from "react"
import { Menu } from "@/src/components/Menu"



export default function CreateUser(){

    const [error, setError] = useState<string | null>(null)
    
    const [success, setSuccess] = useState<string | null>(null)
  

    const [name, setName] = useState <string>("")

    const [email, setEmail] = useState <string>("")

    const handleSubmit = async (event: React.SubmitEvent) => {

        event.preventDefault();
        
        setError (null)

        setSuccess(null)

        try{
            const response = await instance.post("/users", { 
                name,
                email,
            })

            // console.log(response.data)
            setSuccess(response.data.message)

        } catch(error: any){
            // console.log(error.response)
            setError(error.response.data.message)
        }
    }
    
   return(

        <div>
          <Menu/>  
            <h1>Cadastro de user</h1>

            <Link href="/users/list">Listar</Link>

            {error && <p style= {{color: "#f00"}}>  {error}</p>}

            {success && <p style= {{color: "rgb(43, 255, 0)"}}>  {success}</p>}<br/><br/>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input type="text" 
                    id="name"
                    value={name}
                    placeholder="Nome de usuario"
                    onChange={(e)=> setName(e.target.value)}
                    className="border p-1"
                    />
                </div> <br/>

                 <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="text" 
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    className="border p-1"
                    />
                </div>

                <div>
                    <button type="submit" className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-green-600">
                      Cadastrar
                    </button>
                </div>
                

            </form>


        </div>
   )

}