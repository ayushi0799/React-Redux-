import React from 'react'
import Data from './Data.json'
import {withRouter, useLocation , Link, useHistory} from "react-router-dom"
import { Redirect } from 'react-router';
import ReactDOM from "react-dom";




function DetailsPage(props) {
    console.warn(props)
    const id= props.match.params.id
   console.log(id)

   
    return (
        <>
       
        <div className="details">
            
                <div className="Detailbox">
                    <div className="container">
                        <p className="Head"> {Data[id-1].bot}</p> 
                        <p>{Data[id-1].description}</p>
                    </div>
              
                    <div className="Data">
                    <div className="Head1">
                        Index Value
                    </div>
                   <div>{Data[id-1]['index-value']}</div> 
                    
                    </div>
                    <div className="Data"> <div  className="Head1">
                        CAGR
                    </div>{Data[id-1].cagr}</div>

               
                </div>
            
           
        </div>
        </>
    )
}

export default withRouter( DetailsPage)
