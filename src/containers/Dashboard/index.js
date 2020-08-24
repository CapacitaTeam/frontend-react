/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';

import CustomChart from '../../components/ChartCustom';

const Dashboard = () => {
  
  const options = {
    credits: false,
    chart: {
      type: 'area'
    },
    title: {
      text: 'Estimado por regiones'
    },
    subtitle: {
      text: 'capacita.tech'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billones'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millones'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europa',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
  };

  const propsCustomChart = {
    loading:false,
    chartOptions: options
  }

  return <CustomChart {...propsCustomChart} />
};
  
export default Dashboard;