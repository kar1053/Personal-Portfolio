import "./portfolio.scss";
import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import {
  youtubeproject,
  passwordgenerator,
  ForecastFinder,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("password");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "password",
      title: "1.PassWord Generator",
    },
    {
      id: "youtube",
      title: "2.YouTube Clone",
    },
    {
      id: "ForecastFinder",
      title: "3.ForecastFinder",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "password":
        setData(passwordgenerator);
        break;
      case "youtube":
        setData(youtubeproject);
        break;
      case "ForecastFinder":
        setData(ForecastFinder);
        break;
      default:
        setData(passwordgenerator);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="click">
      {data.map((d) => (
           <a href={d.link}>CLICK HERE FOR A QUICK PREVIEW- {d.title}</a>
        ))}
      </div>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    
  );
}
