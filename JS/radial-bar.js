var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [74],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "70%",

      },
      track: {
        background: "#C9F7F5",
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          fontWeight: 500,
          offsetY: -10,
          color: '#2F95FF',
          fontSize: "13px"
        },
        value: {
          color: '#474746',
          fontSize: '26px',
          fontWeight: 600,
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Credit Used"]
};

var chart = new ApexCharts(document.querySelector("#SemiCircle"), options);

chart.render();
