import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSalesBar } from "src/sections/overview/overview-sales-bar";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTrafficDonut } from "src/sections/overview/overview-traffic-donut";
import { OverviewTrafficPie } from "src/sections/overview/overview-traffic-pie";
import { OverviewSalesLine } from "src/sections/overview/overview-sales-line";
import { OverviewVideo } from "src/sections/overview/overview-video";
import { OverviewTimeline } from "src/sections/overview/overview-timeline";
import { OverviewRecentActivities } from "src/sections/overview/overview-recent-activities";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="$24k" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="1.6k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
          </Grid>
          <Grid xs={12} sm={6} lg={4}>
            <OverviewVideo
              description="This is a sample video."
              title="A Video"
              url="https://assets.codepen.io/6093409/river.mp4"
              date="20 Apr 2023"
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={4}>
            <OverviewTimeline
              timelineItems={[
                {
                  id: "5ece2c077e39da27658aaiyy5",
                  name: "Meeting - Company ABC",
                  isCompleted: true,
                  date: "17 Jun",
                  time: "9:45 AM",
                },
                {
                  id: "5ece2c077e39da27658amkwj6",
                  name: "SIT - Company ABC",
                  isCompleted: false,
                  date: "20 Jun",
                  time: "3:30 PM",
                },
                {
                  id: "5ece2c077e39da276589fneh",
                  name: "UAT - Company ABC",
                  isCompleted: false,
                  date: "23 Jun",
                  time: "11:00 AM",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={4}>
            <OverviewRecentActivities
              activities={[
                {
                  id: "5ece2c077e39da276593ghgkdw",
                  name: "Logged In",
                  username: "Alice",
                  time: "32 min ago",
                  image: "/assets/avatars/avatar-anika-visser.png",
                },
                {
                  id: "5ece2c077e39da2765960349kd",
                  name: "Completed Task",
                  username: "Cheshire",
                  time: "46 min ago",
                  image: "/assets/avatars/avatar-jie-yan-song.png",
                },
                {
                  id: "5ece2c077e39da27659395ndr2",
                  name: "Added Task",
                  username: "Tarrant",
                  time: "57 min ago",
                  image: "/assets/avatars/avatar-fran-perez.png",
                },
                {
                  id: "5ece2c077e39da2765997ydkg",
                  name: "Logged Out",
                  username: "Mary Ann",
                  time: "57 min ago",
                  image: "/assets/avatars/avatar-jane-rotanson.png",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewSalesBar
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewTrafficDonut
              chartSeries={[63, 15, 22]}
              labels={["Desktop", "Tablet", "Phone"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewTrafficPie
              chartSeries={[63, 22, 15]}
              labels={["Desktop", "Tablet", "Phone"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewSalesLine
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewLatestProducts
              products={[
                {
                  id: "5ece2c077e39da27658aa8a9",
                  image: "/assets/products/product-1.png",
                  name: "Healthcare Erbology",
                  updatedAt: subHours(now, 6).getTime(),
                },
                {
                  id: "5ece2c0d16f70bff2cf86cd8",
                  image: "/assets/products/product-2.png",
                  name: "Makeup Lancome Rouge",
                  updatedAt: subDays(subHours(now, 8), 2).getTime(),
                },
                {
                  id: "b393ce1b09c1254c3a92c827",
                  image: "/assets/products/product-5.png",
                  name: "Skincare Soja CO",
                  updatedAt: subDays(subHours(now, 1), 1).getTime(),
                },
                {
                  id: "a6ede15670da63f49f752c89",
                  image: "/assets/products/product-6.png",
                  name: "Makeup Lipstick",
                  updatedAt: subDays(subHours(now, 3), 3).getTime(),
                },
                {
                  id: "bcad5524fe3a2f8f8620ceda",
                  image: "/assets/products/product-7.png",
                  name: "Healthcare Ritual",
                  updatedAt: subDays(subHours(now, 5), 6).getTime(),
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={8}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "f69f88012978187a6c12897f",
                  ref: "DEV1049",
                  amount: 30.5,
                  customer: {
                    name: "Ekaterina Tankova",
                  },
                  createdAt: 1555016400000,
                  status: "pending",
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  ref: "DEV1048",
                  amount: 25.1,
                  customer: {
                    name: "Cao Yu",
                  },
                  createdAt: 1555016400000,
                  status: "delivered",
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  ref: "DEV1047",
                  amount: 10.99,
                  customer: {
                    name: "Alexa Richardson",
                  },
                  createdAt: 1554930000000,
                  status: "refunded",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "DEV1046",
                  amount: 96.43,
                  customer: {
                    name: "Anje Keizer",
                  },
                  createdAt: 1554757200000,
                  status: "pending",
                },
                {
                  id: "9f974f239d29ede969367103",
                  ref: "DEV1045",
                  amount: 32.54,
                  customer: {
                    name: "Clarke Gillebert",
                  },
                  createdAt: 1554670800000,
                  status: "delivered",
                },
                {
                  id: "ffc83c1560ec2f66a1c05596",
                  ref: "DEV1044",
                  amount: 16.76,
                  customer: {
                    name: "Adam Denisov",
                  },
                  createdAt: 1554670800000,
                  status: "delivered",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
