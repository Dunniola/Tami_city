import React from 'react'
import HorizontalBlogCard from '../cards/HorizontalBlogCard'

const DataList = ({ data }) => {
  return (
    <>
    <div className='flex flex-col gap-6'>
    {
      data?.map((i) => (
        <HorizontalBlogCard data={i}/>
      ))
    }
    </div>
    </>
  )
}

export default DataList