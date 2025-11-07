import React from 'react'
import Section2Cards from './Section2Cards'

const Section2 = (props) => {
  return (
    <div className='flex items-center justify-center gap-2'>
        {props.cards.map(function(elem){
            return <Section2Cards Name={elem.Name} price={elem.price} quality={elem.quality} bgcolor={elem.bgcolor}/>
        })}
    </div>
  )
}

export default Section2