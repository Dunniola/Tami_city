import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import WalletCard from "../../components/cards/WalletCard";
import WalletActionsIcons from "../../components/wallets/WalletActionsIcons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { MdOutlineChangeCircle } from "react-icons/md";
import AllCurrenciesDepositModal from "../../components/modals/AllCurrenciesDepositModal";
import { useDataContext } from "../../context/DataContext";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import TransactionHistory from "../../components/wallets/transactionHistory/TransactionHistory";
import PendingTajiTransactions from "../../components/wallets/transactionHistory/PendingTajiTransactions";
import Sidebar from '../../components/General/Sidebar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  spaceBetweenSlides: 10
};

const Wallet = () => {
  useEffect(() => {
    document.title = "Wallet";
  }, []);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("activeTab");
  const navigate = useNavigate();

  const [depositModal, setDepositModal] = useState(false);
  const handleOpenDepositModal = () => setDepositModal(true);
  const handleCloseDepositModal = () => setDepositModal(false);
  const { user } = useAuthContext();
  const { getRequest, refetchHelp } = useDataContext();
  const [loading, setLoading] = useState(false);
  const [walletInfo, setWalletInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getWalletInfo = async () => {
    setLoading(true);
    getRequest(`wallets`).then((result) => {
      if (result.status === 'success') {
        setWalletInfo(result.data);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error("Could not get wallet information");
      }
    });

  };

  const getTransactions = (page=1) => {
    getRequest(`transactions?page=${page}`).then((result) => {
      if (result.status === 'success') {
        setTransactions(result.data.data);
        console.log(result.data.data);
        // setLoading(false);
      } else {
        // setLoading(false);
        toast.error("Could not get transactions information");
      }
    });
  }

  useEffect(() => {
    getWalletInfo();
    getTransactions();
  }, [refetchHelp]);

  const handlePageChange = page => {
    getTransactions(page);
  };

  useEffect(() => {
    navigate("/wallet?activeTab=transaction_history");
  }, []);

  return (
    <>
      {loading && <Loading />}
      <AllCurrenciesDepositModal
        isOpen={depositModal}
        onClose={handleCloseDepositModal}
      />
      <Sidebar>
        <div className="lg:px-[50px] lg:py-20 py-10">
          <div className="max-md:hidden">
            {/* <div className="flex justify-center items-center ">
              <div id="uploader__image--card">
                <img
                  id="uploader__image"
                  src={`${import.meta.env.VITE_FULL_URL}/${
                    import.meta.env.VITE_IMAGE_URL
                  }/${user?.businessLogo}`}
                  alt
                />
              </div>
            </div> */}

            <div className="">
              <WalletCard
                symbol={`N`}
                amount={parseFloat(walletInfo?.balance)}
                name={`Naira Wallet`}
              />
            </div>
            {/* <div className="flex justify-center items-center ">
              <WalletCard symbol={`$`} amount={300000} name={`Dollar Wallet`} />
            </div>
            <div className="flex justify-center items-center ">
              <WalletCard
                symbol={`TAJI`}
                amount={parseFloat(walletInfo?.tajiri_wallet?.balance)}
                name={`Tajiri Wallet`}
              />
            </div> */}
            {/* uploader image card is actual css i borrowed sorry */}
          </div>
                  {/* mobile wallet cards with slider */}
          <div className="mobile lg:hidden">
            <h1 className="text-center text-2xl mb-6 font-semibold">Wallets</h1>
              <div className="px-4">
                <WalletCard
                  symbol={`N`}
                  amount={parseFloat(walletInfo?.balance)}
                  name={`Naira Wallet`}
                />
              </div>
          
          </div>

          {/* section for the withdraw icon etc */}
          <div className="grid grid-cols-2 mt-10 lg:grid-cols-4 max-w-screen-md mx-auto mb-8">
            <div className="flex justify-center items-center ">
              <WalletActionsIcons
                text={"Deposit"}
                icon={<AiOutlinePlus className="text-white" />}
                handleOpen={handleOpenDepositModal}
              />
            </div>
            <div className="flex justify-center items-center ">
              <WalletActionsIcons
                text={"Withdraw"}
                icon={<AiOutlineMinus className="text-white" />}
              />
            </div>
            {/* <div className="flex justify-center items-center ">
              <WalletActionsIcons
                text={"Stake"}
                icon={<BsCoin className="text-white" />}
              />
            </div>
            <div className="flex justify-center items-center ">
              <WalletActionsIcons
                text={"Convert"}
                icon={<MdOutlineChangeCircle className="text-white" />}
              />
            </div> */}
          </div>

          {/* section for the transaction history and pending taji transactions */}

          <div className="currency_tabs py-1 max-w-sm mx-auto">
            <ul className="flex justify-evenly py-1 text-sm bg-slate-200 rounded-lg">
              <li
                className={
                  activeTab === "transaction_history"
                    ? ` text-primary bg-white rounded-lg p-2 shadow-lg cursor-pointer`
                    : ` text-slate-700 bg-slate-200 p-2 cursor-pointer transition-colors duration-500 ease-in-out`
                }
                onClick={() =>
                  navigate("/wallet?activeTab=transaction_history")
                }
              >
                Transaction History
              </li>
              {/* <li
                className={
                  activeTab === "pending_taji_transactions"
                    ? ` text-primary bg-white rounded-lg p-2 shadow-lg cursor-pointer`
                    : ` text-slate-700 bg-slate-200 p-2 cursor-pointer transition-colors duration-500 ease-in-out`
                }
                onClick={() =>
                  navigate("/wallet?activeTab=pending_taji_transactions")
                }
              >
                Pending Transactions
              </li> */}
            </ul>
          </div>

          <div className="mt-10 max-w-6xl mx-auto border-[1px] rounded-xl p-3">
            <TransactionHistory
              activeTab={activeTab}
              data={transactions ? transactions : null}
              totalRows={totalRows}
              handlePageChange={handlePageChange}
            />
            <PendingTajiTransactions
              activeTab={activeTab}
              data={null}
            />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Wallet;
