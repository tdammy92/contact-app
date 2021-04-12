import React from 'react'
import {Typography , Card , CardActions , CardContent , CardMedia , CssBaseline , Grid  , Button  } from '@material-ui/core';
import useStyles from '../Style'

import AccountBoxIcon from '@material-ui/icons/AccountBox';


function ContactCard(props) {

    const classes = useStyles();

    const {name , phone , address , id} =  props.item;


    function HandleDelete(id) {
        
        console.log(id)
        fetch(`http://localhost:5000/contacts/${id}`, {
          method: 'DELETE'
        })

        window.location.replace('/')  
    }

    
    return (

        <>

                 <CssBaseline/>
                <Grid item xs={12} md={4} sm={6} >
                    <Card  className={classes.card}>
                        <CardMedia className={classes.cardImge}>
                                    <AccountBoxIcon  className={classes.userIcon}/>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                                    <Typography variant="h5">{name}</Typography>
                                    <Typography variant="subtitle1" gutterBottom>{phone}</Typography>
                                    <Typography variant="subtitle2" gutterBottom>{address}</Typography>
                        
                                    <CardActions  color="primary">
                                        <Button size='small' variant='outlined' color="primary" >Edit</Button>
                                        <Button size='small' variant='contained' color="primary" onClick={()=>(HandleDelete(id))} >Delete </Button>
                                    </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
        </>
    )
}

export default ContactCard;
