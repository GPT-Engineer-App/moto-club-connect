import { Box, Button, Container, Flex, Heading, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaCamera, FaForumbee, FaMotorcycle, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="xl">
          <FaMotorcycle /> Motorcycle Club
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal">
            Login
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="gray">
            Register
          </Button>
        </Stack>
      </Flex>

      <VStack spacing={8} py={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">
            Upcoming Events <FaCalendarAlt />
          </Heading>
          <Text mt={4}>Check out our upcoming rides and gatherings!</Text>
          <Link color="teal.500">View Calendar</Link>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">
            Photo Gallery <FaCamera />
          </Heading>
          <Text mt={4}>Browse photos from our recent adventures.</Text>
          <Link color="teal.500">View Gallery</Link>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">
            Member Forum <FaForumbee />
          </Heading>
          <Text mt={4}>Join the discussion on all things motorcycle.</Text>
          <Link color="teal.500">Visit Forum</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
