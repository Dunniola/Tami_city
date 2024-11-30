import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import EmptyComponent from "../../components/General/EmptyComponent";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import NoListModal from "../../components/modals/NoListModal";
import { useDisclosure } from "@chakra-ui/react";
import Loading from "../../components/Loading/Loading";
import toast from "react-hot-toast";
import { useEffect } from "react";
import {
  Mail,
  Calendar,
  Users,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { formatDateToEnglish } from "../../utils/Helpers";
import Button from "../../components/General/Button";

const BulkEmails = ({ nav=true}) => {
  const { getRequest } = useDataContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const checkLists = async () => {
    setLoading(true);
    const result = await getRequest(`email-lists-check`);
    if (result.status === "success") {
      if (result.data < 1) {
        onOpen();
      } else {
        navigate("/advertise/create-bulk-email");
      }
    } else {
      toast.error("Error Occured");
    }
    setLoading(false);
  };

  const getBulkMails = async () => {
    setLoading(true);
    const result = await getRequest(`bulk-emails`);
    if (result.status === "success") {
      setData(result.data);
    } else {
      toast.error("Unable to get bulk emails");
    }
    setLoading(false);
  };

  useEffect(() => {
    getBulkMails();
  }, []);
  

  return (
    <>
      {loading && <Loading />}
      <NoListModal isOpen={isOpen} onClose={onClose} />
      <Sidebar nav={nav}>
        {!data || data?.length < 1 ? (
          <EmptyComponent
            component={<Mail className="h-12 w-12 text-primary" />}
            text1={"No Email Campaigns Yet"}
            text2={
              "Create your first email campaign and start engaging with your audience today!"
            }
            buttonText={"Create New Campaign"}
            handleClick={() => checkLists()}
          />
        ) : (
          <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Bulk Emails Sent
              </h1>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search emails..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <button onClick={() => checkLists()} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      New Bulk Email
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
                              Subject
                        
                            
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                              List Name
                      
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      
                              Email Count
                             
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    
                              Sent Date
                             
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            
                              Status
                          
                       
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data?.map((email) => (
                          <tr key={email?.id} className="hover:bg-gray-50" onClick={() => navigate(email?.id)}>
                            <td className="px-6 py-4 whitespace-nowrap" >
                              <div className="flex items-center">
                                <Mail className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {email?.subject}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {email?.listName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Users className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" />
                                <div className="text-sm text-gray-900">
                                  {email?.emailCount.toLocaleString()}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Calendar className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" />
                                <div className="text-sm text-gray-900">
                                  {formatDateToEnglish(email?.created_at)}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800`}
                              >
                                Sent
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Button text={"View Details"} type={"primary"} onClick={() => navigate(`${email?.id}`)}/>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Sidebar>
    </>
  );
};

export default BulkEmails;
