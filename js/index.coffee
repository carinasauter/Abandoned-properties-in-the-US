window.main = () ->
    width = 960
    height = 500
    
    svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)
        
    ### first example ###
    ex1 = svg.append('g')
        .attr('transform', 'translate(50 50)')
        
    ### draw links ###
    ex1.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M100 100 L300 100')
        
    ex1.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M200 300 L300 100')
        
    ex1.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M200 300 L300 250')
        
    ex1.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M300 250 L100 100')
        
    ### draw nodes ###
    ex1.append('circle')
        .attr('class', 'node')
        .attr('cx', 100)
        .attr('cy', 100)
        .attr('r', 20)
        
    ex1.append('circle')
        .attr('class', 'node')
        .attr('cx', 300)
        .attr('cy', 100)
        .attr('r', 20)
        
    ex1.append('circle')
        .attr('class', 'node')
        .attr('cx', 200)
        .attr('cy', 300)
        .attr('r', 20)
        
    ex1.append('circle')
        .attr('class', 'node')
        .attr('cx', 300)
        .attr('cy', 250)
        .attr('r', 20)
        
    ### second example ###
    ex2 = svg.append('g')
        .attr('transform', 'translate(450 50)')
    
    ### draw links ###
    ex2.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M100 100 S200 0 300 100')
        
    ex2.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M200 300 S200 200 300 100')
        
    ex2.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M200 300 S300 350 300 250')
        
    ex2.append('path')
        .attr('class', 'flowline')
        .attr('d', 'M300 250 L100 100')
        
    ### draw nodes ###
    ex2.append('circle')
        .attr('class', 'node')
        .attr('cx', 100)
        .attr('cy', 100)
        .attr('r', 20)
        
    ex2.append('circle')
        .attr('class', 'node')
        .attr('cx', 300)
        .attr('cy', 100)
        .attr('r', 20)
        
    ex2.append('circle')
        .attr('class', 'node')
        .attr('cx', 200)
        .attr('cy', 300)
        .attr('r', 20)
        
    ex2.append('circle')
        .attr('class', 'node')
        .attr('cx', 300)
        .attr('cy', 250)
        .attr('r', 20)