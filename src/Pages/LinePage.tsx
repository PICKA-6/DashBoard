import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/SideBar";
import LineChart from "../components/LineChart";
import { useColorMode } from "@chakra-ui/react";

const LinePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <span>
      <Flex minH="100vh" flexDirection="column">
        <Grid
          templateAreas={{
            base: '"nav" "chart" ',
            lg: '"dashboard nav " "dashboard chart"  ',
          }}
          templateColumns={{
            base: "auto",
            lg: "auto minmax(10px,1fr)",
          }}
          templateRows={{
            base: "12vh 100vh ",
            lg: "auto 1fr  ",
          }}
          gap="4"
          paddingEnd={4}
        >
          <GridItem
            className="NavBar"
            area="nav"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#d9ffcc"}
            borderRadius={10}
            marginY="10px"
            shadow="dark-lg"
          >
            <NavBar children="LineChart"></NavBar>
          </GridItem>
          <Show above="lg">
            <GridItem
              className="DashBoard"
              area="dashboard"
              overflow="auto"
              bg={colorMode === "dark" ? "whiteAlpha.100" : "#c2d6d6"}
              borderRadius={10}
              shadow="dark-lg"
            >
              <Dashboard />
            </GridItem>
          </Show>

          <GridItem
            title="LineChart"
            className="linechart"
            area="chart"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "#e6f2ff"}
            borderRadius={10}
            shadow="dark-lg"
          >
            <LineChart />
          </GridItem>
        </Grid>
      </Flex>
    </span>
  );
};

export default LinePage;
