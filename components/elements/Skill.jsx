import React from 'react'

const Skill = ({icons,title}) => {
  return (
    <aside className='flex items-center cursor-default group'>
        <span className='text-4xl duration-150 group-hover:text-teal-600'>{icons}</span>
        <p className='text-xl duration-150 group-hover:text-teal-600'>{title}</p>
    </aside>
  )
}

export default Skill