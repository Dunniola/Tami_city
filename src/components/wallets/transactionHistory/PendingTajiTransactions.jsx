import React from "react";
import DataTable from "react-data-table-component";
import TransactionHistoryIcons from "../TransactionHistoryIcons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { currencyFormat, formatDateToEnglish } from "../../../utils/Helpers";
const PendingTajiTransactions = ({ activeTab, data }) => {
  const columns = [
    {
      name: "Transactions",
      selector: (row) => (
        <div className="flex items-center gap-3 h-[80px]">
          <div>
            <TransactionHistoryIcons icon={<GiTakeMyMoney />} />
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-500">
              Taji Deposit
            </h4>
            <p>{formatDateToEnglish(row.created_at)}</p>
          </div>
        </div>
      ),
    },
    {
      name: "amount",
      selector: (row) =>
        currencyFormat(
          row?.currency == "naira"
            ? "N"
            : row?.currency == "tajiri"
            ? "TAJI"
            : "$",
          parseFloat(row.price)
        ),
      sortable: true,
    },

    {
      name: "status",
      selector: (row) => (
        <div className="px-4 py-2 rounded-full bg-yellow-100">
          <p className="text-yellow-600 font-semibold">{row.status}</p>
        </div>
      ),
    },
  ];

  const headerStyle = {
    fontWeight: "bold", // Apply bold font weight
    fontSize: "16px",
    color: "gray",
  };
  if (activeTab === "pending_taji_transactions")
    return (
      <>
        <div className="table-data">
          <DataTable
            columns={columns}
            data={data && data}
            customStyles={{
              headRow: {
                style: headerStyle,
              },
            }}
            highlightOnHover
          />
        </div>
      </>
    );
};

export default PendingTajiTransactions;
