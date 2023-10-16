import ReactEcharts from "echarts-for-react";


const Chart = () => {
  const getOption = () => {
    return {
      title: {
        text: "Customers",
        subtext: "Customers that buy products",
        left: "left",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        top: "bottom",
        data: [
          "rose1",
          "rose2",
          "rose3",
          "rose4",
          "rose5",
          "rose6",
          "rose7",
          "rose8",
        ],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Radius Mode",
          type: "pie",
          radius: [20, 140],
          center: ["45%", "60%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 33, name: "rose 2" },
            { value: 28, name: "rose 3" },
            { value: 22, name: "rose 4" },
            { value: 20, name: "rose 5" },
            { value: 15, name: "rose 6" },
            { value: 12, name: "rose 7" },
            { value: 10, name: "rose 8" },
          ],
        },
      ],
    };
  };

  const initialRecord = [
    {
      month: "Jan",
      percentage: "60%",
      isActive: 0,
    },
    {
      month: "Feb",
      percentage: "50%",
      isActive: 0,
    },
    {
      month: "Mar",
      percentage: "100%",
      isActive: 0,
    },
    {
      month: "Apr",
      percentage: "70%",
      isActive: 0,
    },
    {
      month: "May",
      percentage: "80%",
      isActive: 0,
    },
    {
      month: "Jun",
      percentage: "30%",
      isActive: 0,
    },
    {
      month: "Jul",
      percentage: "80%",
      isActive: 0,
    },
    {
      month: "Aug",
      percentage: "100%",
      isActive: 1,
    },
    {
      month: "Sep",
      percentage: "85%",
      isActive: 0,
    },
    {
      month: "Oct",
      percentage: "72%",
      isActive: 0,
    },
    {
      month: "Nov",
      percentage: "70%",
      isActive: 0,
    },
    {
      month: "Dec",
      percentage: "75%",
      isActive: 0,
    },
  ];

  return (
    <div className="chartsContainer">
      <div className="barChart">
        <div className="top">
          <div>
            <h3>Overview</h3>
            <p className="heading">Monthly Earning</p>
          </div>
          <div className="dropdown">
            <select>
              <option>Quaterly</option>
              <option>Halfearly</option>
              <option>yearly</option>
            </select>
          </div>
        </div>
        <div className="chartContainer">
          {initialRecord.map((item, index) => (
            <div key={index} className="chart">
              <div
                className={`bar ${item.isActive === 1 ? "active" : ""}`}
                style={{ height: item.percentage }}
              ></div>
              <div className="month">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pieChart">
        <ReactEcharts
          option={getOption()}
          style={{ width: "100%", height: "100%" }}
          notMerge={true}
          lazyUpdate={true}
          theme="theme_name"
        />
      </div>
    </div>
  );
};
export default Chart;
