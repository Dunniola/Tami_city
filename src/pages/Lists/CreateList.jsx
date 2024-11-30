import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import Sidebar from '../../components/General/Sidebar';
import { useDataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading/Loading';

export default function CreateList({ listType = 'email' }) {
  const [listName, setListName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading ,setLoading] = useState(false);
  const { postRequest } = useDataContext();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'text/csv') {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Please upload a CSV file.');
      }
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!listName.trim()) {
      setError('Please enter a list name.');
      return;
    }
    if (!file) {
      setError('Please upload a CSV file.');
      return;
    }
    // Here you would typically send the data to your backend
    setLoading(true);
    var formdata = new FormData();
    formdata.append("list_name", listName);
    formdata.append("csv_file", file);

    let url;

    if (listType === "email") {
      url = "email-lists"
    }else{
      url = "phone-lists"
    }

    const result = await postRequest(url, formdata);
    if (result.status === 'success') {
      setListName('');
      setFile(null);
      toast.success("List Created Successfully")
      navigate('/all-lists');
    }

    setLoading(false);
    // Reset form after submission
  };

  return (
 <Sidebar>
  {loading && <Loading/>}
       <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Create {listType} list</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="listName" className="block text-sm font-medium text-gray-700 mb-1">
            List Name
          </label>
          <input
            type="text"
            id="listName"
            value={listName}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter list name"
            required
          />
        </div>

        <div>
          <label htmlFor="csvFile" className="block text-sm font-medium text-gray-700 mb-1">
            Upload CSV File
          </label>
          <div className="mt-1 mb-4 p-4 bg-gray-50 border border-gray-300 rounded-md">
            <h3 className="text-sm font-semibold mb-2">CSV File Structure:</h3>
            <p className="text-sm text-gray-600">
              Your CSV file should contain a single column with either {listType === 'email' ? 'email addresses' : 'phone numbers'}, one per line. Do not include a header row.
            </p>
            <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
              {listType === 'email' ? 'example@email.com\nanother@email.com' : '+1234567890\n+9876543210'}
            </pre>
          </div>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="csvFile" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">CSV file only</p>
              </div>
              <input
                id="csvFile"
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
          {file && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {file.name}
            </p>
          )}
        </div>

        {error && (
          <div className="flex items-center p-4 text-red-800 rounded-lg bg-red-50">
            <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Create List
        </button>
      </form>
    </div>
 </Sidebar>
  );
}
