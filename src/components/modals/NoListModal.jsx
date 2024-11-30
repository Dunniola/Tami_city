import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { X, Mail, PlusCircle } from "lucide-react";

const NoListModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No Email Lists Found
                </h3>
                <p className="text-gray-600 mb-6">
                  It looks like you haven't created any email lists yet. Start
                  by creating your first list to begin sending targeted
                  campaigns.
                </p>
                <div className="mt-6">
                  <Link
                    to={"/all-lists/create-list"}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Create Your First Email List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoListModal;
