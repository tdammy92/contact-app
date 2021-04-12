import Home from "./component/Home"
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Nav from './component/Nav'
import About from './component/About'
import {CssBaseline , Container  } from '@material-ui/core';







function App() {

  

  return(
  
    <>
            <CssBaseline/>
            <Router>
                    <Nav/>
                    <main>
                              <Container>
                                  
                                  
                                  <Switch>

                                        <Route exact path="/" >
                                            <Home/>
                                        </Route>
                                        <Route  path="/about" >
                                            <About/>
                                        </Route>  

                                  </Switch>
                                  </Container>
                    </main>
            </Router>
    </>
  )
 

}

export default App;
