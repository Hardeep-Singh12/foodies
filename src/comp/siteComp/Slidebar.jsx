import style from "./Slidebar.module.css"
function Slidebar() {
  return (<>
  <aside className={style.aside}>
  <ul>
   <li>home</li>
   <li>Profile</li>
   <li>Recipes</li>
   <li>favorite</li>
   <li>setting</li>
   </ul></aside>
   </>
  )
}

export default Slidebar