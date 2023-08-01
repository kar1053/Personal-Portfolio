import "./menu.scss";

export default function Menu({ open, setopen }) {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={()=>setopen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setopen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={()=>setopen(false)}>
          <a href="#testimonials">About</a>
        </li>
        <li onClick={()=>setopen(false)}>
          <a href="#works">Skills</a>
        </li>
        <li onClick={()=>setopen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
