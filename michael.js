google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['Model', 'Seconds',{role:'style'}],
        ['Vios 1.5 E M/T', 10.10,'#c0392b'],
        ['Fiesta 5dr', 10.55,'#c0392b'],
        ['Jazz 1.5', 11.10,'#c0392b'],
        ['City 1.5', 11.19,'#c0392b'],
        ['Mazda2 1.5', 11.44,'#c0392b'],
        ['MG5 1.5', 11.65,'#c0392b'],
        ['Fiesta 4dr 1.6', 11.85,'#c0392b'],
        ['Jazz 1.3 hybrid', 12.21,'#c0392b'],
        ['Vios 1.5 S', 12.30,'#c0392b'],
        ['Sonic 1.6', 12.57,'#c0392b'],
        ['Fiesta 5dr 1.6', 12.67,'#c0392b'],
        ['Cube 1.5', 13.25,'#c0392b'],
        ['Sonic 1.4 M/T', 13.79,'#c0392b'],
        ['Fiesta 5dr 1.4', 14.17,'#c0392b'],
        ['Mazda2 1.3', 14.64,'#c0392b'],
        ['MG3 1.5', 14.87,'#c0392b'],
        ['Sonic 1.4 A/T', 15.40,'#c0392b']
    ]);
    var data2 = google.visualization.arrayToDataTable([
        ['Model', 'Fuel Consumption (km/l)',{role:'style'}],
        ['Vios 1.5 E M/T', 15.48,'#2ecc71'],
        ['Fiesta 5dr', 17.90,'#2ecc71'],
        ['Jazz 1.5', 15.96,'#2ecc71'],
        ['City 1.5', 16.18,'#2ecc71'],
        ['Mazda2 1.5', 22.48,'#2ecc71'],
        ['MG5 1.5', 14.03,'#2ecc71'],
        ['Fiesta 4dr 1.6', 16.13,'#2ecc71'],
        ['Jazz 1.3 hybrid', 19.33,'#2ecc71'],
        ['Vios 1.5 S', 15.35,'#2ecc71'],
        ['Sonic 1.6', 13.75,'#2ecc71'],
        ['Fiesta 5dr 1.6', 16.40,'#2ecc71'],
        ['Cube 1.5', 15.00,'#2ecc71'],
        ['Sonic 1.4 M/T', 15.06,'#2ecc71'],
        ['Fiesta 5dr 1.4', 13.11,'#2ecc71'],
        ['Mazda2 1.3', 24.65,'#2ecc71'],
        ['MG3 1.5', 13.74,'#2ecc71'],
        ['Sonic 1.4 A/T', 13.75,'#2ecc71']
    ]);
//Vios 1.5 E M/T	10.1	15.48
// Fiesta 5dr	10.55	17.9
// Jazz 1.5	11.1	15.96
// City 1.5	11.19	16.18
// Mazda2 1.5	11.44	22.48
// MG5 1.5	11.65	14.03
// Fiesta 4dr 1.6	11.85	16.13
// Jazz 1.3 hybrid	12.21	19.33
// Vios 1.5 S	12.3	15.35
// Sonic 1.6	12.57	13.75
// Fiesta 5dr 1.6 	12.67	16.4
// Cube 1.5	13.25	15
// Sonic 1.4 M/T	13.79	15.06
// Fiesta 5dr 1.4	14.17	13.11
// Mazda2 1.3	14.64	24.65
// MG3 1.5	14.87	13.74
// Sonic 1.4 A/T	15.4	13.75
    
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
        title: 'Time to Accelerate from 0-100km/h',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var option2 = {
        title: 'Fuel Consumption (km/l)',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var chart1 = new google.visualization.BarChart(document.getElementById("acc"));
    chart1.draw(view1, option1);

    var chart2 = new google.visualization.BarChart(document.getElementById("fuel"));
    chart2.draw(view2, option2);
    
}