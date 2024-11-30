import React from 'react'
import { currencyFormat } from '../../utils/Helpers'
import { MdLocationPin } from 'react-icons/md'
import { FaHome, FaMapSigns } from 'react-icons/fa'

// const images = [
//   "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
//   "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww",
//   "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",

// ]
const ListingCard = ({ data }) => {
  return (
    <>
    <a href="#" class="block rounded-lg bg-white p-4 shadow-sm shadow-indigo-100">
  <img
    alt=""
    src={`${import.meta.env.VITE_FULL_URL}/${import.meta.env.VITE_IMAGE_URL}/${data?.image}`}
    class="h-56 w-full rounded-md object-cover"
  />

  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">Price</dt>

        <dd class="text-sm text-gray-500">{currencyFormat('N', data?.price)}</dd> 
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium">{data?.address}</dd>
      </div>
    </dl>

    <div class="mt-6 flex items-center gap-8 text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <MdLocationPin size={20}/>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">{data?.state?.name}</p>

          <p class="font-medium">{data?.lga?.name}</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

      <FaMapSigns size={20} />

        <div class="mt-1.5 sm:mt-0">
        <p class="text-gray-500">purchase type</p>
          <p class="font-medium capitalize">{data?.rent_or_buy}</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <FaHome size={20} />

        <div class="mt-1.5 sm:mt-0">
        <p class="text-gray-500">property type</p>
          <p class="font-medium capitalize">{data?.property_type}</p>
        </div>
      </div>
    </div>
  </div>
</a>
    </>
  )
}

export default ListingCard