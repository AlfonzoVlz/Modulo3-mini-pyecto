import { useEffect } from "react"
import { useState } from "react"
import { Card } from "./components/Card"


function App() {
const [data, setData] = useState([])

const getData = async () =>{
 const rs = await fetch('stays.json')
 const rsJson = await rs.json()

 setData(rsJson)
}
useEffect(() =>{
  getData()
},[])

  return (
    <>
    <div>
      {data &&
        data.map((user, index) =>(
          <Card
          key={index}
          superHost={user.superHost}
          title={user.title}
          rating={user.rating}
          type={user.type}
          beds={user.beds}
          photo={user.photo}
        />
        ))
      }
    </div>
    </>
  )
}

export default App
