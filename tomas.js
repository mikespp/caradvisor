google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['Model', 'Price(Baht)',{role:'style'}],
        ['Toyota Hilux Revo', 1139000,'#f1c40f'],
        ['Ford Ranger Wildtrak', 1139000,'#f1c40f'],
        ['Mitsubishi Triton', 1038000,'#f1c40f'],
        ['Chevrolet Colorado', 1029000,'#f1c40f'],
        ['Mazda BT-50 Pro', 1023000,'#f1c40f'],
        ['Isuzu D-max V-cross', 1017000,'#f1c40f'],
        ['Nissan NP-300 Navara', 1001000,'#f1c40f']
    ]);
    var data2 = google.visualization.arrayToDataTable([
        ['Model', 'Length(mm)',{role:'style'},'Width(mm)','Height(mm)'],
        ['Toyota Hilux Revo', 1525,'',1540,480],
        ['Ford Ranger Wildtrak', 1549,'',1560,511],
        ['Mitsubishi Triton', 1520,'',1470,475],
        ['Chevrolet Colorado', 1484,'',1534,466],
        ['Mazda BT-50 Pro', 1549,'',1560,513],
        ['Isuzu D-max V-cross', 1485,'',1530,465],
        ['Nissan NP-300 Navara', 1502,'',1560,474]
    ]);

    var data3 = google.visualization.arrayToDataTable([
        ['Model', 'Width(mm)',{role:'style'}],
        ['Toyota Hilux Revo', 3085,'#2c3e50'],
        ['Ford Ranger Wildtrak', 3220,'#2c3e50'],
        ['Mitsubishi Triton', 3000,'#2c3e50'],
        ['Chevrolet Colorado', 3095,'#2c3e50'],
        ['Mazda BT-50 Pro', 3220,'#2c3e50'],
        ['Isuzu D-max V-cross', 3095,'#2c3e50'],
        ['Nissan NP-300 Navara', 3150,'#2c3e50']
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
                       2,3,4]);

    var view3 = new google.visualization.DataView(data3);
      view3.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);


    var option1 = {
        title: 'Price Comparation',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var option2 = {
        title: 'Rear Trunk Dimension',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var option3 = {
        title: 'Wheel Base Width Comparation',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var chart1 = new google.visualization.BarChart(document.getElementById("acc"));
    chart1.draw(view1, option1);

    var chart2 = new google.visualization.BarChart(document.getElementById("fuel"));
    chart2.draw(view2, option2);

    var chart3 = new google.visualization.BarChart(document.getElementById("dim"));
    chart3.draw(view3, option3);
    
}