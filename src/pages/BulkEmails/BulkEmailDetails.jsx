import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import EmptyComponent from "../../components/General/EmptyComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  ArrowLeft,
} from "lucide-react";
import { formatDateToEnglishTime } from "../../utils/Helpers";

const BulkEmailDetails = () => {
    const { id } = useParams();
  const { getRequest } = useDataContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState(null);
  const [bulkMail, setBulkMail] = useState(null);
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
    const result = await getRequest(`bulk-emails/${id}`);
    if (result.status === "success") {
      setData(result.emails);
      setBulkMail(result.bulkMail);
    } else {
      toast.error("Unable to get bulk email details");
    }
    setLoading(false);
  };

  useEffect(() => {
    getBulkMails();
  }, []);

  const statusColours = {
    success: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
  }

  return (
    <>
      {loading && <Loading />}
      <NoListModal isOpen={isOpen} onClose={onClose} />
      <Sidebar>
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
                Bulk Emails Details
              </h1>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <Link to={-1}  className="relative flex items-center gap-3 hover:scale-105 cursor-pointer">
                      <ArrowLeft/> Back
                    </Link>
                    {/* <button onClick={() => checkLists()} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      New Bulk Email
                    </button> */}
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
                              Email
                        
                            
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
                          <tr key={email?.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Mail className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {email?.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {email?.sendDate ? formatDateToEnglishTime(email?.sendDate) : 'NULL'}
                              </div>
                            </td>
                           
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColours[email?.sendingStatus]}`}
                              >
                                {email?.sendingStatus}
                              </span>
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

export default BulkEmailDetails;
