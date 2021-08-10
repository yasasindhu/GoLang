import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, Fade, ListItemAvatar, Menu, MenuItem, Typography } from "@material-ui/core";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import MyImage from '../../atoms/MyImage/MyImage';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import customtheme from "../../theme";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AvatarIcon from '../../../../public/images/Rectangle 5.png';

export default function ProfileItem(){

    const useStyles = makeStyles((theme) => ({
        root: {
            display : 'inline-flex',
            paddingLeft:'600px'
        },
        arrowIcon : {
          //  paddingLeft : '2%',
           // paddingRight : '20px'
        },
        subtitle22: {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.29,
            letterSpacing: '0.1px',
            
        },
        iconStyle:{        
            width: '24px',
            height: '24px',  
        },
        imageIcon: {
            width:'40px',
            height:'40px'
        }
    }));

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
        <ThemeProvider theme={ customtheme}>
        <div className={classes.root} data-testid = "divinprofileitem">
            <ListItem data-testid = "listiteminprofileitem">
               
                <ListItemAvatar data-testid = "avatarinprofileitem">
                    <MyImage 
                        style = {{ width: '40px', height: '40px'}}
                        src={AvatarIcon}
                        height="40px"
                        width="40px"
                        alt="PROFILE IMAGE"
                        data-testid = "myimageinprofileitem"
                    />
                </ListItemAvatar>
                <ListItemText data-testid = "textinprofileitem">
                    <Typography className = { classes.subtitle22 } style = {{ color: '#19293b'}} data-testid = "sareinprofileitem">Lucas Smith</Typography>
                </ListItemText>
                <ListItemIcon className={classes.arrowIcon} data-testid = "itemiconinprofileitem">
                    {/* <KeyboardArrowDownIcon className = {clsx(classes.iconStyle)} style = {{ color: '#19293b'}} data-testid = "keyinprofileitem"/> */}

                    <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                        <ExpandMoreOutlinedIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </ListItemIcon>
            </ListItem>
        </div>
        </ThemeProvider>
    );
}