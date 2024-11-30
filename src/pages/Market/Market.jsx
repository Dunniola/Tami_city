import { Instagram, Twitter, Youtube, Facebook, DollarSign, Eye } from 'lucide-react'
import Sidebar from '../../components/General/Sidebar'

const influencers = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "https://lionize.ai/wp-content/uploads/2024/08/how-to-hire-a-content-creator-near-me-1024x683.webp",
    startingPrice: 500,
    avgImpressions: 50000,
    instagram: "alex_johnson",
    twitter: "alexj",
    youtube: "alexjohnson",
    facebook: "alexjohnsonofficial"
  },
  {
    id: 2,
    name: "Samantha Lee",
    image: "https://media.licdn.com/dms/image/D4E12AQFSvMKY8ySmGw/article-cover_image-shrink_720_1280/0/1658181412810?e=2147483647&v=beta&t=vSYORgFHS2NtETzDLk__n85OqIXLaoD9UzmNozM-uug",
    startingPrice: 750,
    avgImpressions: 75000,
    instagram: "samlee",
    twitter: "samanthalee",
    youtube: "samanthaleebeauty",
    facebook: "samanthaleeofficial"
  },
  {
    id: 3,
    name: "Mike Chen",
    image: "https://cdn.pixabay.com/photo/2023/12/20/03/42/man-8458826_1280.jpg",
    startingPrice: 1000,
    avgImpressions: 100000,
    instagram: "mikechen_eats",
    twitter: "mikecheneats",
    youtube: "strictlydumpling",
    facebook: "mikecheneats"
  },
  {
    id: 4,
    name: "Emma Watson",
    image: "https://media.licdn.com/dms/image/D5612AQEope3tpW_P_g/article-cover_image-shrink_720_1280/0/1673541617256?e=2147483647&v=beta&t=iOVlV9XHr4UapJPZPRbT4JSKWYf9hepMeXx468WFl4g",
    startingPrice: 2000,
    avgImpressions: 200000,
    instagram: "emmawatson",
    twitter: "emmawatson",
    youtube: "emmawatsonofficial",
    facebook: "emmawatson"
  },
  {
    id: 5,
    name: "David Kim",
    image: "https://img.freepik.com/fotos-premium/gente-sonriendo-ngeles_910608-7078.jpg",
    startingPrice: 300,
    avgImpressions: 30000,
    instagram: "davidkim_fit",
    twitter: "davidkimfitness",
    youtube: "davidkimfitness",
    facebook: "davidkimfitness"
  },
  {
    id: 6,
    name: "Lisa Nguyen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMdgUZb8iMjJ73Vl9ie5zq86xd3m65DhEdg&s",
    startingPrice: 600,
    avgImpressions: 60000,
    instagram: "lisanguyen_travel",
    twitter: "lisanguyentravel",
    youtube: "lisanguyentravels",
    facebook: "lisanguyentravelofficial"
  }
]

export default function Market() {
  return (
  <>
  <Sidebar>
  <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Influencer Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={influencer.image} 
              alt={influencer.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{influencer.name}</h2>
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 text-green-500 mr-1" />
                <span className="font-medium">Starting from ${influencer.startingPrice}</span>
              </div>
              <div className="flex items-center mb-4">
                <Eye className="h-5 w-5 text-blue-500 mr-1" />
                <span>{influencer.avgImpressions.toLocaleString()} avg. impressions</span>
              </div>
              <div className="flex space-x-4">
                <a href={`https://instagram.com/${influencer.instagram}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={`https://twitter.com/${influencer.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href={`https://youtube.com/${influencer.youtube}`} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href={`https://facebook.com/${influencer.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Sidebar>
  </>
  )
}