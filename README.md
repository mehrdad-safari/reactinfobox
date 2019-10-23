# React InfoBox Component 
InfoBox is an isolated fully customizable Reactjs component that you can easily drop it in your project and just call it in every where you want, now you have a beautiful UI box

## Screenshot

![screenshot](https://github.com/mehrdad-safari/reactinfobox/blob/master/public/screenshot3.png)


## How To Install
you cant test it by downloading project and get in the main folder and run this commands:

```
npm install
npm start
open http://localhost:3000
```
or you can add (InfoBox) folder from components of project to your project and after importing it call it like :

```
import InfoBox from './components/InfoBox/InfoBox'
 
<InfoBox {props}>
your Html
</InfoBox>

```

Props :

```
 <InfoBox
 type="error"     // type takes ( info / success / warning / error ) values with special styles for each of them
 closeBtn="show"  // closeBtn if equal to (show) it is adding close button in the corner of the box
 padding="35"     // padding for padding all things in the box. this take a value as a number 
 corners="round"  // corners takes two value ( round / square ) for converting corner of box to round or square
 image="https://yoururl/image.png"  
  >
      
 
```
 
## App React Features:
* react v16.9
* react hooks
* ES 6
* Full Documented


## ES6 Specific Features:

* Arrow functions
* ES6 classes
* Destructuring assignment
 

##  To Do Features
* Testing with Jest
* Adding Online Demo

