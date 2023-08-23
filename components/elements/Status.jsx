import React from 'react'

const Status = ({status}) => {
  const style = () =>{
    let variants
    if(status === "beginner"){return variants = "bg-teal-600"}
    if(status === "intermediate"){return variants = "bg-yellow-500"}
    if(status === "advance"){return variants = "bg-red-600"}
  }
  const variants = style()
  return (
    <p className={`px-8 rounded-lg text-white ${variants}`}>
      {status === "beginner" ? "Beginner" :null }
      {status === "intermediate" ? "Intermediate" :null }
      {status === "advance" ? "Advance" :null }
    </p>
  )
}

export default Status