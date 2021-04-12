import React from 'react'
import useFetch from "./hooks/useFetch"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from '../Style';


function Home() {

  const classes = useStyles();
    const {data:contact, isLoading , error} = useFetch('http://localhost:5000/contacts')
 

    // <form >
    // <input type="text" name="search" id=""  placeholder="Search Contact"/>
    // </form>


 return (
   <div className="App">
 
         <AddContact />
         {error && <h3 style={{textAlign:"center", color:"red"}}>{error}</h3>}
         {isLoading &&  <div className={classes.Loader}> <LinearProgress /></div>}
         {contact && <ContactList contact={contact}/>}
 
   </div>
 )

}



export default Home;

