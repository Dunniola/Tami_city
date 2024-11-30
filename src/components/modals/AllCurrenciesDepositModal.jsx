import React from "react";
import { useState } from "react";
import NairaComponent from "../wallets/PaymentComponents/NairaComponent";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import TajiComponent from "../wallets/PaymentComponents/TajiComponent";

const AllCurrenciesDepositModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("naira");
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <span className="text-slate-500">Deposit Funds</span>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div className="currency_tabs py-1 max-w-[200px] mx-auto">
            {/* <ul className="flex justify-evenly py-1 text-sm bg-slate-200 rounded-lg">
              <li
                className={
                  activeTab === "naira"
                    ? ` text-primary bg-white rounded-lg p-2 shadow-lg cursor-pointer`
                    : ` text-slate-700 bg-slate-200 p-2 cursor-pointer transition-colors duration-500 ease-in-out`
                }
                onClick={() => setActiveTab("naira")}
              >
                Naira
              </li>
              <li
                className={
                  activeTab === "tajiri"
                    ? ` text-primary bg-white rounded-lg p-2 shadow-lg cursor-pointer`
                    : ` text-slate-700 bg-slate-200 p-2 cursor-pointer transition-colors duration-500 ease-in-out`
                }
                onClick={() => setActiveTab("tajiri")}
              >
                Tajiri
              </li>
              <li
                className={
                  activeTab === "dollar"
                    ? ` text-primary bg-white rounded-lg p-2 shadow-lg cursor-pointer`
                    : ` text-slate-700 bg-slate-200 p-2 cursor-pointer transition-colors duration-500 ease-in-out`
                }
                onClick={() => setActiveTab("dollar")}
              >
                Dollar
              </li>
            </ul> */}
          </div>

          <div>
           
            <NairaComponent activeTab={activeTab} onClose={onClose}/>
            {/* <TajiComponent activeTab={activeTab} onClose={onClose}/> */}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AllCurrenciesDepositModal;
