import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import Sidebar from '../../components/General/Sidebar'

export default function ListTypes() {
  return (
  <Sidebar>
      <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Choose List Type</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link to="/all-lists/create-email-list" className="group">
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Mail className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Email List</h2>
              <p className="text-gray-600">
                Create a list for email campaigns. Perfect for newsletters, promotions, and customer engagement.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/all-lists/create-phone-list" className="group">
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-4 mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Phone className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Phone List</h2>
              <p className="text-gray-600">
                Create a list for SMS or call campaigns. Ideal for time-sensitive notifications and direct communication.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </Sidebar>
  )
}