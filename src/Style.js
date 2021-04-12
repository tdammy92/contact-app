import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({

            container:{

                backgroundColor: theme.palette.background.paper,
                padding:theme.spacing(8,0,6)

            },

            icon:{
                marginRight:"5px",
                fontSize: "30px"
            },

            card:{
                padding:"5px 0",
                height:"100%",
                display:"flex",
                flexDirection:"row"

            } ,
            cardImage:{
               
                width:"50%"                  
            },

            userIcon:{
                color: "#3f51b5",
                fontSize:"100px"
            },



            cardContent:{
                flexGrow:1,
            },

            Loader: {
        

                textAlign:"center",
                justifyContent:'center'
              },



}) )


export default useStyles;