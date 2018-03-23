function init() {
	var d3 = Plotly.d3;

	var WIDTH_IN_PERCENT_OF_PARENT = 100,
    	HEIGHT_IN_PERCENT_OF_PARENT = 70;

	var gd3 = d3.select('body')
		.select('#plot')
    	.append('div')
    	.style({
        	width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        	'margin-left': 0 + '%',

        	height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        	'margin-top': 0 + 'vh'
    	});

	var gd = gd3.node();

	Plotly.plot(gd, [{
		x: qbData.map(row => row.LT),
		y: qbData.map(row => row.RK),
		mode: 'markers',
		type: 'scatter',
		text: qbHover,
		marker: {size: 18,
				color: qbData.map(row => row.nfl_tanya),
				colorscale: [[0, 'rgb(0,0,0)'], [0.05, 'rgb(128,128,128)'], [0.14, 'rgb(128,128,128)'], [.15, 'rgb(192,0,0)'], [.19, 'rgb(192,0,0)'], [0.5, 'rgb(255,0,0)'], [0.76, 'rgb(255,235,0)'],[0.9, 'rgb(0,128,0)'],[1, 'rgb(0,128,0)']]
				// colorscale: [[0, 'rgb(192,0,0)'], [.1, 'rgb(0,112,192)'], [1, 'rgb(0,112,192)']]
				},
		hoverinfo: 'text',
		hoverlabel: {bgcolor: 'black', bordercolor: 'white'},
		fillcolor: "black"
	}],	{
	 	xaxis: {
			title: 'Long Term (LT) Score'
		},
		yaxis: {
			title: 'Rookie Readiness (RR) Score'
		},
		title:'@Slavin22 QB Prospect Scores -- all QBs drafted from 2004-2017, plus 28 QBs from 2018 class<br>(Hover for QB prospect info)<br>(QBs grouped together can be considered close comps)',
		hovermode: 'closest',
		// hoverdistance: -1

	});

	window.onresize = function() {
    	Plotly.Plots.resize(gd);
	};

	// var PLOT = document.getElementById("plot");

	// Plotly.plot("plot", data, layout);

	// function renderTable1() {
	// 	$tbody.innerHTML = "";
	// 	for (var x = 0; x < qbData.length; x++) {
	// 		var qb = qbData[x];
	// 		var fields = Object.keys(qb);
	// 		var $row = $tbody.insertRow(x);
	// 		// 
	// 		// Change the 5 below to number of columns
	// 		// 
	// 		for (var y = 0; y < 10; y++) {
	// 			var field = fields[y];
	// 			var $cell = $row.insertCell(y);
	// 			$cell.innerHTML = qb[field]
	// 		}
	// 	}
	// }

	// // Find a <table> element with id="myTable":
	// var $tbody = document.querySelector("tbody");
	// renderTable1()
};



init();