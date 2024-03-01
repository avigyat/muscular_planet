import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import PaymentCard from '../Components/PaymentCard'

const Payment = () => {
    const  checkOutHandler =()=>{

    }
  return (
    <Box>
        <Stack>
            <PaymentCard amount={500} img="./images/first.jpg" checkOutHandler={checkOutHandler}></PaymentCard>
        </Stack>
    </Box>
  )
}

export default Payment