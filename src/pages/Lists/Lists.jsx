import { useState } from "react";
import {
  Mail,
  Phone,
  MoreVertical,
  Trash,
  Edit2,
  List,
  Plus,
} from "lucide-react";
import Sidebar from "../../components/General/Sidebar";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Lists = () => {
  const { getRequest } = useDataContext();
  const [activeTab, setActiveTab] = useState("email");
  const [emailLists, setEmailLists] = useState([]);
  const [phoneLists, setPhoneLists] = useState();
 const [emailLoading, setEmailLoading] = useState(false);
 const [phoneLoading, setPhoneLoading] = useState(false);

  const handleDelete = (listId) => {
    if (activeTab === "email") {
      setEmailLists(emailLists.filter((list) => list?.id !== listId));
    } else {
      setPhoneLists(phoneLists.filter((list) => list?.id !== listId));
    }
  };

  const handleEdit = (listId) => {
    console.log(`Edit list with id: ${listId}`);
    // Implement edit functionality here
  };

  const handleFetchMailList = async () => {
    setEmailLoading(true);
    const result = await getRequest(`email-lists`);
    if (result.status === "success") {
      setEmailLists(result.data);
    }else{
      toast.error("Can't fetch email lists")
    }
    setEmailLoading(false);
  };
  const handleFetchPhoneList = async () => {
    setPhoneLoading(true);
    const result = await getRequest(`phone-lists`);
    if (result.status === "success") {
      setPhoneLists(result.data);
    }else{
      toast.error("Can't fetch phone lists")
    }
    setPhoneLoading(false);
  };

  useEffect(() => {
   handleFetchMailList()
   handleFetchPhoneList();
  }, [])
  

  const ListItem = ({ list }) => (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-3">
          <List className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold">{list?.list_name}</h3>
            <p className="text-gray-600 flex items-center mt-1">
              <Mail className="h-4 w-4 mr-1 text-gray-400" />
              {list?.itemCount} items
            </p>
          </div>
        </div>
        <div className="relative group">
          <MoreVertical className="h-5 w-5 text-gray-400 cursor-pointer" />
          <div className="absolute top-2 right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
            <div className="py-1">
              <button
                onClick={() => handleEdit(list?.id)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <Edit2 className="h-4 w-4 mr-2" /> Edit
              </button>
              <button
                onClick={() => handleDelete(list?.id)}
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
              >
                <Trash className="h-4 w-4 mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Sidebar>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Manage Lists</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="flex">
            <button
              className={`flex items-center px-6 py-3 rounded-tl-md rounded-bl-md font-medium ${
                activeTab === "email"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("email")}
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Lists
            </button>
            <button
              className={`flex items-center px-6 py-3 rounded-tr-md rounded-br-md font-medium ${
                activeTab === "phone"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Phone Lists
            </button>
          </div>
          <Link to="create-list">
            <button className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:opacity-70 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Create New List
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === "email"
            ? emailLists.map((list) => <ListItem key={list?.id} list={list} />)
            : phoneLists.map((list) => <ListItem key={list?.id} list={list} />)}
        </div>

        {(activeTab === "email" ? emailLists : phoneLists).length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No lists available. Create a new list to get started.
            </p>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default Lists;
