function docReady()
        {



        }
function gridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 50;
	var height = 50;
	var click = 0;
	var count=0;




	          window.addEventListener('keydown', moveSelection);

          var rows = prompt("Please enter number of rows", "10");
    if (rows != null) {
        var r= rows;
        
    }

    var columns = prompt("Please enter number of columns", "10");
    if (columns != null) {
        var c= columns;
       
    }


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0]= document.getElementById("mainImg")



imgArray[1] = new Image();
imgArray[1]= document.getElementById("mainImg")
imgArray[2] = new Image();
imgArray[2] = document.getElementById("mainImg")

imgArray[3] = new Image();
imgArray[3] =document.getElementById("mainImg")

imgArray[4] = new Image();
imgArray[4] = document.getElementById("mainImg")
imgArray[5] = new Image();
imgArray[5]= document.getElementById("mainImg")

imgArray[6] = new Image();
imgArray[6] = document.getElementById("mainImg")

imgArray[7] = new Image();
imgArray[7] = document.getElementById("mainImg")


imgArray[8] = new Image();
imgArray[8] = document.getElementById("mainImg")


imgArray[9] = new Image();
imgArray[9] = document.getElementById("mainImg")


imgArray[10] = new Image();
imgArray[10] = document.getElementById("mainImg")


imgArray[11] = new Image();
imgArray[11] = document.getElementById("mainImg")

    for(var i=0;i<r;i++){
    	

    	var element = imgArray[i];
    	element.style.top=0;
    	element.style.left=0;
    	
    	
    	element.style.left= parseInt(element.style.left)+ Math.floor(Math.random() * 10) *50 + 'px';
    	element.style.top= parseInt(element.style.top)+ Math.floor(Math.random() * 10) *50 + 'px';
console.log(element)





  }



    	 // var img= $("#image2").clone();
    	 // console.log(img )
    	 

    	 // var strr= img.css("left")
    	 // var strc=img.css("top")
    	 // console.log(Math.floor(Math.random() * 10))
    	 
    	 // var k= parseInt(strr) + Math.floor(Math.random() * 10) *50 + 'px';
    	 // var z= parseInt(strc) + Math.floor(Math.random() * 10) *50 + 'px';
    	
    	 //  img.css( "margin-left",k)
    	 //  img.css( "margin-top",z)
    	
    

          
            function leftArrowPressed() {
            	 var element = document.getElementById("image1");
            if(parseInt(element.style.left)<=8){
            	element.style.left=8+"px";
            	
            }
            else{
            count++;
            	
           
            element.style.left = parseInt(element.style.left) - 50 + 'px';
            }
            }

            function rightArrowPressed() {
            	var element = document.getElementById("image1");

            if(parseInt(element.style.left)>=8+(50*(r-1))){
            	element.style.left=8+(50*(r-1))+"px";
            	
            }
            else{
            count++;
            
            
            element.style.left = parseInt(element.style.left) + 50 + 'px';
            }
            }

            function upArrowPressed() {
            	 var element = document.getElementById("image1");
            	if(parseInt(element.style.top)<=8){
            	element.style.top=8+"px";
            	
            }
            else{
            count++;
            
           
            element.style.top = parseInt(element.style.top) - 50 + 'px';
           } 
            }

            function downArrowPressed() {
            	var element = document.getElementById("image1");
            	if(parseInt(element.style.top)>=8+(50*(c-1))){
            	element.style.top=8+(50*(c-1))+"px";
            	
            }
            else{
            count++;
            
            
            element.style.top = parseInt(element.style.top) + 50 + 'px';
            }
            
            }

            function moveSelection(evt) {
            	
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:
                    downArrowPressed();
                    break;
                    }
                };


	

    var element1 = document.getElementById("image1");
    if(r%2!=0){

    element1.style.left = parseInt(element1.style.left)  +(50*((r-1)/2)) + 'px';
}


if(c%2!=0){

    element1.style.top = parseInt(element1.style.top)  +(50*((c-1)/2)) + 'px';
}

if(r%2==0 && c%2==0){
	 element1.style.left = parseInt(element1.style.left)  +(50*(r/2)) + 'px';
	 element1.style.top = parseInt(element1.style.top)  +(50*(c/2)) + 'px';

}
    console.log(element1.style.left)
    console.log(element1.style.top)

	// iterate for rows	
	for (var row = 0; row < r; row++) {
		data.push( new Array() );
		
		// iterate for cells/columns inside rows
		for (var column = 0; column < c; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;	
	}


// var element = document.getElementById("image2");
// 	for( var rnd=0; rnd<r; rnd++){
    	
    	
//             element.style.left = parseInt(element.style.left) + Math.floor(Math.random()*10 +50) + 'px';
//             console.log(element.style.left)
    	
//     }
	
	return data;
}

var gridData = gridData();	
// I like to log the data to the console for quick debugging
console.log(gridData);





var grid = d3.select("#grid")
	.append("svg")
	.attr("width","510px")
	.attr("height","510px");
	
var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");
	
var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.style("fill", "#fff")
	.style("stroke", "#222")
	// .on('click', function(d) {
 //       d.click ++;
 //       if ((d.click)%4 == 0 ) { d3.select(this).style("fill","#fff"); }
	//    if ((d.click)%4 == 1 ) { d3.select(this).style("fill","#2C93E8"); }
	//    if ((d.click)%4 == 2 ) { d3.select(this).style("fill","#F56C4E"); }
	//    if ((d.click)%4 == 3 ) { d3.select(this).style("fill","#838690"); }
 //    });