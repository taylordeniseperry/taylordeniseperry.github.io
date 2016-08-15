var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

	var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(15,172,170,0.2)",
					strokeColor : "rgba(15,172,170,1)",
					pointColor : "rgba(15,172,170,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},

			]

		}

	var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

	var pieData = [
				{
					value: 300,
					color:"#0FACAA",
					highlight: "#0FACAA",
					label: "Blue"
				},
				{
					value: 50,
					color: "#711781",
					highlight: "#711781",
					label: "Orange"
				},
				{
					value: 100,
					color: "#FF358B",
					highlight: "#FF358B",
					label: "Teal"
				},
				{
					value: 120,
					color: "#6FB5FF",
					highlight: "#6FB5FF",
					label: "Red"
				}

			];

	var doughnutData = [
					{
						value: 300,
						color:"#0FACAA",
						highlight: "#0FACAA",
						label: "Blue"
					},
					{
						value: 50,
						color: "#711781",
						highlight: "#711781",
						label: "Orange"
					},
					{
						value: 100,
						color: "#FF358B",
						highlight: "#FF358B",
						label: "Teal"
					},
					{
						value: 120,
						color: "#6FB5FF",
						highlight: "#6FB5FF",
						label: "Red"
					}

				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart1 = document.getElementById("line-chart2").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart1 = document.getElementById("line-chart3").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart1 = document.getElementById("line-chart4").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart2").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart3").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart2").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});

};