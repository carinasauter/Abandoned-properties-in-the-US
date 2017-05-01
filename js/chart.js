// The stacked bar chart is adapted from Mike Foster's workshop http://duspviz.mit.edu/d3-workshop/intro-to-d3/

// New dataset read from CSV
var popData = [];

d3.csv("data/city_pop.csv", function(d) {
    return {
        city : d.city, // city name
        peak : +d.peak, // force population value to be number (+)
        now_pop: +d.now_pop // 2010 population
    };
}, function(error, rows) { // catch error if error, read rows
    popData = rows; // set popData equal to rows
    createVisualization(); // call function to create chart
});


function createVisualization(){
    // Width and height of SVG
    var w = 800;
    var h = 350;
    var y_offset = 90;

    // Get length of dataset
    var arrayLength = popData.length; // length of dataset
    var maxValue = d3.max(popData, function(d) { return +d.peak;} ); // get max value of our dataset
    var x_axisLength = w-50; // length of x-axis in our layout
    var y_axisLength = h-100; // length of y-axis in our layout

    // Create y scales
    var yScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, y_axisLength]);

    //Create SVG element
    var svg = d3.select("#pop_bars")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

    // Select and generate rectangle elements
    svg.selectAll( "rect.peak" )
        .data( popData )
        .enter()
        .append("rect")
        .attr("class", "peakbars")
        .attr( "x", function(d,i){
        return (x_axisLength/arrayLength)*i + 30;  } )
        .attr( "y", function(d) {
        return h - y_offset - yScale(d.peak);  } )
        .attr( "width", (x_axisLength/arrayLength)-5 )
        .attr( "height", function(d){
        return yScale(d.peak); })
        .attr( "fill", "rgb(232, 223, 219)")
        .attr("stroke", "#8B786D")
        .attr("stroke-width", "1px")
        .on("mouseover", function(d){
        return tooltip.style("visibility", "visible").html(d.city + "<br>" + "Peak population: " +d3.format(",")(d.peak) + "<br>" + "2010 Population: " + +d3.format(",")(d.now_pop));
    })
        .on("mousemove", function(d){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html(d.city + "<br>" + "Peak population: " + d3.format(",")(d.peak) + "<br>" + "2010 Population: " + d3.format(",")(d.now_pop));
    })
        .on("mouseout", function(d){
        return tooltip.style("visibility", "hidden");
    });

    // create second stack of bars initially showing peak population
    svg.selectAll( "rect.now" )
        .data( popData )
        .enter()
        .append("rect")
        .attr("class", "nowbars")
        .attr( "x", function(d,i){
        return (x_axisLength/arrayLength)*i + 30;  } )
        .attr( "y", function(d) {
        return h - y_offset - yScale(d.peak);  } )
        .attr( "width", (x_axisLength/arrayLength)-5 )
        .attr( "height", function(d){
        return yScale(d.peak); })
        .attr( "fill", "#8B786D")
        .on("mouseover", function(d){
        return tooltip.style("visibility", "visible").html(d.city + "<br>" + "Peak population: " +d3.format(",")(d.peak) + "<br>" + "2010 Population: " + +d3.format(",")(d.now_pop)); })
        .on("mousemove", function(d){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html(d.city + "<br>" + "Peak population: " + d3.format(",")(d.peak) + "<br>" + "2010 Population: " + d3.format(",")(d.now_pop)); })
        .on("mouseout", function(d){ return tooltip.style("visibility", "hidden"); });

    // Add axes
    svg.append("line")
        .attr("x1", 25)
        .attr("x2", 30 + x_axisLength)
        .attr("y1", h - y_offset)
        .attr("y2", h - y_offset)
        .attr("stroke-width", 2)
        .attr("stroke", "white");

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "middle")
        .text("Size of Population")
        .attr("transform", "translate(15, 150) rotate(-90)")
        .style("font-family", "open sans")
        .style("font-size", "12px")
        .style('fill','#555');
    
    
//    var i = d3.interpolate(1950, 2010);
    // add year text
    svg.append("text")
        .attr("class", "yearlabel")
        .attr("text-anchor", "middle")
        .style("font-family", "open sans")
        .style("font-size", "14px")
        .style('fill','#555')
        .text("1950")
        .attr("transform", "translate(75, 50)");    
    
    var svg2 = d3.select("#pop_describe")

    svg2.select("#btnPlay")
        .on("click", function() {    
    // text transition inspired by Mike Bostock's example at: https://bl.ocks.org/mbostock/7004f92cac972edef365
    var format = d3.format(",d");
    svg.select(".yearlabel")
        .transition()
        .duration(5000)
        .on("start", function repeat() {
        d3.active(this)
            .tween("text", function() {
            var that = d3.select(this),
                i = d3.interpolateNumber(1950, 2010);
            return function(t) { that.text(format(i(t))); };
        });
    svg.selectAll(".nowbars")
        .transition()
        .duration(5000)
        .attr( "x", function(d,i){ return (x_axisLength/arrayLength)*i + 30;  } )
        .attr( "y", function(d) { return h - y_offset - yScale(d.now_pop);  } )
        .attr( "width", (x_axisLength/arrayLength)-5 )
        .attr( "height", function(d){ return yScale(d.now_pop); });
    });
    });
    
    // add city names on x-axis
    svg.selectAll( "rect.now" )
        .data( popData )
        .enter()
        .append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .style("font-family", 'open sans')
        .style("font-size", "11px")
        .style('fill','#555')
        .text(function(d){ return d.city; })
        .attr("transform", function(d,i) {return ("translate(" + ((x_axisLength/arrayLength)*i +40) + ", 270) rotate(-90)"); });
    
    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("font-family", "open sans")
        .style("font-size", "12px")
        .style("color", "black")
        .style("background", "white")
        .style("padding", "4px")
        .style("border-radius", "6px")
        .style("opacity", 0.8)
        .style("border", "0px")
        .style("z-index", "10")
        .style("visibility", "hidden");
    var format = d3.format(",d");

};  