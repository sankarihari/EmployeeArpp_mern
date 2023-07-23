import React from 'react'

const Main = () => {
  return (
    <div>
        <Header/>
        {props.child}
        <Footer/>
    </div>
  )
}

export default Main