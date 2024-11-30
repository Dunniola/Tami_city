import React from "react";
import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import CurrencyInput from "react-currency-input-field";
import { PaystackButton } from "react-paystack";
import { useAuthContext } from "../../../context/AuthContext";
import { useDataContext } from "../../../context/DataContext";
import { toast } from "react-hot-toast";
import { calcTotalAmount } from "../../../utils/Helpers";

const NairaComponent = ({ activeTab, onClose }) => {
  const { getRequest, handleRefetchHelp, postRequest } = useDataContext();
  const { user } = useAuthContext();

  const [deposit, setDeposit] = useState(null);

  console.log(deposit)
  const publicKey = "pk_test_ec63f7d3f340612917fa775bde47924bb4a90af7";
  const chargeCalculationResult = calcTotalAmount(deposit);
  const { totalAmount, charges } = chargeCalculationResult;
  console.log(totalAmount);
  const amount = totalAmount * 100; // Remember, set in kobo!

  const componentProps = {
    email: user.email,
    amount,
    metadata: {
      funds: deposit,
    },
    publicKey,
    text: "Deposit",
    onSuccess: (transaction) => {
      toast.loading("Verifying Payment...");
      const ref = transaction.reference;

      const verifyPayment = async () => {
        const verify = await postRequest(`verify`, {
          amount: amount,
          reference: ref
        })
        if (verify.status !== "success") {
          toast.dismiss()
          return toast.error("Payment Could not be verified");
        }

        const result = await postRequest(`wallets`, {
          amount: deposit,
          reference: ref
        });

        if (result.status === "success") {
          console.log("hello");
         toast.dismiss()
         toast.success("Payment Verified")
          onClose();
          handleRefetchHelp();
        } else {
          toast.dismiss()
         toast.error("Payment Not Verified")
        }
      };

      verifyPayment();
    },

    onClose: () =>
      toast("Transaction Cancelled", {
        icon: "😢",
      }),
  };

  if (activeTab === "naira")
    return (
      <>
        <div>
          <div>
            <FormControl id="amount">
              <FormLabel>Amount</FormLabel>
              <CurrencyInput
                prefix={`₦${" "}`}
                id="input-example"
                name="input-name"
                className="bg-gray-50 p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                placeholder="Please enter a number"
                defaultValue={deposit}
                value={deposit}
                decimalsLimit={2}
                onValueChange={(value, name) => setDeposit(value)}
              />
            </FormControl>
          </div>
        </div>

        <div className=" flex justify-center mt-8">
          <PaystackButton
            {...componentProps}
            className=" py-4 px-8 bg-primary rounded-lg font-semibold text-white flex items-center gap-2"
          />
        </div>
      </>
    );
};

export default NairaComponent;
