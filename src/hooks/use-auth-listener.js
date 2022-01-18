import { useState, useEffect, useContext } from "react"
import { FirebaseContext } from "../context/firebase"

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))
  // console.log(localStorage) //Pruebas con el local store
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser))
        localStorage.setItem("logged", true) //pruebas con el local store
        setUser(authUser)
      } else {
        localStorage.removeItem("authUser")
        localStorage.setItem("logged", false) //pruebas con el local store
        setUser(null)
      }
    })

    return () => listener()
  }, [])

  return { user }
}
