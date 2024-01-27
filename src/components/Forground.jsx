import React, { useRef } from "react";
import Cards from "./Cards";


function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc : "lorem7 impsum dolor sit amet consecteture adipisicing.",
      fileSize : ".9mb",
      close : false,
      tag : {isOpen : true, tagTitle : "Download Now", tagColor : "green"},
    },
    {
      desc : "lorem7 impsum dolor sit amet consecteture adipisicing.",
      fileSize : ".9mb",
      close : true,
      tag : {isOpen : false, tagTitle : "Download Now", tagColor : "blue"},
    },
    {
      desc : "lorem7 impsum dolor sit amet consecteture adipisicing.",
      fileSize : ".9mb",
      close : true,
      tag : {isOpen : true, tagTitle : "Download Now", tagColor : "blue"},
    }
  ]

  return (
    <div ref={ref} className="fixed w-full h-full top-0 left-0 z-[3] flex gap-5 flex-wrap ">
      {data.map((item, index) => {
        return(
          <Cards data={item} reference={ref}/>
        )
      })}
    </div>
  );
}

export default Forground;
