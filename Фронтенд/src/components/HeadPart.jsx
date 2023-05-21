import React from 'react'

function HeadPart(props) {
    console.log(props);
  return (
    <header>
        <h1>{props.data_props.h1}</h1>
    </header>
  )
}

export default HeadPart