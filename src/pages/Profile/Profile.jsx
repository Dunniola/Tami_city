import { useState } from 'react'
import { User, Mail, Phone, Copy, Check } from 'lucide-react'
import { useAuthContext } from '../../context/AuthContext'
import Sidebar from '../../components/General/Sidebar';

export default function Profile() {
  const [copied, setCopied] = useState(false)
  const { user } = useAuthContext();
  console.log(user);
  const referralCode = user?.referral_code;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
   <>
   <Sidebar>
   <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Profile Settings</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900">{user?.name || "mboard user"}</h2>
                <p className="text-sm text-gray-500">Member since 2023</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{user?.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Referral Code</h3>
              <div className="flex items-center justify-between bg-white border border-gray-300 rounded-md p-3">
                <span className="text-2xl font-bold text-blue-600">{referralCode}</span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center h-8 w-8 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Copy className="h-5 w-5 text-blue-600" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Share this code with friends to earn rewards!
              </p>
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Sidebar>
   </>
  )
}