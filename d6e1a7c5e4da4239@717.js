import define1 from "./d229a22b4a9fdc4b@148.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["map (1).csv",new URL("./files/158ad237f22671e000e51566d26829020a05414daef44b7e702313bd8781b75f9baeb4078f057085da809a216fb450440df1e8a5aba8b9922ba532fcc711b62d",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Where to move?`
)});
  main.variable(observer("vi")).define("vi", ["d3","purvsmoveDIM","md","container","dc","countryDim","countrygroup","continentDim","pmd","polutvsmoveDIM","pmd2","mutable gdata","getgeodata"], function(d3,purvsmoveDIM,md,container,dc,countryDim,countrygroup,continentDim,pmd,polutvsmoveDIM,pmd2,$0,getgeodata)
{
  let titles = function(){
      var ret = [];
      for(var i = 0; i < 10; ++ i){
        ret.push("");
      }
    return ret;
  }()
  titles[0] = "Crime Rates based on different regions";
  titles[1] = "Quality of Life based on different regions";

  titles[2] = "Healthcare between different regions";
  titles[4] = "The accumulated review for different continent";
  titles[5] = "Movability vs Purchasing Power";
  titles[6] = "Movability vs Pollution";
  let xscale2 = d3.scaleLinear().domain([purvsmoveDIM.bottom(1)[0]["Purchase Power"], purvsmoveDIM.top(1)[0]["Purchase Power"]])
  let xscale3 = d3.scaleLinear().domain([purvsmoveDIM.bottom(1)[0]["Pollution"], purvsmoveDIM.top(1)[0]["Pollution"]])
  let view = md`${container('chart',titles)}`
  var pichartone = dc.pieChart(view.querySelector("#chart1"));  
  var picharttwo = dc.pieChart(view.querySelector("#chart2"));  
  var pichart3 = dc.pieChart(view.querySelector("#chart3")); 
  var barchart4 = dc.barChart(view.querySelector("#chart4"));
  var scatter5 =    dc.scatterPlot(view.querySelector("#chart5"));
  var scatter6 =    dc.scatterPlot(view.querySelector("#chart6"));
  
            pichartone .height(300) 
                     .slicesCap(4)

            .innerRadius(50)  .legend(dc.legend())

            .dimension(countryDim)
            .group(countrygroup).keyAccessor(p => (p.value.avgcrime )).valueAccessor((p) =>{ return (p.value.avgcrime)}).ordering(function(d){ return -d.value.avgcrime;})
            .on('pretransition', function(chart) {
        chart.selectAll('text.pie-slice').text(function(d) {
            if(d.data.key == 'Others')  
              return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
            else
              return "";
        })
    });
  
  
   picharttwo.height(300) 
                     .slicesCap(4)

            .innerRadius(50)  .legend(dc.legend())

            .dimension(countryDim)
            .group(countrygroup).keyAccessor(p => p.value.avgqol).valueAccessor(p => p.value.avgqol).ordering(function(d){return -d.value.avgqol;})
            .on('pretransition', function(chart) {
        chart.selectAll('text.pie-slice').text(function(d) {
            if(d.data.key == 'Others')  
              return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
            else
              return "";
        })
    });
  pichart3.height(300) 
                     .slicesCap(4)

            .innerRadius(50)  .legend(dc.legend())

            .dimension(countryDim)
            .group(countrygroup).keyAccessor((p) =>{
    
    if(typeof p === "undefined")
        return 0;
    return  p.value.avghealth
  
  }).valueAccessor((p) =>{
    
    if(typeof p === "undefined")
        return 0;
    return  p.value.avghealth
  
  }
                                                                                                
                                                                                                ).ordering(function(d){return -d.value.avghealth;})
            .on('pretransition', function(chart) {
        chart.selectAll('text.pie-slice').text(function(d) {
            if(d.data.key == 'Others')  
              return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
            else
              return "";
        })
    });
  
  barchart4.x(d3.scaleBand())
            .width(300)
            .height(180).xAxisLabel('Continent').xUnits(dc.units.ordinal)
            .elasticY(true)
            .dimension(continentDim)
            .group(continentDim.group().reduceSum(d=> d["Movehub Rating"]));
  
  scatter5.x(xscale2).width(250)
           .height(200)
           .dimension(purvsmoveDIM)
           .legend(dc.legend())
           .group(pmd, 'Movability ').colorAccessor(function(d) { return 1; })
    
    .colorAccessor(function (d, i){
                                                                      if(typeof d != 'undefined') {
                                                                        return d.value.continent;
                                                                      }
                                                                      else
                                                                        return -1; })
    scatter6.x(xscale3).width(400)
           .height(300)
           .dimension(polutvsmoveDIM)
           .legend(dc.legend())
           .group(pmd2, 'Movability ').colorAccessor(function(d) { return 1; })
    
    .colorAccessor(function (d, i){
                                                                      if(typeof d != 'undefined') {
                                                                        return d.value.continent;
                                                                      }
                                                                      else
                                                                        return -1; })
    ;
  var svg = d3.select(view).selectAll("#chart6").append("svg")
  dc.chartRegistry.list().forEach(function(chart) {
    chart.on('filtered', function() {
      $0.value = getgeodata();  // your event listener code goes here.
    });
});
 // scatter5
 //            .x(d3.scaleLinear().domain([-1, 1]))
 //            .xAxisLabel('purchase power vs movability')
 //            .dimension(purvsmoveDIM)
 //            .group(purvsmoveDIM.group()).keyAccessor(function(d) { return +d.key[0]; })
 //    .valueAccessor(function(d) { return +d.key[1]; }) .colorAccessor(function(d) { return +d.value; }).colors(["#ffffd9"])
 //           ;
  dc.renderAll();
  return  view      
}
);
  main.variable(observer("map")).define("map", ["vi","L"], function(vi,L)
{
  vi;
  var mapx = L.map('chart7')
  let mapInstance = mapx.setView([0, 0], 5)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 17
  }).addTo(mapInstance)
  return mapInstance
}
);
  main.define("initial gdata", ["getgeodata"], function(getgeodata){return(
getgeodata()
)});
  main.variable(observer("mutable gdata")).define("mutable gdata", ["Mutable", "initial gdata"], (M, _) => new M(_));
  main.variable(observer("gdata")).define("gdata", ["mutable gdata"], _ => _.generator);
  main.variable(observer("getgeodata")).define("getgeodata", ["allDim"], function(allDim){return(
function(){
  
  var geoData = [];
    allDim.top(Infinity).forEach( function (d) {
        geoData.push({ "lat" :d["lat"], "lng" : d["lng"] , "var": 1});
    });
 return geoData;
}
)});
  main.variable(observer()).define(["updatecircles"], function(updatecircles){return(
updatecircles()
)});
  main.variable(observer("updatecircles")).define("updatecircles", ["circlesLayer","gdata","L","circleScale"], function(circlesLayer,gdata,L,circleScale){return(
function (){
  circlesLayer.clearLayers()
  gdata.forEach( function(d) {
    let circle = L.circle([d.lat, d.lng], circleScale(d.magnitude), {
      color: '#fd8d3c',
      weight: 2,
      fillColor: '#fecc5c',
      fillOpacity: 0.5
    })
    circle.bindPopup("Magnitude: " + "<br>Time: " + d.dtg);
    circlesLayer.addLayer(circle) });
  
}
)});
  main.variable(observer("circleScale")).define("circleScale", ["d3"], function(d3){return(
d3.scaleLinear()
                .domain([0, 1])
                .range([0, 1])
)});
  main.variable(observer("circlesLayer")).define("circlesLayer", ["L","map"], function(L,map){return(
L.layerGroup().addTo(map)
)});
  main.variable(observer("color_scale")).define("color_scale", function(){return(
['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']
)});
  main.variable(observer()).define(["dc","color_scale"], function(dc,color_scale){return(
dc.config.defaultColors(color_scale)
)});
  main.variable(observer("pmd")).define("pmd", ["purvsmoveDIM","continenttocid"], function(purvsmoveDIM,continenttocid){return(
purvsmoveDIM.group().reduce(function(p, v) { 
      p.continent =  continenttocid[v["continent"]]
  return p;
    },
    function(p, v) {
        p.continent = 8
        return p;
    },
    function() { // init
        return { continent: 8};
    }
)
)});
  main.variable(observer("pmd2")).define("pmd2", ["polutvsmoveDIM","continenttocid"], function(polutvsmoveDIM,continenttocid){return(
polutvsmoveDIM.group().reduce(function(p, v) { 
      p.continent =  continenttocid[v["continent"]]
  return p;
    },
    function(p, v) {
        p.continent = 8
        return p;
    },
    function() { // init
        return { continent: 8};
    }
)
)});
  main.variable(observer("average_map")).define("average_map", function(){return(
function(mx, entryname ,country, counts, newdata, sgn) {
   if(typeof mx === 'undefined') {
      return;
     }
      var hasoldvalue = mx.has(entryname);
      var oldvalue = 0;

      if(hasoldvalue){
         oldvalue = mx.get(entryname);
         oldvalue = oldvalue * (counts-(sgn) * 1);
         oldvalue += newdata;
         oldvalue /= counts;
      }else{
         oldvalue = newdata;
      }
 
      mx.set(entryname, oldvalue);
      return mx;
}
)});
  main.variable(observer()).define(["countrygroup"], function(countrygroup){return(
countrygroup.all()
)});
  main.variable(observer()).define(["countrygroup"], function(countrygroup){return(
countrygroup.all()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## CSV File`
)});
  main.variable(observer("csvdata")).define("csvdata", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("map (1).csv").text(), d3.autoType)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Cross Filter`
)});
  main.variable(observer()).define(["countrygroup"], function(countrygroup){return(
countrygroup.all()
)});
  main.variable(observer("cou2")).define("cou2", ["countryDim","average_map"], function(countryDim,average_map){return(
countryDim.group().reduce(function(p, v) { 
     var country = v["country"];
        p.map.set(country, p.map.has(country) ? p.map.get(country) + 1 : 1);
      p.mapx = average_map(p.mapx,"avgcrime",  country, p.map.get(country), v["Crime Rating"], 1);
      p.mapx = average_map(p.mapx,"avgpur",  country, p.map.get(country), v["Purchase Power"], 1);
      p.mapx = average_map(p.mapx,"avgrating",  country, p.map.get(country), v["Movehub Rating"], 1);
  p.mapx = average_map(p.mapx,"avghealth",  country, p.map.get(country), v["Health Care"], 1);
  p.mapx = average_map(p.mapx,"avgpollution",  country, p.map.get(country), v["Pollution"], 1);

  

 
  return p;
    },
    function(p, v) {
          var country = v["country"];
          p.map.set(country, p.map.has(country) ? p.map.get(country) - 1 : 1);
          p.mapx = average_map(p.mapx, "avgcrime", country, p.map.get(country), -v["Crime Rating"],-1);
          p.mapx = average_map(p.mapx, "avgpur", country, p.map.get(country), -v["Purchase Power"],-1);
          p.mapx = average_map(p.mapx, "avgrating", country, p.map.get(country), -v["Movehub Rating"],-1);
          p.mapx = average_map(p.mapx, "avghealth", country, p.map.get(country), -v["Health Care"],-1);
           p.mapx = average_map(p.mapx, "avgpollution", country, p.map.get(country), -v["Pollution"],-1);
        return p;
    },
    function() { // init
        return { avgcrime : 0, avgpur : 0, avgrating: 0,  avghealth : 0, avgpollution:0, total: 0};
    }
)
)});
  main.variable(observer("countrygroup")).define("countrygroup", ["countryDim"], function(countryDim){return(
countryDim.group().reduce(function(p, v) { 
     
  p.total += 1;
  p.avgcrime = (p.avgcrime*(p.total-1) +v["Crime Rating"])/p.total;
  p.avgpur = (p.avgpur*(p.total-1) +v["Purchase Power"])/p.total; 
  p.avgrating  = (p.avgrating*(p.total-1) +v["Movehub Rating"])/p.total;
  p.avghealth =  (p.avghealth*(p.total-1) +v["Health Care"])/p.total;
  p.avgpollution = (p.avgpollution*(p.total-1) +v["Pollution"])/p.total;
  p.avgqol = (p.avgqol*(p.total-1) +v["Quality of Life"])/p.total;
  p.lng = v["lng"]
   p.lat = v["lat"]
 
  return p;
    },
    function(p, v) {
           p.total -= 1;
  
 p.avgcrime = (p.avgcrime*(p.total+1) -v["Crime Rating"])/p.total;
  p.avgpur = (p.avgpur*(p.total+1) -v["Purchase Power"])/p.total; 
  p.avgrating  = (p.avgrating*(p.total+1) -v["Movehub Rating"])/p.total;
  p.avghealth =  (p.avghealth*(p.total+1) -v["Health Care"])/p.total;
  p.avgpollution = (p.avgpollution*(p.total+1) -v["Pollution"])/p.total;
  p.avgqol = (p.avgqol*(p.total+1) -v["Quality of Life"])/p.total;
  
  if(p.total == 0)
  {
    return  { avgcrime :0 , avgpur : 0, avgrating: 0,  avghealth : 0, avgpollution:0, total: 0, avgqol : 0, lng : 0, lat : 0};
  }
        return p;
    },
    function() { // init
        return { avgcrime : 0, avgpur : 0, avgrating: 0,  avghealth : 0, avgpollution:0, total: 0, avgqol : 0, lng : 0, lat : 0};
    }
)
)});
  main.variable(observer("data")).define("data", ["crossfilter","csvdata"], function(crossfilter,csvdata){return(
crossfilter(csvdata)
)});
  main.variable(observer("continentDim")).define("continentDim", ["data"], function(data){return(
data.dimension(d => d.continent)
)});
  main.variable(observer("continenttocid")).define("continenttocid", ["continentDim"], function(continentDim){return(
function(){
  var t  = continentDim.group().all();
  var ret = {};
  for(var i =0; i < t.length; ++i){
    ret[t[i].key] = i;
  }
  return ret;
}()
)});
  main.variable(observer("countryDim")).define("countryDim", ["data"], function(data){return(
data.dimension(d => d.country)
)});
  main.variable(observer("longiDim")).define("longiDim", ["data"], function(data){return(
data.dimension(d => d.lng)
)});
  main.variable(observer("latDim")).define("latDim", ["data"], function(data){return(
data.dimension(d => d.lat)
)});
  main.variable(observer("purvsmoveDIM")).define("purvsmoveDIM", ["data"], function(data){return(
data.dimension(d => [+d["Purchase Power"],+d["Movehub Rating"]])
)});
  main.variable(observer("polutvsmoveDIM")).define("polutvsmoveDIM", ["data"], function(data){return(
data.dimension(d => [+d["Pollution"],+d["Movehub Rating"]])
)});
  main.variable(observer("allDim")).define("allDim", ["data"], function(data){return(
data.dimension(function(d) {return d;})
)});
  main.variable(observer("test")).define("test", ["latDim"], function(latDim){return(
latDim.group().all()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## HTML containers`
)});
  main.variable(observer("container")).define("container", function(){return(
function container(id, titles) { 
  return `
<div class='container'>
<div class='content'>
<div class='container'>
<div class='row'>
    <div class='col' id='chart1' style="">
      <h4> ${titles[0]}</h4>
    </div>
    <div class='col' id='chart2' style="">
      <h4> ${titles[1]} </h4>
    </div>
    <div class='col' id='chart3' style="">
      <h4> ${titles[2]}</h4>
    </div>
  </div>
</div>
<div class='row'>
    <div class='col' id='chart3' style="">
      <h4> ${titles[3]}</h4>
    </div>
    <div class='col' id='chart4' style="">
      <h4> ${titles[4]} </h4>
    </div>
    <div class='col' id='chart5' style="">
      <h4> ${titles[5]}</h4>
    </div>
</div>

<div class='row'>
    
    <div class="col-4">
          <div class='col-4' id='chart6' style="">
              <h4> ${titles[6]} </h4>
            </div>
        </div>
<div class="col-4"></div>
    <div class='col-4' id='chart7' style="">
      <h4> ${titles[7]}</h4>
    </div>
  
</div>
</div>
</div>`
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## DC.js`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## CSS Files`
)});
  main.variable(observer()).define(["collapsedCSS"], function(collapsedCSS){return(
collapsedCSS('DC.JS styles')`
.dc-chart path.dc-symbol, .dc-legend g.dc-legend-item.fadeout {
  fill-opacity: 0.5;
  stroke-opacity: 0.5; }

.dc-chart rect.bar {
  stroke: none;
  cursor: pointer; }
  .dc-chart rect.bar:hover {
    fill-opacity: .5; }

.dc-chart rect.deselected {
  stroke: none;
  fill: #ccc; }

.dc-chart .pie-slice {
  fill: #fff;
  font-size: 12px;
  cursor: pointer; }
  .dc-chart .pie-slice.external {
    fill: #000; }
  .dc-chart .pie-slice :hover, .dc-chart .pie-slice.highlight {
    fill-opacity: .8; }

.dc-chart .pie-path {
  fill: none;
  stroke-width: 2px;
  stroke: #000;
  opacity: 0.4; }

.dc-chart .selected path, .dc-chart .selected circle {
  stroke-width: 3;
  stroke: #ccc;
  fill-opacity: 1; }

.dc-chart .deselected path, .dc-chart .deselected circle {
  stroke: none;
  fill-opacity: .5;
  fill: #ccc; }

.dc-chart .axis path, .dc-chart .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges; }

.dc-chart .axis text {
  font: 10px sans-serif; }

.dc-chart .grid-line, .dc-chart .axis .grid-line, .dc-chart .grid-line line, .dc-chart .axis .grid-line line {
  fill: none;
  stroke: #ccc;
  shape-rendering: crispEdges; }

.dc-chart .brush rect.selection {
  fill: #4682b4;
  fill-opacity: .125; }

.dc-chart .brush .custom-brush-handle {
  fill: #eee;
  stroke: #666;
  cursor: ew-resize; }

.dc-chart path.line {
  fill: none;
  stroke-width: 1.5px; }

.dc-chart path.area {
  fill-opacity: .3;
  stroke: none; }

.dc-chart path.highlight {
  stroke-width: 3;
  fill-opacity: 1;
  stroke-opacity: 1; }

.dc-chart g.state {
  cursor: pointer; }
  .dc-chart g.state :hover {
    fill-opacity: .8; }
  .dc-chart g.state path {
    stroke: #fff; }

.dc-chart g.deselected path {
  fill: #808080; }

.dc-chart g.deselected text {
  display: none; }

.dc-chart g.row rect {
  fill-opacity: 0.8;
  cursor: pointer; }
  .dc-chart g.row rect:hover {
    fill-opacity: 0.6; }

.dc-chart g.row text {
  fill: #fff;
  font-size: 12px;
  cursor: pointer; }

.dc-chart g.dc-tooltip path {
  fill: none;
  stroke: #808080;
  stroke-opacity: .8; }

.dc-chart g.county path {
  stroke: #fff;
  fill: none; }

.dc-chart g.debug rect {
  fill: #00f;
  fill-opacity: .2; }

.dc-chart g.axis text {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none; }

.dc-chart .node {
  font-size: 0.7em;
  cursor: pointer; }
  .dc-chart .node :hover {
    fill-opacity: .8; }

.dc-chart .bubble {
  stroke: none;
  fill-opacity: 0.6; }

.dc-chart .highlight {
  fill-opacity: 1;
  stroke-opacity: 1; }

.dc-chart .fadeout {
  fill-opacity: 0.2;
  stroke-opacity: 0.2; }

.dc-chart .box text {
  font: 10px sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none; }

.dc-chart .box line {
  fill: #fff; }

.dc-chart .box rect, .dc-chart .box line, .dc-chart .box circle {
  stroke: #000;
  stroke-width: 1.5px; }

.dc-chart .box .center {
  stroke-dasharray: 3, 3; }

.dc-chart .box .data {
  stroke: none;
  stroke-width: 0px; }

.dc-chart .box .outlier {
  fill: none;
  stroke: #ccc; }

.dc-chart .box .outlierBold {
  fill: red;
  stroke: none; }

.dc-chart .box.deselected {
  opacity: 0.5; }
  .dc-chart .box.deselected .box {
    fill: #ccc; }

.dc-chart .symbol {
  stroke: none; }

.dc-chart .heatmap .box-group.deselected rect {
  stroke: none;
  fill-opacity: 0.5;
  fill: #ccc; }

.dc-chart .heatmap g.axis text {
  pointer-events: all;
  cursor: pointer; }

.dc-chart .empty-chart .pie-slice {
  cursor: default; }
  .dc-chart .empty-chart .pie-slice path {
    fill: #fee;
    cursor: default; }

.dc-data-count {
  float: right;
  margin-top: 15px;
  margin-right: 15px; }
  .dc-data-count .filter-count, .dc-data-count .total-count {
    color: #3182bd;
    font-weight: bold; }

.dc-legend {
  font-size: 11px; }
  .dc-legend .dc-legend-item {
    cursor: pointer; }
  .dc-legend g.dc-legend-item.selected {
    fill: blue; }

.dc-hard .number-display {
  float: none; }

div.dc-html-legend {
  overflow-y: auto;
  overflow-x: hidden;
  height: inherit;
  float: right;
  padding-right: 2px; }
  div.dc-html-legend .dc-legend-item-horizontal {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer; }
    div.dc-html-legend .dc-legend-item-horizontal.selected {
      background-color: #3182bd;
      color: white; }
  div.dc-html-legend .dc-legend-item-vertical {
    display: block;
    margin-top: 5px;
    padding-top: 1px;
    padding-bottom: 1px;
    cursor: pointer; }
    div.dc-html-legend .dc-legend-item-vertical.selected {
      background-color: #3182bd;
      color: white; }
  div.dc-html-legend .dc-legend-item-color {
    display: table-cell;
    width: 12px;
    height: 12px; }
  div.dc-html-legend .dc-legend-item-label {
    line-height: 12px;
    display: table-cell;
    vertical-align: middle;
    padding-left: 3px;
    padding-right: 3px;
    font-size: 0.75em; }

.dc-html-legend-container {
  height: inherit; }
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<code>css</code> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="https://unpkg.com/dc@4/dist/style/dc.css" />
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
<style>
    #mapid {
      width: 500px;
      height: 300px;
    }
</style>

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Required Libraries`
)});
  main.variable(observer("L")).define("L", ["require"], function(require){return(
require('leaflet@1.6.0')
)});
  const child1 = runtime.module(define1);
  main.import("collapsedCSS", child1);
  main.variable(observer("dc")).define("dc", ["require"], function(require){return(
require("dc")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@v5")
)});
  main.variable(observer("crossfilter")).define("crossfilter", ["require"], function(require){return(
require("crossfilter2")
)});
  main.variable(observer("bootstrap")).define("bootstrap", ["require"], function(require){return(
require('bootstrap')
)});
  main.variable(observer("$")).define("$", ["require"], function(require){return(
require('jquery').then(jquery => {
  window.jquery = jquery;
  return require('popper@1.0.1/index.js').catch(() => jquery);
})
)});
  return main;
}
