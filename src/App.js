import React from 'react';
import InfoBox from './components/InfoBox/InfoBox'




function App() {
  
  return (
         // closeBtn if it is equal to (show) it is Showing Cross icon in the corner and close the whole box
         // padding for padding all things in the box. this take a value as a number 
         // corners takes two value ( round / square ) for converting corner of box to round or square
         // type takes ( info / success / warning / error ) value with special styles for rach of them
         // image is picture url which take place in left side of box
         // and you can put your text or html in InfoBox tags to shows in box 

         <InfoBox 
          type="error" 
          closeBtn="show" 
          padding="35" 
          corners="round" 
          image="https://logosvector.net/wp-content/uploads/2013/06/volkswagen-auto-vector-logo-200x200.png" 
         >
              <p>The goal of InfoBox is make it easier for developers to build UIs that have beautiful box elements. </p>
              <a href="#" >Learn More</a>

         </InfoBox>
     
  );
}

export default App;
