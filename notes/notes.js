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
? 6 - edge: This takes two values => start , end
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
++ Accordion:
- This component is like a container and we can use other Accordion components inside this component
*Props:
? 1 - disabled


++ AccordionSummary:
- This component is like a header to the accordion and when the user click on this part the other parts show up
*Props:
? 1 - expandIcon: We can have an expand icon for when the accordion got opened and got closed


++ AccordionDetails:
- This component is the details that will show up after the user clicked on the AccordionSummary 
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ AppBar:
- This component is like a header container which we can have all our header items in it (This component will use other components inside of itself)
*Props:
? 1 - position: By default the position is relative but we can change the position to static which then position the content we write below the component visible 

? 2 - color

++ Toolbar:
- For implementing the header items we can use this component
!HINT: when we dont have this component in the AppBar our items wont be sorted
*Props:
? 1 - sx
(Read the documentation for other props in the Toolbar)
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@ Theming:
- Customization in MUI refers to the ability to modify the styles, behavior and appearance of individual components to fit specific design requirements

- Customization is often done on a component level, tailoring specific components to match the desired look and behavior 

- Theming in MUI refers to the ability to create a consistent visual design across the entire application by defining a set of global styles and settings

@ In summary:
Customization in MUI focuses on modifying and extending individual components, while theming is about creating a consistent visual design by defining global styles and settings for the entire application while theming allows for a broader , system-wide-design customization

++ Customization:
- Material UI provides several different ways to customize components styles:
@ One-off-customization
@ Reusable component
@ Global theme overrides
@ Global CSS override


++ Theming:
- Theme let you apply a consistent tone to your app.

- It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.

- If you wish to customize the theme, you need to use the ThemeProvider

- The following sections cover the most important theme variables:
@ .paletter
@ .typography
@ .spacing
@ .breakpoints
@ .zIndex
@ .transitions
@ .components

! All the document we need for this section: https://mui.com/material-ui/customization/how-to-customize/

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Theming in MUI:
- Using "createTheme" and "ThemeProvider"

++ createThem:
- In a variable we can store all the theme we need 
++ Example:
const theme = createTheme({
   palette:{
      primary:{
         main : red[500]
      }
   }
})

@ This then creates a theme which in it the primary color is red

++ ThemeProvider
- Whenever we want to use the theme we will wrap up that part into an ThemeProvider and it needs a theme prop so as the value of this theme prop we give it the variable we made earlier which contains all the theme
++ Example:
<ThemeProvider theme={theme}>
<Typography variant="h1" color={"primary"}>Hello World!</Typography>
</ThemeProvider>

@ We can add new values for a prop in MUI:
++ Example:
const theme = createTheme({
   palette:{
      color1:{
         main: green[500]
      }
   }
})
function theming(){
   <ThemeProvider theme={theme}>
   <Typography variant="h1" color="color1.main">Hello World!</Typography>
   </ThemeProvider>
}

! This then creates a new value for color prop 
!HINT: Remember that because we create the value manually we cant type just "color1" and we must write "color1.main"

! All the default values for theme: https://mui.com/material-ui/customization/default-theme/
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ DarkMode:
- In the palette inside the theme variable we must add a property which is mode:"dark"

- Then below the ThemeProvider we must add a <CssBaseline /> to have the darkMode

!HINT: Using the state and two different themes we can change between lightTheme and darkTheme
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ Styled Utility:
- We can use the "styled" function and as same as styled components create new components with favorite styles
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
++ State management in MUI:
@ In the first video:
- Simple state management in React by using useState
@ In the second video:
- Created a simple form component using the states
@ In the third video: 
- Form validation with MUI and React
@ In the fourth video:
- Creating a Header component and move between routes
@ In the fifth video:
- Creating the TablePage component and introduce new MUI components:
++ TableContainer:
- This component is the container of the Table component
++ Table:
- This component is holds the TableHeader and TableBody inside of it
++ TableHead:
- This is the header of the table
++ TableBody:
- This is the body of the table
++ TableRow:
- We have some TableRows which contains some TableCell
++ TableCell:
- This is the cells of the table

@ In the sixth video:
- Handling the errors and loading 
++ CircularProgress:
- This component is used for loading pages
++ Alert:
- This component is used for errors
*Props:
? 1 - severity : the value of this prop better be error
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

++ Creating a single page website using MUI:
@ In the first video:
- Create a Login form page
@ In the second video:
- We want to talk about a new component which exists in the previous videos but we never talked about it:
++ Paper:
- This component is have a paper style (as the name says)
*Props:
? 1 - elevation
? 2 - square

@ In the third video:
- Create the HomePage 
@ In the fourth video:
- Add some stylings to the HomePage
 */
