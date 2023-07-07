import { useRouter } from "next/router";
import React from "react";

const Payment = () => {
  const router = useRouter();
  console.log(router.query.price);
  const price = router.query.price;

  const handleSuccess = () => {
    router.replace(
      `https://zakstore-mohammadpiriyan.vercel.app/payment/Success/${price}`
    );
  };
  const handleCancel = () => {
    router.replace(
      `https://zakstore-mohammadpiriyan.vercel.app/payment/Cancel/${price}`
    );
  };

  return (
    <div className="flex justify-center items-center h-screen" dir="rtl">
      <div className="flex flex-col gap-4">
        <div>
          <h2>
            هزینه خرید شما برابر است با : <span>{price}</span>
          </h2>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => handleSuccess()}
            className="bg-green-600 hover:bg-green-700 py-2 rounded-xl w-5/12 text-white"
          >
            پرداخت
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-2 w-5/12"
            onClick={() => handleCancel()}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
