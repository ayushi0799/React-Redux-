import React from 'react'
import {connect} from 'react-redux'
import HomePage from './HomePage'



const stateToPropertiesMapper=state=>{
    return{
        value: state.value
    }
}
const dispatcherToPropertiesMapper= dispatcher=>{
    return{
        up:()=>{
            dispatcher({
                type:'Counter_up'
            })
        }
    }
}

const ConterContainer=connect (stateToPropertiesMapper,dispatcherToPropertiesMapper)(HomePage)
export default ConterContainer