import { createTheme } from "@material-ui/core/styles";
import '../constants.css';
const customtheme = createTheme({
  palette: {
    primary: {
      main: "#0052FF",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#9bbdcb",
      contrastText: "#9bbdcb",
    },
  },

  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h1: 'h1',
  //       h2: 'h1',
  //       h3: 'h1',
  //       h4: 'h1',
  //       h5: 'h1',
  //       h6: 'h1',
  //       subtitle1: 'h2',
  //       subtitle2: 'h2',
  //       body1: 'span',
  //     }
  //   },
  overrides:{

   

    MuiRadio: {
      root: {
        padding: 6
      }
    },
    MuiButton: {
      root: {
          textTransform: 'none'
      }
    },
    MuiTypography:{
      body1:{
       
      fontSize: '2rem',
      color: 'red',
    }
    
    },
  
    MuiStepLabel:{
      label:{
        "&$completed":{
          color: "#5ac568",
          fontWeight: "bold"
        },
        "&$active":{
          color: "#5ac568",
          fontWeight: "bold"
        },
      },
    },
    MuiSvgIcon:{
      root:{
        width: '1.5em',
        eight: '1.5em',
      },
    },
    MuiTypography:{
      body1:{
        fontFamily: "Graphik",
        fontWeight: "bolder",
      },
      body2:{
        fontFamily: "Graphik",
        fontWeight: "bolder",
      },
    },
    MuiStepConnector:{
      root:{
        flex:"0.05",
      },
    },
    MuiInputBase : {
      root : {
        width : '500px',
        //height : '60px'
      }
    },
    MuiTab : {
      root : {
          '@media (min-width: 600px)': {
              height: '48px',
              minWidth : '48px'
          },
          borderBottomColor : '#0000ff'
      },
      textColorInherit : {
          '&$selected': {
              backgroundColor:  '#5ac568',
              color : 'white',
              borderBottomColor : '#0000ff',
              '&:hover' : {
                  backgroundColor: '#5ac568'
              }	
          }
      }
    },
    MuiBox : {
      root : {
          padding : '0px 24px 24px 0px',
        }
    },
    MuiButtonBase : {
      root : {
          borderRadius : '50%',
          borderBottomColor : '#0000ff'
      }
    },
    MuiPaper : {
      root : {
          variant : 'elevation',
          elevation0 : 0
      } 
    },
    MuiAppBar : {
      colorTransparent : {
          boxShadow : 'none'
      }
    },
    // MuiSvgIcon:{
    //   root: {
    //     padding: "0px 0px 0px 20px"
    //   }
    // },
    PrivateTabIndicator : {
      colorSecondary : {
          backgroundColor : 'transparent'
      }
    },
    
  },
  typography: {
    fontFamily: 'Graphik',
    subtitle1:{
      fontFamily: 'Graphik',
      fontSize: '16px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: '0.1px',
    },
    body2:{
      fontFamily: 'Graphik',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.57,
      letterSpacing: '0.1px',
    },
    body3:{
      fontFamily: 'Graphik',
      fontSize: '10000px',
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.31,
      letterSpacing: '0.1px',
      color:'#19293b'
    },
    caption:{
      fontFamily: 'Graphik',
      fontSize: '12px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.33,
      letterSpacing: '0.2px',
    },

    h1:{
      //paragraph
      fontFamily : 'Graphik',
        color : '#5f7381',
        fontSize : '14px',
        lineHeight : 1.57,
        letterSpacing : '0.1px',
        textAlign:'left',
        fontWeight:'normal',
    },
    h2:{
      //headers
      fontFamily : 'Graphik',
      color : '#19293b',
      fontSize : '16px',
      lineHeight : 1.5,
      letterSpacing : '0.1px',
      fontWeight:'500',
    },
  
    h3: {
        fontSize : '18px',
        fontFamily : 'Graphik',
        fontWeight : '500',
        color : '#324552',
        lineHeight : 1.33,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.2px'
    },
    h4:{
        fontFamily : 'Graphik',
        color : '#5f7381',
        fontSize : '12px',
        lineHeight : 1.33,
        letterSpacing : '0.2px',
        textAlign:'left',
    },
    h5: {
      fontFamily : 'Graphik',
      fontSize : '12px',
      fontWeight : 500,
      color : '#19293b',
      lineHeight : 1.33,
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing : '0.2px',
      paddingTop : '7%'  
    },
    h6:{
      fontSize : '14px',
      fontWeight : 'normal',
      color : '#5f7381',
      lineHeight : 1.57,
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing : '0.1px',
      paddingTop : '2%'
    },
    overline:{
      fontSize : '18px',
      fontWeight : '500',
      color : '#5ac568',
      textTransform: 'none',
      fontFamily : 'Graphik',
      gap:'100px',
    },
  },
  TrainOutlinedIcon: {
  },
  Dialog:{
    root:{
      width: '625px',
      height: '426px',
    }
  },
  Checkbox:{
    root:{
      width: '10px',
      height: '10px',
    }
  },
  CloseIcon:{
    root:{
      width: '24px',
      height: '24px',
    }
  },
  // Radio:{
    // root:{
    //   color: '#00ff00',
    // '&$checked': {
    //   color: green[600],
    // },
    // }
  // }


});

export default customtheme;







// import { createTheme } from "@material-ui/core/styles";
// import '../constants.css';
// const customtheme = createTheme({
//   palette: {
//     primary: {
//       main: "#5ac568",
//       contrastText: "#fafafa",
//     },
//     secondary: {
//       main: "#9bbdcb",
//       contrastText: "#9bbdcb",
//     },
//   },

//   // props: {
//   //   MuiTypography: {
//   //     variantMapping: {
//   //       h1: 'h1',
//   //       h2: 'h1',
//   //       h3: 'h1',
//   //       h4: 'h1',
//   //       h5: 'h1',
//   //       h6: 'h1',
//   //       subtitle1: 'h2',
//   //       subtitle2: 'h2',
//   //       body1: 'span',
//   //     }
//   //   },
//   overrides:{

   

//     MuiRadio: {
//       root: {
//         padding: 6
//       }
//     },
//     MuiButton: {
//       root: {
//           textTransform: 'none'
//       }
//     },
//     MuiTypography:{
//       body1:{
       
//       fontSize: '2rem',
//       color: 'red',
//     }
    
//     },
  
//     MuiStepLabel:{
//       label:{
//         "&$completed":{
//           color: "#5ac568",
//           fontWeight: "bold"
//         },
//         "&$active":{
//           color: "#5ac568",
//           fontWeight: "bold"
//         },
//       },
//     },
//     MuiSvgIcon:{
//       root:{
//         width: '1.5em',
//         eight: '1.5em',
//       },
//     },
//     MuiTypography:{
//       body1:{
//         fontFamily: "Graphik",
//         fontWeight: "bolder",
//       },
//       body2:{
//         fontFamily: "Graphik",
//         fontWeight: "bolder",
//       },
//     },
//     MuiStepConnector:{
//       root:{
//         flex:"0.05",
//       },
//     },
//     MuiInputBase : {
//       root : {
//         width : '500px',
//         //height : '60px'
//       }
//     },
//     MuiTab : {
//       root : {
//           '@media (min-width: 600px)': {
//               height: '48px',
//               minWidth : '48px'
//           },
//           borderBottomColor : '#0000ff'
//       },
//       textColorInherit : {
//           '&$selected': {
//               backgroundColor:  '#5ac568',
//               color : 'white',
//               borderBottomColor : '#0000ff',
//               '&:hover' : {
//                   backgroundColor: '#5ac568'
//               }	
//           }
//       }
//     },
//     MuiBox : {
//       root : {
//           padding : '0px 24px 24px 0px',
//         }
//     },
//     MuiButtonBase : {
//       root : {
//           borderRadius : '50%',
//           borderBottomColor : '#0000ff'
//       }
//     },
//     MuiPaper : {
//       root : {
//           variant : 'elevation',
//           elevation0 : 0
//       } 
//     },
//     MuiAppBar : {
//       colorTransparent : {
//           boxShadow : 'none'
//       }
//     },
//     // MuiSvgIcon:{
//     //   root: {
//     //     padding: "0px 0px 0px 20px"
//     //   }
//     // },
//     PrivateTabIndicator : {
//       colorSecondary : {
//           backgroundColor : 'transparent'
//       }
//     },
    
//   },
//   typography: {
//     fontFamily: 'Graphik',
//     subtitle1:{
//       fontFamily: 'Graphik',
//       fontSize: '16px',
//       fontWeight: 500,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.5,
//       letterSpacing: '0.1px',
//     },
//     body2:{
//       fontFamily: 'Graphik',
//       fontSize: '14px',
//       fontWeight: 'normal',
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.57,
//       letterSpacing: '0.1px',
//     },
//     body3:{
//       fontFamily: 'Graphik',
//       fontSize: '10000px',
//       fontWeight: 600,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.31,
//       letterSpacing: '0.1px',
//       color:'#19293b'
//     },
//     caption:{
//       fontFamily: 'Graphik',
//       fontSize: '12px',
//       fontWeight: 500,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.33,
//       letterSpacing: '0.2px',
//     },

//     h1:{
//       //paragraph
//       fontFamily : 'Graphik',
//         color : '#5f7381',
//         fontSize : '14px',
//         lineHeight : 1.57,
//         letterSpacing : '0.1px',
//         textAlign:'left',
//         fontWeight:'normal',
//     },
//     h2:{
//       //headers
//       fontFamily : 'Graphik',
//       color : '#19293b',
//       fontSize : '16px',
//       lineHeight : 1.5,
//       letterSpacing : '0.1px',
//       fontWeight:'500',
//     },
  
//     h3: {
//         fontSize : '18px',
//         fontFamily : 'Graphik',
//         fontWeight : '500',
//         color : '#324552',
//         lineHeight : 1.33,
//         fontStretch: 'normal',
//         fontStyle: 'normal',
//         letterSpacing : '0.2px'
//     },
//     h4:{
//         fontFamily : 'Graphik',
//         color : '#5f7381',
//         fontSize : '12px',
//         lineHeight : 1.33,
//         letterSpacing : '0.2px',
//         textAlign:'left',
//     },
//     h5: {
//       fontFamily : 'Graphik',
//       fontSize : '12px',
//       fontWeight : 500,
//       color : '#19293b',
//       lineHeight : 1.33,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       letterSpacing : '0.2px',
//       paddingTop : '7%'  
//     },
//     h6:{
//       fontSize : '14px',
//       fontWeight : 'normal',
//       color : '#5f7381',
//       lineHeight : 1.57,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       letterSpacing : '0.1px',
//       paddingTop : '2%'
//     },
//     overline:{
//       fontSize : '18px',
//       fontWeight : '500',
//       color : '#5ac568',
//       textTransform: 'none',
//       fontFamily : 'Graphik',
//       gap:'100px',
//     },
//   },
//   TrainOutlinedIcon: {
//   },
//   Dialog:{
//     root:{
//       width: '625px',
//       height: '426px',
//     }
//   },
//   Checkbox:{
//     root:{
//       width: '10px',
//       height: '10px',
//     }
//   },
//   CloseIcon:{
//     root:{
//       width: '24px',
//       height: '24px',
//     }
//   },
//   // Radio:{
//     // root:{
//     //   color: '#00ff00',
//     // '&$checked': {
//     //   color: green[600],
//     // },
//     // }
//   // }


// });

// export default customtheme;


