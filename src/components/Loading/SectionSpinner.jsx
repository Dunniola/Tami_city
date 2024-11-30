import { Spinner } from '@chakra-ui/react'
import React from 'react'

const SectionSpinner = () => {
  return (
    <div className=" h-[200px] flex justify-center items-center">
    <Spinner
      className="text-tetiary"
      size={"lg"}
      thickness='3px'
    
    />
  </div>
  )
}

export default SectionSpinner