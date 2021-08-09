import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../theme";
import { Typography  } from "@material-ui/core";


const Mybutton = ({variant,text,color}) => {
  console.log({color});
  return (
    <ThemeProvider theme={customtheme}>
      <Button variant={variant} color={color}>
        {text}
      </Button>
     
    </ThemeProvider>
  );
};



export default Mybutton;