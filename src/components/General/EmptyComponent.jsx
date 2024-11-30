import { Plus } from 'lucide-react'
import React from 'react'

const EmptyComponent = ({ component, handleClick, text1, text2, buttonText }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full mx-4">
      <div className="flex justify-center mb-6">
        <div className="bg-blue-100 rounded-full p-3">
          {component}
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{text1}</h2>
      <p className="text-gray-600 mb-8">
        {text2}
      </p>
      <button
        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        onClick={handleClick ? () => handleClick() : null}
      >
        <Plus className="h-5 w-5 mr-2" />
        {buttonText}
      </button>
    </div>
  </div>
  )
}

export default EmptyComponent