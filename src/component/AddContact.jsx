 import React , {useState} from "react";
 import {useForm} from "react-hook-form";
 import {Button, Toolbar  , Container, CssBaseline, Typography} from '@material-ui/core'
 import useStyles from '../Style'
 import HighlightOffIcon from '@material-ui/icons/HighlightOff';
 import PersonAddIcon from '@material-ui/icons/PersonAdd';

 function AddContact() {

    const classes = useStyles();


    const [showAdd, setShowAdd] = useState(false)
   
    const {register , handleSubmit , formState: {errors}} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
      });



   

    function handleAddBtn(){
            setShowAdd(!showAdd)
    }



     function submit(data){
        
         fetch('http://localhost:5000/contacts',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'content-type': 'application/json'}
            }

        )
      console.log(data)

      window.location.replace('/')
    
    }

     return ( 
         <div>
        

         {showAdd && 

                 <Container  className={classes.container} component="main">
                            <CssBaseline/>
                            <form className={classes.container} onSubmit={handleSubmit(submit)} className="from-group">
                                   
                                    <HighlightOffIcon  className='form-close' onClick={handleAddBtn} />
                                    
                                    <Typography  variant='h6' color='primary'> Add New Contact </Typography>
                            
                                   


                              
                                    <input type="text" className='from-group-input' variant='outlined' margin='normal' placeholder="Contact Name" {...register('name', {required:true})} />
                                    {errors.name && <small  style={{color:"red"}}>please enter name</small>} 
                                
                                    
                                    
                                    <input type="text" className='from-group-input' name="phone"  placeholder="Contact Phone Number"  {...register('phone', {required:true})}/>
                                    {errors.phone && <small style={{color:"red"}}>Please enter number</small>}
                            
                            


                            
                                    <input type="text" className='from-group-input' name="address"  placeholder="Contact Address"  {...register('address')}/> 
                                   
                            


                                    <Toolbar>
                                                <Button  type="submit" variant="contained" color="primary">
                                                        Add Contact
                                                </Button>
                                    </Toolbar>
                                

                                

                            </form>
                </Container>
           

            }

           
                     <div className='form-open-button'>
                        {  showAdd ? '' :  
                                <Button variant="contained"    onClick={handleAddBtn}  style={showAdd ? {backgroundColor:'',color:'white'} : {backgroundColor:'#3f51b5', color:'white'}} >
                                            {showAdd ? "" : <div><PersonAddIcon/> Add Contact</div> }                
                                </Button>
                         } 

                     </div>
            
          
         </div>
     )
 }



 export default AddContact;