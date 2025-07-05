import React from 'react'

const Wrapper = ({children,color= "green"}) => {
  return (
    <div style={{color:"red", border:"5px solid blue", width:"300px"}}>
      {children}
      
    </div>
  )
}

export default Wrapper
