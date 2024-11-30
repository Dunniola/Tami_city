import React from 'react'
import { currencyFormat } from '../../utils/Helpers'

const WalletCard = ({ symbol, amount, name}) => {
  return (
    <>
    <div className='bg-primary rounded-xl p-5 text-white w-full max-md:py-8 lg:h-[200px] lg:w-[300px]'>
        <div className='flex flex-col gap-10'>
            <h4 className=''>{name}</h4>

        <h2 className='text-xl font-semibold'>{ currencyFormat(symbol,amount)}</h2>
        </div>
        
    </div>
    </>
  )
}

export default WalletCard