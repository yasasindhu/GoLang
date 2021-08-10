import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import clsx from "clsx";

const useStyles = makeStyles({
	root: {
		width: '330px',
		height: '308px',
		margin: "20px 30px 20px 60px",
	},
	root2: {
		width: '398px',
		maxHeight: '90px',
		marginBottom: '10px',
        // padding : '1.5%',
		padding: "10px",
        borderRadius : '10px',
        '&:hover':{
			borderColor:'#5ac568',
		},
		boxShadow: '0px 0px 5px #ccc',
	},
	isActive:{
		border: "1px solid #5ac568",
	},
	logoPadding: {
		//padding: "5% 3% 3% 5%",
		paddingLeft:'7%',
		paddingTop:'7%',
		paddingRight:'3%',
		paddingBottom:'3%'
	},
	header: {
		 display: "flex",
		 justifyContent: "space-between",
		 alignItems: "center",
		 objectFit:'contain',
	},
	spacing: {
		// display: "flex",
        // width : '65px',
		// paddingRight: "1%",
		// justifyContent: "space-around",
		color:'#5f7381',
		//flexGrow: '0',
		display: 'flex',
		flexDirection: 'row',
		//justifyContent: 'flex-spacearound',
		//paddingRight:"7%",
		//alignItems: 'center',
		gap: '10px',
        fontSize: '12px',
        fontWeight: '500',
       // paddingLeft:'30px',
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
    iconGrp : {
        display : 'inline-flex',
        flexDirection : 'row',
		justifyContent: 'flexStart',
  		alignItems: 'center',
		paddingTop:'3%',
         gap : '8px'
    },
    roleTypoHeader : {
        fontSize : '18px',
        fontWeight : '600',
        color : '#324552',
        lineHeight : 1.33,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.2px'
    },
    companyamountTypoHeader : {
        fontSize : '16px',
        fontWeight : 'normal',
        color : '#5f7381',
        lineHeight : 1.57,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.1px',
        paddingTop : '2%'
    },

    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '20px'
    },
	moreIconPadding :{
		color : '#5f7381',
	}

});

export default function JobCard({
	job, isActive, renderPages
}) {
	// const isActive = job.isActive,
	const id = job.id
	const logo = job.logo
	const currency = job.currency
	const status = job.status
	const amount = job.amount
	const classes = useStyles()
	const CurrencyType=job.CurrencyType

	const handleChangeForCard = () =>{
		
	}
	
		return (
                // <div data-testid = "maindivinjobcardsmall">
                	 <ThemeProvider theme={customtheme}>
				<Card variant="outlined" className= {clsx(classes.root2, {[classes.isActive]: isActive})} data-testid = "cardinjobcardsmall" onClick = { handleChangeForCard }>

						<Grid container data-testid = "maingridinjobcardsmall">
							<Grid item xs={1} data-testid = "firstgridinjobcardsmall">
								<MyImage alt={logo} src={logo} width="44px" height="44px" data-testid = "myimageinjobcardsmall"/>
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding} data-testid = "secondgridinjobcardsmall">
								<Typography gutterBottom variant="h3" data-testid = "currencyinjobcardsmall">
									{currency}
								</Typography>

								<Typography
									className={` ${classes.companyamountTypoHeader} ${classes.padding} `}
									data-testid = "statusinjobcardsmall"
								>
									{status}
								</Typography>
								
							</Grid>
                            {/* <Grid item xs={1} data-testid = "thirdgridinjobcardsmall"></Grid> */}
							<Grid item xs={2} className={classes.inCol} data-testid = "fourthgridinjobcardsmall"  alignItems='center'>
								<div className={classes.spacing} data-testid = "innergridinjobcardsmall">
									<Typography  className={classes.spacing} data-testid = "2dinjobcardsmall">
										{amount}
									</Typography>
									<Typography  className={classes.spacing} data-testid = "2dinjobcardsmall">
										{CurrencyType}
									</Typography>
									{/* <MoreHorizIcon fontSize="small" /> */}
								</div>
							</Grid>
						</Grid>
				
				</Card>
                </ThemeProvider>
			// </div>
		);
	}