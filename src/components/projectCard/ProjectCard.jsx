import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

function ProjectCard({ item }) {
  return (
    <Link to="/" className="link" >
      <div className="projectCard">
        <img src={item.img} alt="img" />
        <div className="info">
          <img src={item.pp} />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;