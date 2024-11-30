import Sidebar from '../../components/General/Sidebar'
import { useState } from 'react'
import { Images, Video, Mail, MessageSquare, Users, TrendingUp, Search } from 'lucide-react'
import { Link } from 'react-router-dom'


const Advertise = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const campaignTypes = [
      {
        title: "Banner/Sponsored Stories",
        icon: Images,
        color: "bg-[#17775c]", // Spotify Green
        link: "banners"
      },
      {
        title: "Video Campaign",
        icon: Video,
        color: "bg-[#2D46B9]", // Spotify Blue
        link: "video"
      },
      {
        title: "Bulk Email Campaign",
        icon: Mail,
        color: "bg-[#9B51E0]", // Spotify Purple
        link: "bulk-emails"
      },
      {
        title: "Bulk SMS Campaign",
        icon: MessageSquare,
        color: "bg-[#F2994A]", // Spotify Orange/Amber
        link: "https://example.com/bulk-sms-campaign"
      },
      {
        title: "Influencer Marketing",
        icon: Users,
        color: "bg-[#E91E63]", // Spotify Pinkish Red
        link: "/marketplace"
      },
      {
        title: "Platform Boosting",
        icon: TrendingUp,
        color: "bg-[#FFC107]", // Spotify Yellow
        link: "https://example.com/platform-boosting"
      }
    ];
    
      

  const filteredCampaigns = campaignTypes.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <>
    <Sidebar>
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search campaign types..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCampaigns.map((campaign, index) => (
          <Link to={campaign.link} key={index} className={`${campaign.color} rounded-lg shadow-md overflow-hidden h-[150px] hover:opacity-80 hover:scale-105 transition-all duration-500`}>
            <div className="flex flex-col items-center justify-center p-6">
              <campaign.icon className="h-10 w-10 text-white mb-4" />
              <h3 className=" font-semibold text-white text-center">{campaign.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {filteredCampaigns.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No campaign types found matching your search.</p>
      )}
    </div>
        
    </Sidebar>
    </>
  )
}

export default Advertise