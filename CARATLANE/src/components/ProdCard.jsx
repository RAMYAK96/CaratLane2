import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading ,ButtonGroup,Button,Image,Text} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const ProdCard = (el) => {
    return(
        <div>
<Card  style={{width : "200px"}}>
  <CardBody>
    <Image
      src={el.image}
      alt={el.id}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text color='blue.600' fontSize='2xl'>
        {el.price}
      </Text>
      <Heading size='sm' style={{color : "violet"}}>{el.title}</Heading>
      <Text style={{fontSize : "12px"}}>
       {el.description}
      </Text>

      <Button style={{backgroundColor : 'pink'}}><Link to={`/${el.category}/${el.id}`}>Show More</Link></Button>
    </Stack>
  </CardBody>
</Card>
        </div>
    );
}

export default ProdCard