import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const h1ref = useRef()
  const clickHandler = async () => {
    const response = await fetch('http://localhost:3000/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      mode: 'cors',
      // body: JSON.stringify({data: 'this is body sent in post'})
    });
    const json = await response.json()
    h1ref.current.innerText = json.result
  }

  return (
    <>
      <h1 ref={h1ref}></h1>
      <button onClick={clickHandler}>Click to fetch</button>
    </>
  )
}

export default App


// Default options are marked with *
// const response = await fetch(url, {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   mode: "cors", // no-cors, *cors, same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: "same-origin", // include, *same-origin, omit
//   headers: {
//     "Content-Type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: "follow", // manual, *follow, error
//   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data), // body data type must match "Content-Type" header
// });