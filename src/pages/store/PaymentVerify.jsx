import React, { useState } from 'react'
import LoadingCard from '../../components/LoadingCard'
import images from '../../constants/images'
import { apiRequest } from '../../handlers/apiHandler'

const PaymentVerify = () => {
  const [ loading , setLoading ] = useState(true)
//   const checkTransactionStatus = async (txRef) => {
//     const response = await apiRequest('get' , `transaction_status/${txRef}/`)
//     const data = await response.json();

//     if (data.status === "Success") {
//         // Redirect or show success message
//     } else if (data.status === "Failed") {
//         // Show failure message
//     } else {
//         // If still pending, keep polling
//         setTimeout(() => checkTransactionStatus(txRef), 3000); // Poll every 3 seconds
//     }
// };
  return (
    <div className='relatve flex flex-col w-full h-screen justify-center items-center'>
      <LoadingCard text="Payment status" show={loading} />

    </div>
  )
}

export default PaymentVerify;