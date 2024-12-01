import Footer from "./footer"
import Feed from "./Feed"
import style from "./main.module.css"
import Slidebar from "./Slidebar"
function Main() {

  return (
 <>
<h1 className={style.head}>Foodies</h1>
<div className={style.all}>
<Slidebar /> 
<span className={style.Feed}><Feed></Feed></span>
</div>
<footer>
  <Footer ></Footer>
  </footer>

 </>
  )
}

export default Main