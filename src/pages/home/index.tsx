import { ImageCarousel } from "adewale-ui-toolbox";
import { useLayoutEffect, useState } from "react";
import DashboardCard from "../../components/cards/dashboard-cards";
import { useAppDispatch } from "../../stores/hooks";
import { updatePageProperties } from "../../stores/appFunctionality/pageProperties";
import BarChart from "../../components/charts/bar-chart";

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
      url: "https://s3-alpha-sig.figma.com/img/3e49/7f40/62a7fbd85c8797c85255038d926c9f8a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1ie3pvUZapx3fm8HskClpG0QM1tT8Pz0U5IaWoIAxKbTcX2kzl9azloQD4oASI1n8cfS99To5jy9ixbjI19Fx0HbgcQ-PUM~tplTg-AsGCdAefoOl~2jzP50RYnchnsRf7NYozxThl4V-L64rH5gAwOsBRKjQWetpVVjb6ro8sgFS0bWghCSY0NXJVoiMjd~DcPd3NUlLl8zoTCMZViwAh0IN1yh04iRjgnhsgpfTDoUJ62udvbuXwdgSYmZRBOnvAV5t-y1hmZdTF9isZpvFSo6x3HPefn8SmNSS~kE7T2NOpe9Eg1fiHHUdI38b15MpZx1RJjb79Uvl~CFN3uOA__",
      child: <CarouselContent />,
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/2c42/cc44/aeae4339db1a6549e1de209ac7d2a9d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FawWLdy2u-QXVCd16sv437sSMIq29njvSytNbxhQrM3uZuS8-0kR-FT1RqTrNy8qMY07h1hKu108a4iNonkBG2knCe0viqvtz9ZaSQ6lUo7hELYHPfvK6UBdKEIkaE04-1KqUujXweRRy2LI4yzMcj6NCoNGhHpOIKSxVNW46IBnURyb4pEpo4n9fJkB5kcjij9bGXsUm7OopRIybVqOxFmuXA44mjLeegHby0v~CjXOMq7zrxR34LEdGHtSirB5pjc5QEc-ns4E2B5sXk8SKf0pwtTNUUqSHkOEvOTKhMXENTNLMhiemG7xf590dXjNw8pYRDiqOJWsBi9nYnbuIw__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/f267/c3a2/2a8ab70e1713b526c436e78c86ff9adc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S393OMf5Sb9cV4KcCnxQogRghQqMrVlXmKvOgUrKKuyIFYz5Jk4PR2V-nrF5Iu5yxaiohhxXScbF8ih1grKqIgM2RuDm3gXJU6JzVUXsXw5H6eBjgC3bsDdSFV-PCdZnfrsynH8rgj6bEwKDK6baJG~~Zaje2ccq0KvXwSQRCoSYdWu33LPGEFB269K32DkKUUp4v5vEAP7vW4psNhKEUA1vs8FwsGgvzAr3sb3PAik6YOqLQAUhqO6w8Y4el-451dOIOrPdjKwKnGofaO-0~ncF4PXvykns0czbDYflDqT9PWW7Fz6C0R2FZQc27AHvnK0sXox~Zj3NFaoM1tzOkQ__",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-dark dark:text-white">
      <div className="w-full max-w-screen-xl flex flex-col gap-16">
        {/* cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        <div>
          <h5 className=" font-semibold text-lg">
            Event Registration per month
          </h5>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" min-h-96 border p-5 rounded-md h-full w-full flex justify-center">
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
            />
          </div>
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
