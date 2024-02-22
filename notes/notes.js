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


++ IconButton:
- We can have icons as a button
*Props:
? 1 - aria-label: Connect the button to a function
? 2 - color
? 3 - disableElevation: For disabling the shadow
? 4 - disableRipple: For disabling the effect
? 5 - onClick 


++ Stack:
? 1 - direction: We can choose that the direction of the div element that the 
? 2 - spacing : Works as same as the padding
? 3 - justifyContent
? 4 - margin 


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


++ InputAdornment: 
*Props:
? 1 - position : start , end

++ Radio:
*Props:
? 1 - value : Better be a static and manually value
? 2 - onChange : Will be set on the state setter
? 3 - checked : We can have a function which choose when the radio button should be checked

++ RadioGroup: Used for many Radio options and not one
*Props:
? 1 - name
? 2 - onChange
? 3 - value
? 4 - aria-labelledby
? 5 - row

++ FormControl : Used for form sections

++ FormLabel : Label of the FormControl

++ FormControlLabel : Used for every radio button label we have
*Props:
? 1 - value
? 2 - control : Choose how we want to control this FormLabel (with which component?)
? 3 - label 


++ Checkbox:
*Props:
? 1 - checked
? 2 - onChange

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

++ Switch:
*Props:
? 1 - checked
? 2 - onChange

++ Rating:
*Props:
? 1 - value
? 2 - precision  : value is a number
? 3 - icon 
? 4 - emptyIcon
? 5 - onChange
? 6 - multiple 
? 7 - fullWidth
!HINT: We can change the select mode to multiple select by an handle function on onChange

 */
