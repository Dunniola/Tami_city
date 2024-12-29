import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    navigate(`/discover?q=${query}&date=latest`);
    onClose(); // Close the modal after the search
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        backgroundColor="black"
        className="inset-0 flex flex-row max-w-lg flex-w-2/4"
      >
        <ModalHeader className="text-gold flex justify-between text-[1.2rem]">
          What do you want to discover?
          <ModalCloseButton className="text-primary border-2 border-secondary " />
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                name="query"
                required
                className="w-full px-4 py-2 bg-white rounded"
              />
              <div className="rounded bg-tetiary">
                <BiSearchAlt className="m-2 text-primary" size={24} />
              </div>
            </div>
          </form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
