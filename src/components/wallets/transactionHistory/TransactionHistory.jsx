import React from "react";
import DataTable from "react-data-table-component";
import { useAuthContext } from "../../../context/AuthContext";
import TransactionHistoryIcons from "../TransactionHistoryIcons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { currencyFormat, formatDateToEnglish } from "../../../utils/Helpers";

const TransactionHistory = ({ activeTab, data, totalRows, handlePageChange }) => {
  const { user } = useAuthContext();
  const columns = [
    {
      name: "Transactions",
      width: "250px",
      selector: (row) => (
        <div className="flex items-center gap-3 h-[80px]">
          <div>
            {row?.type == 'debit' ? (
              <TransactionHistoryIcons icon={<AiOutlineMinus />} />
            ) : (
              <TransactionHistoryIcons icon={<AiOutlinePlus />} />
            )}
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-500">
              {row?.type}
            </h4>
            <p>{formatDateToEnglish(row?.created_at)}</p>
          </div>
        </div>
      ),
    },
    {
      name: "description",
      selector: (row) =>row?.description,
      sortable: true,
      // width: "170px",
    },
    {
      name: "amount",
      // width: "150px",
      selector: (row) =>
        currencyFormat("N",
          parseFloat(row?.amount)
        ),
      sortable: true,
    },

    {
      name: "status",
      // width: "120px",
      selector: (row) => (
        <div className="px-4 py-2 rounded-full bg-green-100">
            <p className="text-green-600 font-semibold">successful</p>
        </div>
        
      ),
    },
  ];

  const headerStyle = {
    fontWeight: "bold", // Apply bold font weight
    fontSize: "16px",
    color: "gray",
  };

  if (activeTab === "transaction_history")
    return (
      <>
        <div className="table-data">
          <DataTable
            columns={columns}
            data={data ? data : null}
            customStyles={{
              headRow: {
                style: headerStyle,
              },
            }}
            highlightOnHover
            pagination 
            paginationServer
            // paginationRowsPerPageOptions
             paginationTotalRows={totalRows}
             onChangePage={handlePageChange}
          />
        </div>
      </>
    );
};

export default TransactionHistory;
