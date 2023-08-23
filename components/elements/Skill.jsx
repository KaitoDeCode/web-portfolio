import React from 'react'

const Skill = ({icons,title}) => {
  return (
    <aside className='flex items-center cursor-default group'>
        <span className='text-4xl duration-150 group-hover:text-teal-600 dark:text-slate-400 md:text-4xl'>{icons}</span>
        <p className='text-xl duration-150 group-hover:text-teal-600 dark:text-slate-400 md:text-2xl'>{title}</p>
    </aside>
  )
}

export default Skill