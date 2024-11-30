import React from 'react'

const TransactionHistoryIcons = ({ icon}) => {
  return (
    <div className="flex flex-col items-center" >
      <div className={`h-10 w-10 bg-blue-100  rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300`}>
        {icon}
      </div>
    </div>
  )
}

export default TransactionHistoryIcons