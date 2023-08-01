import "./topbar.scss"
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';
export default function topbar({open,setopen}) {
  return (
    <div className={"topbar " + (open && "active")}>
       <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Ishita's Portfolio</a>
          <div className="itemcontainer">
              <Person className="icon"/>
              <span>+91 7085296790</span>
          </div>
          <div className="itemcontainer">
              <Mail className="icon"/>
              <span>rishitakarmakar02@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="rightside" onClick={()=>setopen(!open)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
       </div>
    </div>
  )
}


