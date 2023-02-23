
import {Wrapper} from "./styled"
import { useContext, useEffect, useState } from "react"
import { OrderContext } from "../../context/MainContext"



export function Home (){
    const {users} = useContext(OrderContext)

    const user = users.map((item) => item.user)

    const [list, setLits] = useState<string[]>([])


    useEffect(()=> {
        console.log(list)
        



    }, [list])


    function AddToLists(){

        const newName = 'Daniel'
        setLits((state) => [...state, newName])
    }

    return(
        <Wrapper>
           <h1>{user}</h1>
           <h1> Home</h1>

           {list.map((item) => {
            return (
                <li>{item}</li>
            )
           })}

           <button onClick={AddToLists}> Add to List</button>
        </Wrapper>


    )
}