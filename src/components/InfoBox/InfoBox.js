import React, { useState } from "react";
import "./InfoBox.css";

const InfoBox = props => {

  const [showBox, setShowBox] = useState(true); // define state for closing box
  //Define padding value check it if larger than 25 (for basic style) and then convert it to css value ( 25px ) by adding px to end 
  const paddingVal = props.padding && props.padding > 25 ? props.padding + "px" : "";
  let xClass = props.type || "";  // xClass is parent div of info box and it gets value there
  xClass += " infobox ";          // infobox is our pre defined class name for styling
  xClass += props.corners || "";  // first check and then add class for corners shape

  const xImage = props.image;      
  const imagePadding = xImage ? "120px" : "";   // if image exist add 120px padding to the box

  const closeBtnHandler = e => {
    e.preventDefault();
    setShowBox(!showBox);             // change state when close button is clicked 
  };


 
  if (showBox) {              // if showbox state is true ( button isn't clicked ) show the box 
    return (
      <div>
        <div
          className={xClass}
          style={{                      // add inline style to box for padding and background image 
            padding: paddingVal,
            paddingLeft: imagePadding,
            backgroundSize: "100px, 100px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundImage: `url( ${xImage} )`
          }}
        >
          {props.closeBtn === "show" && (         // if closebtn prop set to show then close button shows
            <span className="closebtn" onClick={e => closeBtnHandler(e)}>
              &#10006;
            </span>
          )}
           
          { // this line add any thing is between the <InfoBox  tags 
            props.children
          }          
        </div>
      </div>
    );
  } else {
    return null;         // if close button clicked then showBox state gets false and box removed 
  }
};
export default InfoBox;
