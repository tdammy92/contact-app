import { Typography , Container } from '@material-ui/core';
import React from 'react'

function About() {
    return (
        <>

            <Container maxWidth="sm">
                        <Typography variant="h4"  align="center" color="textPrimary" gutterBottom> Welcome to Contact App</Typography>
                    
                        <Typography variant="subtitle1"  align="center" color="textPrimary" paragraph>
                                             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Typography>
            </Container>
                
                  
        </>
    )
}

export default About;
