import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PaymentCard = ({amount , img, checkOutHandler}) => {

  return (
    <div>
        <VStack>
            <Image src={img} boxSize={"64"} objectFit={"cover"}/>
            <Text>₹{amount}</Text>
            <Button onClick={checkOutHandler}>Buy now</Button>
        </VStack>
    </div>
  )
}

export default PaymentCard