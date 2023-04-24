import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/SideBar";
import MyResponsivePie from "../components/PieChart";
import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import MyResponsiveCalendar from "../components/Calender";
import LineChart from "../components/LineChart";
import "../index.css";
import Table from "../components/Table";
const HomePage = () => {
  const [navSize, setNavSize] = useState("sm");
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <span>
      <Flex minH="100vh" flexDir="column">
        <Grid
          templateAreas={{
            base: '"nav" "chart1 " "chart2" "table"',
            lg: '"dashboard nav nav" "dashboard chart1 chart2" "dashboard chart3 chart3" ',
          }}
          templateColumns={{
            base: "auto",
            lg: "auto 1fr 1fr",
          }}
          templateRows={{
            base: "15vh 1fr 1fr 1fr",
            lg: "auto  1fr 1fr",
          }}
          gap="4"
          paddingEnd={4}
        >
          <GridItem
            className="NavBar"
            area="nav"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#d9ffcc"}
            marginY="10px"
            borderRadius="10px"
            shadow="dark-lg"
          >
            <NavBar children="Dashboard"></NavBar>
          </GridItem>

          <Show above="lg">
            <GridItem
              flexDir="column"
              className="DashBoard"
              area="dashboard"
              bg={colorMode === "dark" ? "whiteAlpha.100" : "#c2d6d6"}
              borderRadius={10}
              shadow="dark-lg"
            >
              <Dashboard />
            </GridItem>
          </Show>
          <GridItem
            title="PieChart"
            className="Chart1"
            area="chart1"
            borderRadius={10}
            borderBottomColor="red"
            borderBlockStartColor="ActiveBorder"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
            shadow="dark-lg"
          >
            <MyResponsivePie />
          </GridItem>
          <Show above="lg">
            <GridItem
              className="Chart2"
              area="chart3"
              borderRadius={10}
              bg={colorMode === "dark" ? " whiteAlpha.100" : "#e6f2ff"}
              shadow="dark-lg"
              boxSize="100%"
            >
              <MyResponsiveCalendar />
            </GridItem>
          </Show>
          <GridItem
            className="Table"
            area="chart2"
            borderRadius={10}
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
            shadow="dark-lg"
          >
            <LineChart />
          </GridItem>
          <Show below="lg">
            <GridItem
              className="Table"
              area="table"
              borderRadius={10}
              bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
              shadow="dark-lg"
            >
              <Table />
            </GridItem>
          </Show>
        </Grid>
      </Flex>
    </span>
  );
};

export default HomePage;
