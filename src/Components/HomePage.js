import React from 'react'
import Data from './Data.json'
import {Link, BrowserRouter as Router, Route, useHistory, Switch} from "react-router-dom"
import DetailsPage from './DetailsPage'





function HomePage({value,up}) {
    
   
    
    return (
        <div>
            <div className="Secondheader">
                <p className="Dashboard">Dashboard</p>
                <p>Cart- {value}</p>
            </div>
            <div className="Desc">
                <p>Select the best suited algo for your needs</p> 
            </div>
          
            {Data.map((item)=>
           
            <div className="tradingbots">
                <div className="botname">
                    {item.bot}
                </div>
                <div className="indexvalue">Index Value <br />
                    {item['index-value']}
                </div>
                <div className="cagr">CAGR <br />
                    {item.cagr}
                </div>
                <div className="buttons">
                    <Router>
                       
                        <Link to={"/bots-details/"+(item.id)}> <button>See Algo
                            </button> </Link>
                            
                    <Switch>
                    <Route exact path="/bots-details/:id" component={DetailsPage} ></Route>
                    
                    </Switch>
                    
                    </Router>
                    <button onClick={up}>
                    Buy
                    </button>
                    
                </div>
                
            </div>
             )}
        </div>
    )
}

export default HomePage
