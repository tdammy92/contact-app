import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ContactCard from './ContactCard'



function ContactList({contact , title}) {

   
  
  
    return ( 
        <>

                 <Container maxWidth="md">
                        <Grid container spacing={4}>

                            {contact.map((item =>{   

                                return <ContactCard key={item.id} item={item}/>  

                            }))}

                        </Grid>

                </Container>
            

        </>
    )
}

export default ContactList;