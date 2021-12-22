
var options = {
  series: [75],
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -100,
      endAngle: 100,
      track: {
        background: "#C9F7F5",
        strokeWidth: '96%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#2F95FF',
          fontWeight: 400,
          fontSize: '14px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '26px',
          fontWeight: 600,
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Credit Used'],
};

var chart = new ApexCharts(document.querySelector("#SemiCircle"), options);
chart.render();