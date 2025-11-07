import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Card = (props) => {
  return (
    <div className='bg-purple-50 h-230 w-350 p-10 rounded-4xl flex flex-col gap-1'>
        <Section1 />
        <Section2 cards={props.cards}/>
    </div>
  )
}

export default Card