
function chartInfo(){
    textSize(16);
    textAlign(LEFT);
    fill('black');
    rectMode(CORNER);
    text("Global Average Absolute Sea Level Change, 1880-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015.This data contains cumulative changes in sea level for the world’s oceans since 1880, based on a combination of long-term tide gauge measurements and recent satellite measurements. It shows average absolute sea level change, which refers to the height of the ocean surface, regardless of whether nearby land is rising or falling. Satellite data are based solely on measured sea level, while the long-term tide gauge data include a small correction factor because the size and shape of the oceans are changing slowly over time. On average, the ocean floor has been gradually sinking since the last Ice Age peak, 20,000 years ago.",50,height/4+80,width/4);
    textSize(30);
    text("Global Average Absolute Sea Level Change, 1880-2014", 50,height/4-120,width/4);
  }
  
  let dataMin, dataMax=0;
  function minMax(){
    for(let i=0;i<numRows;i++) {
      if(table.getNum(i,1)>dataMax) {
        dataMax = table.getNum(i,1);
      }
    }
    dataMin = dataMax;
    for(let i =0; i<numRows; i++) {
      if(table.getNum(i,1)<dataMin){
        dataMin = table.getNum(i,1);
      }
    }
    print("max value "+ dataMax +" min value" +dataMin)
  }
  
  function newButton(x,y,w,h,t,tsize){
    if(dist(mouseX,mouseY,x,y)<w/2){
      fill('rgba(0,0,255,0.2)');
      cursor(HAND);
    }else{
      cursor(CROSS);
      noFill();
    }
    rectMode(CENTER);
    noFill();
    strokeWeight(1);
    stroke('black');
    rect(x,y,w,h);
    
    noStroke();
    fill('black');
    textAlign(CENTER,CENTER);
    textSize(tsize);
    text(t,x,y);
  }
  
  function newSlider(x,y,w,h,cX,cY) {
    fill('black');
    noStroke();
    rect(x,y,w,h);
    fill(c);
    circle(cX,cY,h+12);
    if(dist(mouseX,mouseY,x,y)<w/2){
      cursor(HAND);
    } else {
      cursor(CROSS);
    }
    
  }