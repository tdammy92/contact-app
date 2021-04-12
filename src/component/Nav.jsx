import React from 'react'
import { Link } from 'react-router-dom'
import {Typography,AppBar , CssBaseline ,  Toolbar   } from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';
import useStyles from '../Style'




 function Nav() {

    const classes = useStyles();
// // function SearchTerm (e){

// //         e.preventDefaulta()

// //         const {data:contact, isLoading , error} = useFetch(`http://localhost:5000/contacts?q=${serch}`)


// // }

        
    return (

             <>
             <CssBaseline/>
                <AppBar  position="relative">
                    <Toolbar  className="Nav-group">

                            <Link  to="/">
                                <Toolbar>
                                    <ContactPhoneIcon  className={classes.icon}/>  
                                    <Typography  variant="h5" align="center"> Home </Typography>
                                </Toolbar>
                            </Link>

                           
                            <Link  to="/about"> 
                                <Toolbar>
                                    <InfoIcon  className={classes.icon}/> 
                                    <Typography variant="h5" align="center"> About </Typography>
                                 </Toolbar>
                            </Link>
                    </Toolbar>
                        

                </AppBar>

            </>
    )
}


export default Nav;