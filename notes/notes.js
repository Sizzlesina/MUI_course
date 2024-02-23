/** @format */

{/* prettier-ignore */}

/*
  @ Material ui installation:
   ! Link: https://mui.com/material-ui/getting-started/installation/
 
   @ Components:
 
    ++ Typography:
   - This component is used for text fields
  *Props:
    ? 1 - variant: We can choose the element styles
    ++ Example:
   <Typography variant="h1">
      Sina
    </Typography>
   ! variant values : h1 , h2 , h3 , h4 , h5 , h6 , body1 (default value) , body2 , caption
 
    ? 2 - component: We can choose the itself
    ++ Example:
    <Typography variant="h1" component="h2">
     Sina
    </Typography>
    ! HINT: This is a h2 element with h1 styles
 
   ? 3 - gutter: Work as same as the margin
    ++ Example:
    <Typography variant="h1" gutterBottom>
      Sina
   </Typography>
    <Typography variant="h2">
      Sina 2
    </Typography>
 
    ? 4 - color: We can choose the color of the element
   ! All the color prop values: https://mui.com/material-ui/customization/default-theme/
 
 
    ++ All about the Typography component: https://mui.com/material-ui/customization/typography/
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ++ Button:
   - This component is used for buttons (as the name of it says)
 
*Props:
 ? 1 - variant: text , contained , outlined
  ? 2 - size: small , large and etc.
  ? 3 - color : As same as before
  ? 4 - href : We can add href to the buttons
 
! All the material ui palletes : https://mui.com/material-ui/customization/palette/


++ Material ui icons:
!Link: https://mui.com/material-ui/material-icons/

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ IconButton:
- We can have icons as a button
*Props:
? 1 - aria-label: Connect the button to a function
? 2 - color
? 3 - disableElevation: For disabling the shadow
? 4 - disableRipple: For disabling the effect
? 5 - onClick 

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


++ TextField:
*Props:
? 1 - label 
? 2 - variant : outlined , standard , filled
? 3 - required
? 4 - size
? 5 - helperText : The text that help us know the textField better
? 6 - color 
? 7 - inputProps{{}} : startAdornment or endAdornment 
? 8 - error  : Used to handle a error (We can handle it using state and this prop) 
? 9 - onChange : The value of the TextField stored in the setState
? 10 - value : The state 

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ InputAdornment: 
*Props:
? 1 - position : start , end
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ Radio:
*Props:
? 1 - value : Better be a static and manually value
? 2 - onChange : Will be set on the state setter
? 3 - checked : We can have a function which choose when the radio button should be checked
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ RadioGroup: Used for many Radio options and not one
*Props:
? 1 - name
? 2 - onChange
? 3 - value
? 4 - aria-labelledby
? 5 - row
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ FormControl : Used for form sections
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ FormLabel : Label of the FormControl
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ FormControlLabel : Used for every radio button label we have
*Props:
? 1 - value
? 2 - control : Choose how we want to control this FormLabel (with which component?)
? 3 - label 
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


++ Checkbox:
*Props:
? 1 - checked
? 2 - onChange
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ FormGroup: We can have so many FormLabel's inside the FormGroup
*Props:
? 1 - row

! In the read world form applications we do this to checkboxes:
1 - create a state
2 - add a checked prop to every checkbox 
3 - the value of the checked prop is : 
@ state.includes("value of the checkbox")
4 - add a onChange prop to every checkbox
5 - the value of the onChange prop is a handler function that we wrote earlier
@ The handler function:
++ Example:
const handleCheckbox = (e) => {
  const index = state.indexOf(e.target.value);
  if (index === -1 ) {
    setState([...state, e.target.value])
  } else{
    setState(state.filter((i) => i !== e.target.value))
  }
}
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ Switch:
*Props:
? 1 - checked
? 2 - onChange
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ Rating:
*Props:
? 1 - value
? 2 - precision  : value is a number
? 3 - icon 
? 4 - emptyIcon
? 5 - onChange

!HINT: We can change the select mode to multiple select by an handle function on onChange
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ Select:
*Props:
? 1 - multiple 
? 2 - fullWidth (Can add to all the components)
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ AutoComplete:
*Props:
? 1 - freeSolo
? 2 - options
? 3 - renderInput (check the component example)
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@ Layouts in Material UI:

++ Box:
*Props:
? 1 - component
? 2 - sx: Which is a object and we can pass in styles in it like {backgroundColor: "primary.main"}
!HINT: We can add hover styles to the box component with this syntax :
sx={{"&:hover":backgroundColor:"secondary.main"}}
? 3 - bgColor
? 4 - m: This prop is the margin shorthand
!All about this component: https://mui.com/material-ui/react-box
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Stack:
? 1 - direction: We can choose that the direction of the div element that the 
? 2 - spacing : Works as same as the padding
? 3 - justifyContent
? 4 - margin 
? 5 - sx
? 6 - divider: This prop will get am divider component

++ Divider:
*Props:
? 1 - orientation : horizontal or vertical
? 2 - flexItem

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   ++ Container:
   *Props:
   ? 1 - maxWidth : xl , lg , md , sm , xs
   ? 2 - fixed : The minWidth of the container will automatically changes
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Grid: 
@ - The grid layout system in MUI is a powerful and flexible way to create responsive and consistent grid-based designs in React applications

@ - It uses CSS's flexible Box module for high flexibility

@ - There are two types of layout props : containers and items

* Responsive behavior:
@ - There are five grid breakpoints : xs , sm , md , lg and xl

@ - default values: 
xs : extra small: 0px
sm : small : 600px
md : medium : 900px
lg : large : 1200px
xl : extra large : 1536px

@ - Grid system is based on a 12-column layout

@ - Spacing and additional features

* Props:
? 1 - container
? 2 - xs , md , lg , xl , sm : These are the breakpoints and the columns that the grid item will get 
? 3 - item
? 4 - spacing
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Responsive layout:
- We can use breakpoints and implement different styles or different bahavior of the element in the breakpoints 

*Props:
? xs , sm , md , lg , md

!HINT: When we want to use breakpoints inside the sx prop we can open an curly brace and then write the value of the styles in every breakpoint
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Card:
- This component is a card conatiner and we can use other components inside this component

++ CardContent: 
- This component is for every content we can use inside the card component

++ CardActions:
- This component is used for every action we need inside our card like Button

++ CardMedia:
- We use this component whenever we want to use an image or an media into our card
*Props:
? 1 - image: The src of the image
? 2 - component : In the examples component we set the component type to image
? 3 - alt : Using for image as same as the HTML img
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 */
