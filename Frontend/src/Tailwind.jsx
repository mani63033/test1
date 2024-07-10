import React, { useEffect, useMemo, useState } from "react";

const Tailwind=()=>
{
    const [date,setDate]=useState(new Date().toLocaleTimeString())
    const [products,setProdut]=useState(
        [
            {id:1,name:"mani"},
            {id:2,name:"abi"}
        ]
    )
    const [search,setSearch]=useState("")
    const filter=useMemo(
        ()=>
    {
        return products.filter(
            (p)=>{
                 return p.name.toLowerCase().includes(search)
            }
        )
    },[products,search]
    )
    useEffect(()=>
    {
        setInterval(
            ()=>
            {
                setDate(new Date().toLocaleTimeString())
            },1000
        )
    },[])
    return(
        <>
        <div>
            <h1>{date}</h1>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                    {
                        filter.map(p=>(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
        </>
    )
}

export default Tailwind