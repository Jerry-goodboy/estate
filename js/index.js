function map1 (Map, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
					ImageServiceParameters, parser) {
	
					var map = new Map("map1",{
							  //nav:true,//8个pan 箭头
							  slider:false,//左上的缩放 +/-;
							  logo:false,//右下的esri logo
							  showAttribution:false,//右下的gisNeu (logo左侧)
							  extent: new Extent({xmin:117.67255102256046,ymin:39.06648939147723,xmax:117.91507758557971,ymax:39.2233553582866})
							});
					var tms = new ArcGISTiledMapServiceLayer("http://10.254.11.105:8399/arcgis/rest/services/yingxiang/MapServer");
					
					var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园'];

					var queryCondition = "MC in ('和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园')";

					
					var qt = new QueryTask('http://10.254.11.101:8399/arcgis/rest/services/POIFW_js/MapServer/0');
					var query = new Query();
					query.returnGeometry = true;
					query.outFields = ["*"];
					//query.outSpatialReference = map.spatialReference;
					query.where = queryCondition;

					var parkgraphicsLayer = new GraphicsLayer();

					qt.execute(query,function(results){
						var parkgraphicsAry = results.features;
				    	for (var i=0;i<results.features.length; i++)
						{
							var graphic=results.features[i];
							var genColor = [];
							var genSize = 0;

							if(i<5){
								genColor = [207, 34, 171, 0.6];
								genSize = 20;
							}else if (i>9 && i<15){
								genColor = [0, 34, 251, 0.6];
								genSize = 15;
							}else {
								genColor = [20, 234, 21, 0.6];
								genSize = 10;
							}
							
							graphic.setSymbol(genCircleSymbol(genSize, genColor));
							parkgraphicsLayer.add(graphic);
				    	}

					},function(){
						alert("查询错误")
					});

					map.addLayer(tms);
					map.addLayer(parkgraphicsLayer);

					function genCircleSymbol (size, color) {
						return new SimpleMarkerSymbol(
					          SimpleMarkerSymbol.STYLE_CIRCLE, 
					          size, 
					          new SimpleLineSymbol(
					            SimpleLineSymbol.STYLE_NULL, 
					            new Color([247, 34, 101, 0.9]), 
					            1
					          ),
					          new Color(color)
					        );
					}
}

function map2 (Map, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
					ImageServiceParameters, parser) {
	
					var map = new Map("map2",{
							  //nav:true,//8个pan 箭头
							  slider:false,//左上的缩放 +/-;
							  logo:false,//右下的esri logo
							  showAttribution:false,//右下的gisNeu (logo左侧)
							  extent: new Extent({xmin:117.67255102256046,ymin:39.06648939147723,xmax:117.91507758557971,ymax:39.2233553582866})
							});
					var tms = new ArcGISTiledMapServiceLayer("http://10.254.11.105:8399/arcgis/rest/services/yingxiang/MapServer");
					
					var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园'];

					var queryCondition = "MC in ('和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园')";

					
					var qt = new QueryTask('http://10.254.11.101:8399/arcgis/rest/services/POIFW_js/MapServer/0');
					var query = new Query();
					query.returnGeometry = true;
					query.outFields = ["*"];
					//query.outSpatialReference = map.spatialReference;
					query.where = queryCondition;

					var parkgraphicsLayer = new GraphicsLayer();

					qt.execute(query,function(results){
						var parkgraphicsAry = results.features;
				    	for (var i=0;i<results.features.length; i++)
						{
							var graphic=results.features[i];
							var genColor = [];
							var genSize = 0;

							if(i<10){
								genColor = [207, 34, 171, 0.6];
								genSize = 20;
							}else if (i>9 && i<20){
								genColor = [0, 34, 251, 0.6];
								genSize = 15;
							}else {
								genColor = [20, 234, 21, 0.6];
								genSize = 10;
							}
							
							graphic.setSymbol(genCircleSymbol(genSize, genColor));
							parkgraphicsLayer.add(graphic);
				    	}

					},function(){
						alert("查询错误")
					});

					map.addLayer(tms);
					map.addLayer(parkgraphicsLayer);

					function genCircleSymbol (size, color) {
						return new SimpleMarkerSymbol(
					          SimpleMarkerSymbol.STYLE_CIRCLE, 
					          size, 
					          new SimpleLineSymbol(
					            SimpleLineSymbol.STYLE_NULL, 
					            new Color([247, 34, 101, 0.9]), 
					            1
					          ),
					          new Color(color)
					        );
					}
}

function map3 (Map, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
					ImageServiceParameters, parser) {
	
					var map = new Map("map3",{
							  //nav:true,//8个pan 箭头
							  slider:false,//左上的缩放 +/-;
							  logo:false,//右下的esri logo
							  showAttribution:false,//右下的gisNeu (logo左侧)
							  extent: new Extent({xmin:117.67255102256046,ymin:39.06648939147723,xmax:117.91507758557971,ymax:39.2233553582866})
							});
					var tms = new ArcGISTiledMapServiceLayer("http://10.254.11.105:8399/arcgis/rest/services/yingxiang/MapServer");
					
					var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园'];

					var queryCondition = "MC in ('和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园')";

					
					var qt = new QueryTask('http://10.254.11.101:8399/arcgis/rest/services/POIFW_js/MapServer/0');
					var query = new Query();
					query.returnGeometry = true;
					query.outFields = ["*"];
					//query.outSpatialReference = map.spatialReference;
					query.where = queryCondition;

					var parkgraphicsLayer = new GraphicsLayer();

					qt.execute(query,function(results){
						var parkgraphicsAry = results.features;
				    	for (var i=0;i<results.features.length; i++)
						{
							var graphic=results.features[i];
							var genColor = [];
							var genSize = 0;

							if(i<10){
								genColor = [207, 34, 171, 0.6];
								genSize = 20;
							}else if (i>9 && i<20){
								genColor = [0, 34, 251, 0.6];
								genSize = 15;
							}else {
								genColor = [20, 234, 21, 0.6];
								genSize = 10;
							}
							
							graphic.setSymbol(genCircleSymbol(genSize, genColor));
							parkgraphicsLayer.add(graphic);
				    	}

					},function(){
						alert("查询错误")
					});

					map.addLayer(tms);
					map.addLayer(parkgraphicsLayer);

					function genCircleSymbol (size, color) {
						return new SimpleMarkerSymbol(
					          SimpleMarkerSymbol.STYLE_CIRCLE, 
					          size, 
					          new SimpleLineSymbol(
					            SimpleLineSymbol.STYLE_NULL, 
					            new Color([247, 34, 101, 0.9]), 
					            1
					          ),
					          new Color(color)
					        );
					}
}

function map4 (Map, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
					ImageServiceParameters, parser) {
	
					var map = new Map("map4",{
							  //nav:true,//8个pan 箭头
							  slider:false,//左上的缩放 +/-;
							  logo:false,//右下的esri logo
							  showAttribution:false,//右下的gisNeu (logo左侧)
							  extent: new Extent({xmin:117.67255102256046,ymin:39.06648939147723,xmax:117.91507758557971,ymax:39.2233553582866})
							});
					var tms = new ArcGISTiledMapServiceLayer("http://10.254.11.105:8399/arcgis/rest/services/yingxiang/MapServer");
					
					var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园'];

					var queryCondition = "MC in ('和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园')";

					
					var qt = new QueryTask('http://10.254.11.101:8399/arcgis/rest/services/POIFW_js/MapServer/0');
					var query = new Query();
					query.returnGeometry = true;
					query.outFields = ["*"];
					//query.outSpatialReference = map.spatialReference;
					query.where = queryCondition;

					var parkgraphicsLayer = new GraphicsLayer();

					qt.execute(query,function(results){
						var parkgraphicsAry = results.features;
				    	for (var i=0;i<results.features.length; i++)
						{
							var graphic=results.features[i];
							var genColor = [];
							var genSize = 0;

							if(i<10){
								genColor = [207, 34, 171, 0.6];
								genSize = 20;
							}else if (i>9 && i<20){
								genColor = [0, 34, 251, 0.6];
								genSize = 15;
							}else {
								genColor = [20, 234, 21, 0.6];
								genSize = 10;
							}
							
							graphic.setSymbol(genCircleSymbol(genSize, genColor));
							parkgraphicsLayer.add(graphic);
				    	}

					},function(){
						alert("查询错误")
					});

					map.addLayer(tms);
					map.addLayer(parkgraphicsLayer);

					function genCircleSymbol (size, color) {
						return new SimpleMarkerSymbol(
					          SimpleMarkerSymbol.STYLE_CIRCLE, 
					          size, 
					          new SimpleLineSymbol(
					            SimpleLineSymbol.STYLE_NULL, 
					            new Color([247, 34, 101, 0.9]), 
					            1
					          ),
					          new Color(color)
					        );
					}
}

function chart1 () {
	var chart1 = echarts.init(document.getElementById('chart1'));

	var chart1Option = {
    title : {
        text: '房屋类型销售率和入住率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋类型销售率','房屋类型入住率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['(1-4层）别墅','（5-8层）洋房','9-11层（小高层）','12-18层（小高层）','18层以上（高层）']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'房屋类型销售率',
            type:'line',

            data:[40.47, 81.29, 71.32, 82.72, 74.43]
        },
        {
            name:'房屋类型入住率',
            type:'line',

            data:[80.47, 91.29, 91.32, 92.72, 85.43]
        }
    ]
    };

    chart1.setOption(chart1Option);
}
function chart2 () {
	var chart2 = echarts.init(document.getElementById('chart2'));

	var chart1Option = {
    title : {
        text: '房屋户型面积销售率和入住率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋户型面积销售率','房屋户型面积入住率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,

            data : ['60㎡以下','60-90㎡','90-120㎡','120-150㎡','150㎡以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'房屋户型面积销售率',
            type:'line',

            data:[63.25, 73.63, 85.16, 78.36, 52.13]
        },
        {
            name:'房屋户型面积入住率',
            type:'line',

            data:[93.25, 83.63, 95.16, 88.36, 72.13]
        }
    ]
    };

    chart2.setOption(chart1Option);
}
function chart3 () {
	var chart3 = echarts.init(document.getElementById('chart3'));

	var chart1Option = {
    title : {
        text: '历年交易金额（亿元）',
        subtext: ''
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:'交易金额',
            type:'line',
            data:[60, 75, 100, 150]
        }
    ]
    };

    chart3.setOption(chart1Option);
}