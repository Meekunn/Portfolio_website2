import Head from "next/head";
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function Home() {
	// const { colorMode, toggleColorMode} = useColorMode();
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box bg={useColorModeValue("white", "black")} height={"100vh"}>
				{/* <Loader /> */}
				<Navbar />
				<Loader />
			</Box>
		</>
	);
}
