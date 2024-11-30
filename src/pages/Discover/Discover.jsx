import React, { useState, useEffect } from 'react'
import Navbar from '../../components/General/Navbar'
import Footer from '../../components/General/Footer'
import { useNavigate } from 'react-router-dom';
import DataList from '../../components/General/DataList';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from '../../components/General/Loading';
// import { categories } from '../../utils/Helpers';
import { useDataContext } from '../../context/DataContext';

const Discover = () => {
  const { getRequest } = useDataContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || ""; // Retrieves the value of the 'q' parameter
  const date = queryParams.get("date") || "";
  const category = queryParams.get("category") || "";

  const getData = (query, date) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/catalog?q=${query}&date=${date}&category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   navigate(`/discover?q=${query}&date=latest`);
  // }, []);

  useEffect(() => {
    getData(query, date);
  }, [query, date, category]);

  const handleDate = (e) => {
    navigate(`/discover?q=${query}&date=${e.target.id}&category=${category}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchKey = document.getElementById('search_text').value;
    navigate(`/discover?q=${searchKey}&date=${date}&category=${category}`);
  }

  const handleCategory = (e) => {
    navigate(`/discover?q=${query}&date=${date}&category=${e.target.value}`);
  }

  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    const result = await getRequest(`categories`);
    if (result.status === "success") {
      setCategories(result.data);
    }
    else{
      toast.error("Error getting Categories");
    }
  };

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
    {loading && <Loading/>}
    <Navbar/>
    <div className='py-20 px-4 lg:px-10 bg-gray-100'>
      <div className='max-w-screen-xl px-4 lg:px-10 mx-auto bg-tetiary py-5 flex max-md:flex-col items-center justify-between'>
          <div className='relative'>
              <BiSearchAlt2 className='absolute left-3 top-3'/>
              <form onSubmit={handleSearch}>
                <input id="search_text" type="text" placeholder='Search...' className='bg-white rouneded-lg py-2 lg:w-[400px] px-8' />
              </form>
          </div>
            <div className='flex items-center gap-6'>
              <div>
                <select onChange={handleCategory} name="" id="" className='py-3 bg-transparent outline-none'>
                  <option selected disabled>Select Category</option>
                  <option value="">All</option>
                  {
                    categories?.map((i) => (
                      <option value={i?.name}>{i?.name}</option>
                    ))
                  }
                </select>
              </div>
              <ul className='flex gap-3 items-center'>
                <li id='latest' onClick={handleDate} className={`${date === 'latest' && 'border-b-4 border-primary'} cursor-pointer`}>Latest</li>
                <li id='oldest' onClick={handleDate} className={`${date === 'oldest' && 'border-b-4 border-primary'} cursor-pointer`}>Oldest</li>
              </ul>
              
            </div>

      </div>

      <div className='max-w-screen-xl mx-auto pt-10'>
          <DataList data={blogs}/>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Discover