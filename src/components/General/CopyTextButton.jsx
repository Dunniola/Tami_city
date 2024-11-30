import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const CopyTextButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast()

  const copyToClipboard = () => {
    toast({
        title: 'Copied to clipboard',
        description: "copied successfully",
        status: 'success',
        position: "top",
        duration: 2000,
        isClosable: true,
      })
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy Text: ", err));
  };

  return (
    // <button onClick={copyToClipboard}>
    //   {copied ? 'Copied!' : 'Copy URL'}
    // </button>

    <button className="bg-primary rounded" onClick={copyToClipboard}>
      <BiCopy className="text-white m-2" size={24} />
    </button>
  );
};

export default CopyTextButton;
