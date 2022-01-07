import React from 'react';
import { useLocation } from 'react-router-dom'

export default function BasicInfo(props) {
  const location = useLocation();
  let b_info = null;

  if(location.pathname === "/about"){
    b_info ="I am a detail-oriented product designer, with a background in software engineering, who uses creativity and analytical skill to bring ideas into the real world. As a dedicated lifelong learner, with strong communication skills and a passion for discovering how people think about the world, I seek to solve meaningful problems in thoughtful and insightful ways.";
  }

  return(
    <div className="bi-wrapper">
      <h1 className="bi-name">John Simmons</h1>
      <p className="bi-info subtext">Product Designer @ Persado | NYC</p>
      <p className="bi-info">{b_info}</p>
    </div>
  )
}
