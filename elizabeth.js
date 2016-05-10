google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['Model', 'km/l',{role:'style'}],
        ['Mazda2 1.3', 24.65,'#2ecc71'],
        ['Mazda2 1.5', 22.48,'#2ecc71'],
        ['Celerio M/T', 20.31,'#95a5a6'],
        ['Celerio CVT', 19.57,'#2ecc71'],
        ['Mirage M/T', 18.85,'#95a5a6'],
        ['Attrage M/T', 18.27,'#95a5a6'],
        ['March M/T', 18.05,'#95a5a6'],
        ['Swift M/T', 18.04,'#95a5a6'],
        ['Almera', 17.85,'#2ecc71'],
        ['Amaze M/T', 17.80,'#95a5a6'],
        ['Ciaz M/T', 17.76,'#95a5a6'],
        ['Mirage CVT', 17.61,'#2ecc71'],
        ['Attrage CVT', 17.53,'#2ecc71'],
        ['March CVT', 17.25,'#2ecc71'],
        ['Swift CVT', 17.14,'#2ecc71'],
        ['Ciaz CVT', 17.12,'#2ecc71'],
        ['Brio CVT', 16.69,'#2ecc71'],
        ['Yaris', 16.64,'#2ecc71'],
        ['Amaze CVT', 16.09,'#2ecc71'],
        ['Brio M/T', 16.03,'#95a5a6']
    ]);
    var data2 = google.visualization.arrayToDataTable([
        ['Model', 'Seconds',{role:'style'}],
        ['Mazda2 1.3', 14.64,'#c0392b'],
        ['Mazda2 1.5', 11.45,'#c0392b'],
        ['Celerio M/T', 13.02,'#95a5a6'],
        ['Celerio CVT', 15.50,'#c0392b'],
        ['Mirage M/T', 11.85,'#95a5a6'],
        ['Attrage M/T', 12.71,'#95a5a6'],
        ['March M/T', 12.43,'#95a5a6'],
        ['Swift M/T', 12.34,'#95a5a6'],
        ['Almera', 13.18,'#c0392b'],
        ['Amaze M/T', 13.17,'#95a5a6'],
        ['Ciaz M/T', 12.51,'#95a5a6'],
        ['Mirage CVT', 14.12,'#c0392b'],
        ['Attrage CVT', 15.31,'#c0392b'],
        ['March CVT', 15.63,'#c0392b'],
        ['Swift CVT', 14.74,'#c0392b'],
        ['Ciaz CVT', 14.01,'#c0392b'],
        ['Brio CVT', 14.22,'#c0392b'],
        ['Yaris', 12.42,'#c0392b'],
        ['Amaze CVT', 14.45,'#c0392b'],
        ['Brio M/T', 12.23,'#95a5a6']
    ]);

    var view1 = new google.visualization.DataView(data1);
      view1.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

    var view2 = new google.visualization.DataView(data2);
      view2.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

    var option1 = {
        title: 'Fuel Saving (km/l)',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var option2 = {
        title: 'Time to Accelerate from 0-100km/h',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var chart1 = new google.visualization.BarChart(document.getElementById("fuel"));
    chart1.draw(view1, option1);

    var chart2 = new google.visualization.BarChart(document.getElementById("acc"));
    chart2.draw(view2, option2);
}