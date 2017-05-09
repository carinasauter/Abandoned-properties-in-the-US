var svgContainer = d3.select("#viz").append("svg")
    .attr("width", 600)
    .attr("height", 600);


var canvasWidth = 600
var canvasHeight = 600
var svg = d3.select('svg');

// Gabe's code

function positionForPlaceOnCircle(percent, r,  center) {            
    if (center == undefined) center = {"x": canvasWidth/2.0, "y" : canvasHeight/2.0}
    var angle = (Math.PI * 2.0) * percent;         
    center.x = center.x + (Math.sin(angle) * r)
    center.y -= Math.cos(angle) * r 
    return center;
}

var radius = 200
var circleWidth = 5.0
var linePos1 =  positionForPlaceOnCircle(.99, radius + circleWidth/2.0)
var linePos2 =  positionForPlaceOnCircle(.115, radius + circleWidth/2.0)
var linePos3 =  positionForPlaceOnCircle(.24, radius + circleWidth/2.0)
var linePos4 =  positionForPlaceOnCircle(.365, radius + circleWidth/2.0)
var linePos5 =  positionForPlaceOnCircle(.49, radius + circleWidth/2.0)
var linePos6 =  positionForPlaceOnCircle(.615, radius + circleWidth/2.0)
var linePos7 =  positionForPlaceOnCircle(.74, radius + circleWidth/2.0)
var linePos8 =  positionForPlaceOnCircle(.865, radius + circleWidth/2.0)
var circPos1 =  positionForPlaceOnCircle(0, radius + circleWidth/2.0)
var circPos2 =  positionForPlaceOnCircle(.125, radius + circleWidth/2.0)
var circPos3 =  positionForPlaceOnCircle(.25, radius + circleWidth/2.0)
var circPos4 =  positionForPlaceOnCircle(.375, radius + circleWidth/2.0)
var circPos5 =  positionForPlaceOnCircle(.5, radius + circleWidth/2.0)
var circPos6 =  positionForPlaceOnCircle(.625, radius + circleWidth/2.0)
var circPos7 =  positionForPlaceOnCircle(.75, radius + circleWidth/2.0)
var circPos8 =  positionForPlaceOnCircle(.875, radius + circleWidth/2.0)
var circTransform1 = 'translate(' + circPos1.x + ',' + circPos1.y + ')'
var circTransform2 = 'translate(' + circPos2.x + ',' + circPos2.y + ')'
var circTransform3 = 'translate(' + circPos3.x + ',' + circPos3.y + ')'
var circTransform4 = 'translate(' + circPos4.x + ',' + circPos4.y + ')'
var circTransform5 = 'translate(' + circPos5.x + ',' + circPos5.y + ')'
var circTransform6 = 'translate(' + circPos6.x + ',' + circPos6.y + ')'
var circTransform7 = 'translate(' + circPos7.x + ',' + circPos7.y + ')'
var circTransform8 = 'translate(' + circPos8.x + ',' + circPos8.y + ')'

var tooltip = d3.select("#viz")
            .append("div")
            .style("position", "absolute")
            .style("font-family", "Merriweather")
            .style("font-size", "12px")
            .style("color", "black")
            .style("background", "white")
            .style("padding", "4px")
            .style("border-radius", "6px")
            .style("opacity", 0.8)
            .style("border", "0px")
            .style("z-index", "10")
            .style("visibility", "hidden");

// end Gabe's code


defs = svg.append("defs")


defs.append("marker")
        .attrs({
            "id":"arrow",
            "viewBox":"0 -5 10 10",
            "refX":5,
            "refY":0,
            "markerWidth":4,
            "markerHeight":4,
            "fill":'black',
            "opacity": 0.8,
            "orient":"auto"
        })
        .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("class","arrowHead");

// defs.append("marker")
//         .attrs({
//             "id":"turtle",
//             "viewBox":"0 0 100 100",
//             "refX":50,
//             "refY":50,
//             "markerWidth":10,
//             "markerHeight":10,
//             "orient":"auto"
//         });


// var carinaArc = d3.arc()
//  .innerRadius(radius)
//  .outerRadius(radius + circleWidth)
//  .startAngle(0)
//  .endAngle(Math.PI * 2)

// svg.append('path')
//  .attr("d", carinaArc)
//  .attr("fill", "black")
//  .attr('class', 'flowline')
//  .attr("transform", 'translate(' + canvasWidth/2.0 + ',' + canvasHeight/2.0 + ')')


var circle0 = svg.append("circle")
    .attr("r", radius + 2.5)
    .style("fill", "none")
    .attr('class', 'flowline')
    .attr("transform", 'translate(' + canvasWidth/2.0 + ',' + canvasHeight/2.0 + ')');


var line1 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos1.x,
    "y1":linePos1.y,
    "x2":linePos1.x,
    "y2":linePos1.y
    });

var line2 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos2.x,
    "y1":linePos2.y,
    "x2":linePos2.x + 1,
    "y2":linePos2.y + 1
});


var line3 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos3.x,
    "y1":linePos3.y,
    "x2":linePos3.x,
    "y2":linePos3.y + 0.5
});

var line4 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos4.x,
    "y1":linePos4.y - 0.4,
    "x2":linePos4.x -0.4,
    "y2":linePos4.y
});

var line5 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos5.x,
    "y1":linePos5.y,
    "x2":linePos5.x - 0.1,
    "y2":linePos5.y
});

var line6 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos6.x,
    "y1":linePos6.y,
    "x2":linePos6.x - 1,
    "y2":linePos6.y - 1
});

var line7 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos7.x,
    "y1":linePos7.y,
    "x2":linePos7.x,
    "y2":linePos7.y - 1
});

var line8 = svg.append("line")
    .attrs({
    "class":"arrow",
    "marker-end":"url(#arrow)",
    "x1":linePos8.x,
    "y1":linePos8.y,
    "x2":linePos8.x + 1,
    "y2":linePos8.y - 1
});



var circle1 = svg.append("circle")
                .attr("r", 5)
                .attr("fill", "blue")
                .attr('stroke', 'blue')
                .attr("transform", circTransform1)
                .on("mouseover", function(){
                    return tooltip.style("visibility", "visible").html("The economic situation worsens.");
                })
                .on("mousemove", function(){
                    return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px")
                    .html("The economic situation worsens.");
                })
                .on("mouseout", function(){
                    return tooltip.style("visibility", "hidden");
                });


var circle2 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform2)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html("The unemployment rate increases as " + "<br>" + "companies cut down costs.");
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px")
        .html("The unemployment rate increases as " + "<br>" + "companies cut down costs.");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });


var circle3 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform3)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html("Without a job, people default on their mortgages."+ "<br>" + "Their homes enter foreclosure.");
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px")
        .html("Without a job, people default on their mortgages."+ "<br>" + "Their homes enter foreclosure.");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

var circle4 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform4)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html("Without a home and without the prospect" + '<br>' + "of a new job, people start leaving the city.");
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html("Without a home and without the prospect" + '<br>' + "of a new job, people start leaving the city.");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

var circle5 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform5)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible")
        .html("In the economic climate, the banks and owners" + "<br>" + "find no buyers for the houses. Houses are abandoned.");
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html("In the economic climate, the banks and owners" + "<br>" + "find no buyers for the houses. Houses are abandoned.");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

var circle6 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform6)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html("The abandoned homes decrease the quality of life" + '<br>' + 'in the neighborhood as gangs and drug addicts take over the homes.');
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html("The abandoned homes decrease the quality of life" + '<br>' + 'in the neighborhood as gangs and drug addicts take over the homes.');
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

var circle7 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform7)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html("More people move away.");
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html("More people move away.");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

var circle8 = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#6D4C3D")
    .attr('stroke', '#6D4C3D')
    .attr("transform", circTransform8)
    .on("mouseover", function(){
        return tooltip.style("visibility", "visible").html('Less people means less potential employees and less money spent.');
    })
    .on("mousemove", function(){
        return tooltip.style("top", (event.pageY-45)+"px").style("left",(event.pageX+5)+"px").html('Less people means less potential' + '<br>' +'employees and less money spent.');
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("Hover over the")
    .attr("transform", "translate(239, 280)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("points")
    .attr("transform", "translate(313, 280)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .style('fill','#6D4C3D');

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("to explore")
    .attr("transform", "translate(372, 280)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("a common narrative that leads")
    .attr("transform", "translate(300, 300)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("to properties being abandoned.")
    .attr("transform", "translate(300, 320)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');


svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("Start with the")
    .attr("transform", "translate(257, 340)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');

svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("blue")
    .attr("transform", "translate(320, 340)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .style('fill','blue');


svg.append("text")
    .attr("class", "clabel")
    .attr("text-anchor", "middle")
    .text("circle.")
    .attr("transform", "translate(358, 340)")
    .style("font-family", "open sans")
    .style("font-size", "14px")
    .style('fill','#555');


