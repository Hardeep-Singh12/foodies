import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import style from "./SignUp.module.css"
import backGround from "./backGround.jpg"
function SignUp() {
  let navigator = useNavigate()

  let [api, setApi] = useState([])
  let [data, setData] = useState({ email: "", password: "" })

  function handleChange(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  function onsubmit(e) {
    e.preventDefault()
    console.log(data);
    setData({ email: "", password: "" })
    console.log(api);
    if (api.email === data.email &&
      api.password === data.password) {
      toast.success(`"welcome back " ${data.name}`)
      navigator("/main")

    }
    else { toast.error("you are not register") }


  }
  useEffect(() => {
    async function fetchDAta() {
      let { data } = await axios.get("http://localhost:5000/0")
      console.log(data);
      setApi(data)
    }
    fetchDAta()

  }, [])


  return (
    <div  className={style.all}>
      <img className={style.backGround} src={backGround} alt="" />
       <section className={style.formR}>
       <h1>SignUp</h1>
      <form onSubmit={onsubmit} >
        <div className={style.data}>
        <label htmlFor="email">email</label>
        <input id='email' type="email" name='email' onChange={handleChange} value={data.email} />
        </div>
        <div className={style.data}>
        <label htmlFor="password">password</label>
        <input id='password' type="password" name='password' onChange={handleChange} value={data.password} />
        </div>
        <button className={style.btn} type='submit'>LogIn</button>
        <button className={style.btn} ><Link to={"/Register"}>Register</Link></button>
      </form>
      </section>
    </div>
  )
}

export default SignUp