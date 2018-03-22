function init() {
	var data = [{
		x: qbData.map(row => row.LT),
		y: qbData.map(row => row.RK),
		mode: 'markers',
		type: 'scatter',
		text: qbHover,
		marker: {size: 20,
				color: qbData.map(row => row.nfl_tanya),
				colorscale: [[0, 'rgb(205,0,0)'], [0.25, 'rgb(205,0,0)'], [0.7, 'rgb(255,235,0)'],[0.9, 'rgb(0,128,0)'],[1, 'rgb(0,128,0)']]
				},
		hoverinfo: 'text',
		hoverlabel: {bgcolor: 'black', bordercolor: 'white'},
		fillcolor: "black"
	}];

	var layout = {
	 	xaxis: {
			title: 'Long Term (LT) Score'
		},
		yaxis: {
			title: 'Rookie Readiness (RR) Score'
		},
		title:'2018 QB Prospect Rankings<br>(Long Term + Rookie Readiness)<br>(blue = 2018 class)',
		hovermode: 'closest',
		height: 600
	};

	var PLOT = document.getElementById("plot");

	Plotly.plot("plot", data, layout);

	function renderTable1() {
		$tbody.innerHTML = "";
		for (var x = 0; x < qbData.length; x++) {
			var qb = qbData[x];
			var fields = Object.keys(qb);
			var $row = $tbody.insertRow(x);
			// 
			// Change the 5 below to number of columns
			// 
			for (var y = 0; y < 10; y++) {
				var field = fields[y];
				var $cell = $row.insertCell(y);
				$cell.innerHTML = qb[field]
			}
		}
	}

	// Find a <table> element with id="myTable":
	var $tbody = document.querySelector("tbody");
	renderTable1()
};

init();