import React, { useEffect, useState } from "react";
import Button from "../../components/General/Button";
import { MdAddCircle } from "react-icons/md";
import DataTable from "react-data-table-component";
import { useDataContext } from "../../context/DataContext";
import { FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import SectionSpinner from "../../components/Loading/SectionSpinner";
import Topbar from "../../components/General/Topbar";
import AddPropertyModal from "../../components/modals/AddPropertyModal";
import { currencyFormat } from "../../utils/Helpers";

const AllListings = () => {
  const { getRequest, refetchHelp } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const getData = async () => {
    setLoading(true);
    const result = await getRequest(`get-listings`);

    if (result.status === "success") {
      setData(result.data);
      setTableData(result.data);
    } else {
      toast.error("Error getting Listings");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [refetchHelp]);

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectItem = (obj) => {
    setSelectedItem(obj);
    handleOpenModal();
  };
  const handleAdd = () => {
    setSelectedItem(null);
    handleOpenModal();
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <>
          <div className="h-[100px] w-[100px] rounded">
            <img
              src={`${import.meta.env.VITE_FULL_URL}/${
                import.meta.env.VITE_IMAGE_URL
              }/${row.image}`}
              alt=""
              className="h-full w-full object-cover rounded"
            />
          </div>
        </>
      ),
      // sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      // sortable: true,
    },
    {
      name: "Property Type",
      selector: (row) => row.property_type,
      sortable: true,
    },
    {
      name: "Rent Or Buy",
      selector: (row) => row.rent_or_buy,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => <>{currencyFormat("N", row.price)}</>,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      selector: (row) => (
        <Button
          text={"View"}
          icon={<FaEye />}
          onClick={() => handleSelectItem(row)}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <AddPropertyModal
        isOpen={modal}
        onClose={handleCloseModal}
        selectedProperty={selectedItem}
      />
      <Topbar>
        <div className="w-full lg:px-10 px-4 py-2">
          <div className="mt-10">
            <div className="mb-4">
              <h4 className="text-gray-600 text-xl font-bold">Listings</h4>
              <p className="text-sm text-gray-500">
                list of available properties
              </p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Search for Properties..."
                className="py-2 px-4 w-full border border-gray-400 rounded-lg"
              />
            </div>

            <div className="w-[200px] mb-8">
              <Button
                text={"Add Listing"}
                icon={<MdAddCircle size={20} className="text-white" />}
                onClick={handleAdd}
              />
            </div>

            <div className="p-3 bg-white border border-gray-400 rounded-lg relative">
              <div className="absolute h-full w-full bg-secondary top-3 z-[-1] rounded-lg"></div>
              
              {tableData ? (
                <DataTable columns={columns} data={tableData && tableData} pagination />
              ) : (
                <SectionSpinner />
              )}
            </div>
          </div>
        </div>
      </Topbar>
    </>
  );
};

export default AllListings;
