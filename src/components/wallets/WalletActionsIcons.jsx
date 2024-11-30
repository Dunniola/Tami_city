import React from 'react'

const WalletActionsIcons = ({ icon, text, handleOpen }) => {
  return (
    <div className="flex flex-col items-center w-[100px]" onClick={handleOpen}>
      <div className="h-10 w-10 bg-primary border-2 border-primary rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      <p>{text}</p>
    </div>
  )
}

export default WalletActionsIcons