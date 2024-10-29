import { ImageCarousel } from "adewale-ui-toolbox";
import { useLayoutEffect } from "react";
import DashboardCard from "../../components/cards/dashboard-cards";
import { useAppDispatch } from "../../stores/hooks";
import { updatePageProperties } from "../../stores/appFunctionality/pageProperties";
import BarChart from "../../components/charts/bar-chart";
import EventHistoryTable from "../../components/tables/event-history";

export default function Home() {
  const dispatch = useAppDispatch();

  // update page props on component mount
  useLayoutEffect(() => {
    dispatch(
      updatePageProperties({
        breadCrumb: [],
        pageTitle: "Welcome! here's your summary",
        pageDescription: "user summary",
        isLoading: false,
        failedToLoad: false,
        setFailedToLoad: false,
        retryRequest: false,
      })
    );
  }, []);

  const images = [
    {
      url: "./placeholders/image_1.jpeg",
      child: <CarouselContent />,
    },
    {
      url: "./placeholders/image_2.jpeg",
      child: <CarouselContent />,
    },
    {
      url: "./placeholders/image_3.jpeg",
      child: <CarouselContent />,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-dark dark:text-white gap-3">
      <h6 className="w-full text-xl md:text-2xl md:hidden font-semibold text-dark dark:text-white  px-5 md:px-10">
        Welcome! here's your summary
      </h6>
      <div className="w-full max-w-screen-xl flex flex-col gap-16">
        {/* cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  px-5 md:px-10">
          {[
            {
              id: 1,
              label: "Total Events",
              value: "100,000",
              stat: {
                value: "+5.0%",
                isRise: true,
              },
            },
            {
              id: 2,
              label: "Active Speakers",
              value: `25`,
              stat: {
                value: "-5.0%",
                isRise: false,
              },
            },
            {
              id: 3,
              label: "Total Registrations",
              value: `300`,
              stat: {
                value: "+5.0%",
                isRise: true,
              },
            },
            {
              id: 4,
              label: "Total Revenue",
              value: `$500,000`,
              stat: {
                value: "+5.0%",
                isRise: true,
              },
            },
          ].map((item) => (
            <DashboardCard
              key={item?.id}
              label={item?.label}
              value={item?.value}
              stat={item?.stat}
            />
          ))}
        </div>

        {/* events analytics and news */}
        <div className=" flex flex-col gap-3  px-5 md:px-10">
          <h5 className=" font-semibold text-lg">
            Event Registration per month
          </h5>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 z-2">
            <div className=" md:min-h-96 border dark:border-none dark:bg-dark-500 p-5 rounded-md h-full w-full flex justify-center">
              <BarChart
                data={{
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  datasets: [
                    {
                      label: "",
                      data: [
                        700, 900, 750, 1000, 550, 900, 270, 900, 650, 980, 600,
                      ],
                      backgroundColor: "#8576FF",
                    },
                  ],
                }}
              />
            </div>
            <ImageCarousel
              images={images?.map((item) => ({
                url: item?.url,
                child: item?.child,
              }))}
              autoTransitionOptions={{ allow: true, seconds: 5 }}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h5 className=" font-semibold text-lg  px-5 md:px-10">
            Event Registration per month
          </h5>
          <EventHistoryTable />
        </div>
      </div>
    </section>
  );
}

function CarouselContent() {
  return (
    <div className=" w-full px-5 text-sm flex flex-col gap-2">
      <h6 className=" font-semibold">Latest News & Updates</h6>
      <p>
        Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis
        aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat
        fringilla tincidunt quisque non. Pellentesque in ut tellus.
      </p>
    </div>
  );
}
