import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim();
    if (!query) return;

    setLoading(true);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/search?q=${encodeURIComponent(query)}`
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      // If Laravel returns an array directly:
      const results = Array.isArray(data) ? data : data.results || [];

      if (results.length > 0) {
        // Navigate to the first result's route
        navigate(results[0].route || "/");
        onClose();
      } else {
        alert("No matching page found.");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      alert("Error fetching search results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="" backdropFilter="blur(0.5px)" />
      <ModalContent
        backgroundColor="black"
        className="relative top-[3rem] font-sans"
      >
        <ModalHeader className="text-gold flex justify-between text-[1.2rem] text-primary">
          What do you want to discover?
          <ModalCloseButton className="border-2 text-primary border-secondary" />
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="query"
                required
                className="w-full px-4 py-2 bg-white rounded"
                placeholder="Search..."
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded bg-tetiary"
              >
                <BiSearchAlt
                  className="m-2 cursor-pointer text-primary"
                  size={24}
                />
              </button>
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          {loading && <p className="text-white">Searching...</p>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
