// Chart adapted from Hightcharts official template available at: https://www.highcharts.com/demo/combo-multi-axes

$(function () {
    var chart;
    $(document).ready(function() {

        var container_chart_foreclosure = new Highcharts.chart('foreclosure_chart', {
    chart: {
        renderTo: 'foreclosure_chart',
        zoomType: 'xy',
//        marginLeft: 100
    },
    title: {
        text: ''//'Economic crisis is associated with increasing foreclosure and decreasing home values'
    },
    subtitle: {
        text: 'Source: US Census data'
    },
    xAxis: [{
        categories: ['2005', '2006', '2007', '2008', '2009', '2010',
                     '2011', '2012', '2013', '2014', '2015'],
        crosshair: true,
        plotBands: [{
            color: '#d4d4d4',
            from: 2.5,
            to: 4.1,
            label: {
                text: 'Recession',
                style: {
                    color: 'white',
                    fontFamily: 'open sans',
                    fontWeight: 'bold'
                }
            }
        }]
    }],
    yAxis: [{ // Primary yAxis - home value
        labels: {
            format: '$ {value} K',
            style: {
                color: '#6F1A07'
            }
        },
        title: {
            text: 'Median Home Value',
            style: {
                color: '#6F1A07'
            }
        },
        opposite: true

    }, { // Secondary yAxis - foreclosures
        gridLineWidth: 0,
        title: {
            text: 'Tax Foreclosures',
            style: {
                color: '#AF9164'
            }
        },
        labels: {
            format: '{value} K',
            style: {
                color: '#AF9164'
            },
            opposite: true
        }

    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor: 'rgba(255, 255, 255, 0.42)' //(Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Foreclosures',
        type: 'column',
        yAxis: 1,
        data: [885, 1259, 2203, 3019, 3457, 3843, 3920, 2300, 1369, 1117, 1100],
        color: '#AF9164',
        tooltip: {
            valueSuffix: ' K'
        }

    }, {
        name: 'Median Home Value',
        type: 'spline',
        data: [240.9, 246.5, 247.9, 232.1, 216.7, 221.8, 227.2, 245.2, 268.9, 282.8, 296.4],
        color: 'rgba(111, 26, 7, 0.49)',
        tooltip: {
            valueSuffix: ' K',
            valuePrefix: '$'
        }
    }]
});});});
        
$(function () {
            var chart;
            $(document).ready(function() {

                var container_chart_foreclosure = new Highcharts.chart('poverty_chart', {
                    chart: {
                        renderTo: 'poverty_chart',
                        zoomType: 'xy',
//                        marginLeft: 100,
//                        marginRight: 100,
//                        spacingTop: 50
                    },
                    title: {
                        text: '' //'...and also associated with increasing poverty'
                    },
                    subtitle: {
                        text: 'US Census data' //'Source: US Census data'
                    },
                    xAxis: [{
                        categories: ['2005', '2006', '2007', '2008', '2009', '2010',
                                     '2011', '2012', '2013', '2014', '2015'],
                        crosshair: true,
                        plotBands: [{
                            color: '#d4d4d4',
                            from: 2.5,
                            to: 4.1,
                            label: {
                                text: 'Recession',
                                style: {
                                    color: 'white',
                                    fontFamily: 'open sans',
                                    fontWeight: 'bold'
                                }
                            }
                        }]
                    }],
                    yAxis: [{ // Primary yAxis - home value
                        labels: {
                            format: '{value}',
                            style: {
                                color: '#6F1A07'
                            }
                        },
                        title: {
                            text: '',
                            style: {
                                color: '#6F1A07'
                            }
                        },
                        opposite: false

                    }, { // Secondary yAxis - foreclosures
                        gridLineWidth: 0,
                        title: {
                            text: '',
                            style: {
                                color: '#AF9164'
                            }
                        },
                        labels: {
                            format: '{value}',
                            style: {
                                color: '#AF9164'
                            }
                        }

                    }, { // Tertiary yAxis - poverty
                        gridLineWidth: 0,
                        title: {
                            text: 'People below poverty level',
                            style: {
                                color: '#4a934a'
                            }
                        },
                        labels: {
                            format: '{value} K',
                            style: {
                                color: '#4a934a'
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 80,
                        verticalAlign: 'top',
                        y: 55,
                        floating: true,
                        backgroundColor: 'rgba(255, 255, 255, 0.42)'//(Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    series: [{
                        name: 'Foreclosures',
                        type: 'column',
                        yAxis: 1,
                        data: [885, 1259, 2203, 3019, 3457, 3843, 3920, 2300, 1369, 1117, 1100],
                        color: '#AF9164',
                        tooltip: {
                            valueSuffix: ' K'
                        }

                    },
                        {
                        name: 'People below poverty',
                        type: 'spline',
                        yAxis: 2,
                        data: [36.9, 36.5, 37.3, 39.8, 43.6, 46.3, 46.2, 46.5, 46.3, 46.7, 43.1],
                        color: '#077907',
                        marker: {
                            enabled: true
                        },
                        dashStyle: 'shortdot',
                        tooltip: {
                            valueSuffix: ' thousand'
                        }

                    }]
                });});});