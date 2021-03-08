import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widgets">
      <iframe 
      className="videoFrame"
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2F2e7IoZ6K5Q%2F&show_text=true&width=734&height=1000&appId" 
      width="400" 
      height="800" 
      style={{border:"none",overflow:"hidden"}} 
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
      allowFullScreen="true">
      </iframe>
       
    </div>
    
  );
}

export default Widget;
