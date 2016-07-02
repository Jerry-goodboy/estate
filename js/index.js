function map1 (Map,PictureFillSymbol, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
	ImageServiceParameters, parser) {

	var ext = new Extent({xmin:117.67255102256046,ymin:39.06648939147723,xmax:117.91507758557971,ymax:39.2233553582866});
			
	var map = new Map("map1",{
			  //nav:true,//8个pan 箭头
			  slider:false,//左上的缩放 +/-;
			  logo:false,//右下的esri logo
			  showAttribution:false,//右下的gisNeu (logo左侧)
			  extent: ext
			});
	var tms = new ArcGISTiledMapServiceLayer("http://221.238.40.122:8399/arcgis/rest/services/yingxiang/MapServer");
	
	var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园',"颐湖居","慧水苑","雅馨园"];
/*
嘉铭
世茂
吉宝
建投
天房
万通
生井
万科
远雄
投资
公屋公司
阿亚拉
美利丰
生星
双威
生态投资
航天
众美
富龙
亿利
富士
碧桂园
新苑投资
力高
宝龙
*/
	var queryCondition = "DM in ('和畅园','颐湖居','慧水苑','雅馨园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园')";
	// var queryCondition = "KFS='宝龙'"
	
	var qt = new QueryTask('http://221.238.40.122:8399/arcgis/rest/services/FJXX/MapServer/0');
	var query = new Query();
	query.returnGeometry = true;
	query.outFields = ["*"];
	//query.outSpatialReference = map.spatialReference;
	query.where = queryCondition;

	var parkgraphicsLayer = new GraphicsLayer();

	var fill = new PictureFillSymbol();
	fill.setWidth(600);
	fill.setHeight(390);
	fill.setUrl("imgs/yxt.jpg");

	var gic = new Graphic(ext, fill);
	parkgraphicsLayer.add(gic);

	var avgPrice = {
			    "和畅园": 7300,
			    "鲲玺园": 8000,
			    "荣馨园": 8300,
			    "红树湾花园": 8500,
			    "兰苑": 8900,
			    "美林园": 9000,
			    "悦馨苑": 9000,
			    "鲲贝园": 9200,
			    "雅境园": 9200,
			    "首玺园": 9500,
			    "季景园": 9850,
			    "天和园": 10000,
			    "鲲玉园": 10000,
			    "家和园": 10000,
			    "美韵园": 10000,
			    "景杉园": 10300,
			    "锦庐园": 11000,
			    "尚苑": 11000,
			    "新新家园": 11000,
			    "璟苑": 11000,
			    "兰景园": 12500,
			    "芦花庄园": 14000,
			    "南苑": 14500,
			    "新颐园": 16500,
			    "依水园": 16500,
			    "澜水苑": 17500,
			    "香堤苑": 21500,
			    "建设公寓": 9000,
			    "世茂生态城": 9000,
			    "金航湾": 9000,
			    "蓝领公寓": 9000,
			    "宝龙欧洲城": 9000,
			    "碧桂园·滨海城": 9000,
			    "力高·阳光海岸": 9000,
			    "芙蓉北苑": 9000,
			    "芙蓉南苑": 9000,
			    "首创康桥郡": 9000,
			    "煦园": 9000
			};
	var riseRate = {
		    "和畅园": 0,
		    "鲲玺园": -1,
		    "荣馨园": 3,
		    "红树湾花园": -1,
		    "兰苑": 5,
		    "美林园": 0,
		    "悦馨苑": 7,
		    "鲲贝园": -3,
		    "雅境园": 2,
		    "首玺园": 2,
		    "季景园": -2,
		    "天和园": 1,
		    "鲲玉园": 0,
		    "家和园": 7,
		    "美韵园": 0,
		    "景杉园": -1,
		    "锦庐园": 0,
		    "尚苑": -1,
		    "新新家园": 1,
		    "璟苑": -1,
		    "兰景园": 12,
		    "芦花庄园": 0,
		    "南苑": 0,
		    "新颐园": -11,
		    "依水园": -100,
		    "澜水苑": -100,
		    "香堤苑": -3,
		    "建设公寓": -100,
		    "世茂生态城": -100,
		    "金航湾": -100,
		    "蓝领公寓": -100,
		    "宝龙欧洲城": -100,
		    "碧桂园·滨海城": -100,
		    "力高·阳光海岸": -100,
		    "芙蓉北苑": -100,
		    "芙蓉南苑": -100,
		    "首创康桥郡": -100,
		    "煦园": -100
		};
	var estateRate = {
	    "红树湾": 1,
	    "仕景苑": 0.98,
	    "新新园": 0.99,
	    "新颐园": 0.68,
	    "天和园": 0.86,
	    "锦庐园": 1,
	    "季景园": 0.94,
	    "兰景园": 0.48,
	    "景杉园": 1,
	    "美林园": 1,
	    "南苑": 0.95,
	    "香堤苑": 0.58,
	    "美韵园": 1,
	    "美逸园": 0.99,
	    "鲲玉园": 1,
	    "鲲贝园": 0.98,
	    "鲲玺园": 1,
	    "尚苑": 0.93,
	    "璟苑": 0.59,
	    "兰苑": 0.87,
	    "和畅园（还迁房）": 0.95,
	    "和畅园（公屋）": 0.69,
	    "雅境园": 0.92,
	    "荣馨园": 0.98,
	    "首玺园": 1,
	    "悦馨苑": 0.62,
	    "家和园": 1,
	    "依水园": 0.42,
	    "雅馨园": 0.56,
	    "青溪花苑": 0,
	    "澜水苑": 0.76,
	    "芦花庄园": 0.16,
	    "凤凰苑": 1,
	    "海润园": 0,
	    "雍海苑": 0.55,
	    "逸海苑": 0.12,
	    "瑞龙城": 0.88
	};

// 红树湾 嘉铭

// 锦庐园 万科

// 景杉园 生井

// 美林园 建投

// 鲲玉园 世茂

// 鲲玺园 世茂

// 家和园 生态投资

// 首玺园 生星

// 新新家园 碧桂园

// 美韵园 建投

	var oneyearRate = [
		"红树湾花园",
		"锦庐园",
		"景杉园",
		"美林园",
		"鲲玉园",
		"鲲玺园",
		"家和园",
		"首玺园",
		"新新家园",
		"美韵园"
	];
	var estateOwner = [
		"嘉铭",
		"万科",
		"生井",
		"建投",
		"世茂",
		"生态投资",
		"生星",
		"万通"
	];
// 90%
	var halfyearRate = [
	    "锦庐园",
	    "红树湾花园",
	    "鲲玉园",
	    "美林园",
	    "新新家园",
	    "美韵园",
	    "景杉园",
	    "鲲玺园",
	    "和畅园",
	    "鲲贝园",
	    "南苑",
	    "荣馨园"
	];
	var halfOwner = [
	    "万科",
	    "嘉铭",
	    "世茂",
	    "建投",
	    "万通",
	    "生井",
	    "公屋公司",
	    "美利丰"
	];

	// 83%
	var quarterRate = [
		"锦庐园",
		"红树湾花园",
		"鲲玉园",
		"美林园",
		"新新家园",
		"和畅园",
		"鲲贝园",
		"景杉园",
		"鲲玺园",
		"尚苑",
		"荣馨园"
	];
	var quarterOwner = [
		"万科",
		"嘉铭",
		"世茂",
		"建投",
		"万通",
		"投资",
		"生井",
		"美利丰"
	];

	// 81%
	var monthRate = [
		"红树湾花园",
		"美林园",
		"锦庐园",
		"鲲玉园",
		"新新家园",
		"和畅园",
		"瑞龙城",
		"鲲贝园",
		"景杉园",
		"鲲玺园",
		"荣馨园"
	];
	var monthOwner = [
		"嘉铭",
		"建投",
		"万科",
		"世茂",
		"万通",
		"投资",
		"生井",
		"美利丰"
	];

	var leastRate = [
		"新颐园",
		"悦馨苑",
		"依水园",
		"澜水苑",
		"兰景园",
		"香堤苑",
		"慧水苑",
		"芦花庄园",
		"颐湖居",
		"煦园"
	];
	var leastOwner = [
		"航天",
		"万通",
		"双威",
		"生态投资",
		"富龙",
		"吉宝",
		"建投",
		"富士",
		"亿利",
		"新苑投资"
	];
			

	qt.execute(query,function(results){
		var parkgraphicsAry = results.features;
    	for (var i=0;i<results.features.length; i++)
		{
			var graphic=results.features[i];
			var genColor = [];
			var genSize = 0;

			var mc = results.features[i]["attributes"]["DM"];

			// if(avgPrice[mc] > 16000){
			// 	genColor = [239,  50,  12, 0.9];
			// 	genSize = 20;
			// }
			// else if (avgPrice[mc] >= 10000 && avgPrice[mc] < 20000){
			// 	genColor = [239,  50,  12, 0.9];
			// 	genSize = 16;
			// }
			// else {
			// 	genColor = [255, 0, 222, 0.9];//[0, 255, 0, 0.9];
			// 	genSize = 20;
			// }

			// riseRate
			// if(riseRate[mc] <= 0){
			// 	genColor = [0, 255, 0, 0.9];
			// 	genSize = 14;
			// }
			// else if (riseRate[mc] > 0 && riseRate[mc] < 10){
			// 	genColor = [239,  50,  12, 0.9];
			// 	genSize = 16;
			// }
			// else {
			// 	genColor = [255, 0, 222, 0.9];//[0, 255, 0, 0.9];[255, 0, 222, 0.9];[255, 255, 0, 0.9];
			// 	genSize = 20;
			// }
			// estateRate
			// if(typeof estateRate[mc] == "undefined" ){
			// 	genColor = [0, 255, 0, 0.9];
			// 	genSize = 16;
			// }else {
			// 	if(estateRate[mc] <= 0.6){
			// 		genColor = [0, 0, 255, 0.9];
			// 		genSize = 14;
			// 	}
			// 	else if (estateRate[mc] > 0.6 && estateRate[mc] < 0.8){
			// 		genColor = [0, 255, 0, 0.9];
			// 		genSize = 16;
			// 	}
			// 	else {
			// 		genColor = [255,  50,  12, 0.9];//[0, 255, 0, 0.9];[255, 0, 222, 0.9];[255, 255, 0, 0.9];
			// 		genSize = 20;
			// 	}
			// }

	// oneyearRate[3] && oneyearRate[9]
	// oneyearRate[4] && oneyearRate[5]

// 赤 255,0,0 
// 橙 255,128,0 
// 黄 255,255,0 
// 绿 0,255,0 
// 青 0,255,255 
// 蓝 0,0,255 
// 紫 128,0,255
// console.log(mc);
// one year
			// if(typeof mc == "undefined" ){
			// 	genColor = [0, 0, 0, 0];
			// 	genSize = 0;
			// }else {
			// 	if(mc == oneyearRate[0]){
			// 		genColor = [255, 0, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[1]){
			// 		genColor = [255, 128, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[2]){
			// 		genColor = [255, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[3] || mc == oneyearRate[9]){
			// 		genColor = [0, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[4] || mc == oneyearRate[5]){
			// 		genColor = [0, 255, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[6]){
			// 		genColor = [0, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[7]){
			// 		genColor = [128, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == oneyearRate[8]){
			// 		genColor = [159, 95, 159, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else {
			// 		genColor = [0, 0, 0, 0];
			// 		genSize = 0;
			// 	}
			// }
			
			// half year
			
	// halfyearRate[2]
	// halfyearRate[7]
	// halfyearRate[9]

	// halfyearRate[3]
	// halfyearRate[5]
	// halfyearRate[10]

			// if(typeof mc == "undefined" ){
			// 	genColor = [0, 0, 0, 0];
			// 	genSize = 0;
			// }else {
			// 	if(mc == halfyearRate[0]){
			// 		genColor = [255, 0, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[1]){
			// 		genColor = [255, 128, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[2] || mc == halfyearRate[7] || mc == halfyearRate[9]){
			// 		genColor = [255, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[3] || mc == halfyearRate[5] || mc == halfyearRate[10]){
			// 		genColor = [0, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[4]){
			// 		genColor = [0, 255, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[6]){
			// 		genColor = [0, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[8]){
			// 		genColor = [128, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == halfyearRate[11]){
			// 		genColor = [159, 95, 159, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else {
			// 		genColor = [0, 0, 0, 0];
			// 		genSize = 0;
			// 	}
			// }

// quarterRate
			// if(typeof mc == "undefined" ){
			// 	genColor = [0, 0, 0, 0];
			// 	genSize = 0;
			// }else {
			// 	if(mc == quarterRate[0]){
			// 		genColor = [255, 0, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[1]){
			// 		genColor = [255, 128, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[2] || mc == quarterRate[6] || mc == quarterRate[8] || mc == quarterRate[9]){
			// 		genColor = [255, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[3] ){
			// 		genColor = [0, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[4]){
			// 		genColor = [0, 255, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[5]){
			// 		genColor = [0, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[7]){
			// 		genColor = [128, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == quarterRate[10]){
			// 		genColor = [159, 95, 159, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else {
			// 		genColor = [0, 0, 0, 0];
			// 		genSize = 0;
			// 	}
			// }

// one month
			// if(typeof mc == "undefined" ){
			// 	genColor = [0, 0, 0, 0];
			// 	genSize = 0;
			// }else {
			// 	if(mc == monthRate[0]){
			// 		genColor = [255, 0, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[1]){
			// 		genColor = [255, 128, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[2] ){
			// 		genColor = [255, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[3] || mc == monthRate[6]  || mc == monthRate[8] ){
			// 		genColor = [0, 255, 0, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[4]){
			// 		genColor = [0, 255, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[5]){
			// 		genColor = [0, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[7]){
			// 		genColor = [128, 0, 255, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else if (mc == monthRate[9]){
			// 		genColor = [159, 95, 159, 0.9];
			// 		genSize = 16;
					
			// 	}
			// 	else {
			// 		genColor = [0, 0, 0, 0];
			// 		genSize = 0;
			// 	}
			// }




			genColor = [255, 0, 0, 0.9];
			genSize = 16;

// leastRate[67]

			if(typeof mc == "undefined" ){
				genColor = [0, 0, 0, 0];
				genSize = 0;
			}else {
				if(mc == leastRate[0]){
					genColor = [255, 0, 0, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[1]){
					genColor = [255, 128, 0, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[2] ){
					genColor = [255, 255, 0, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[3] ){
					genColor = [0, 255, 0, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[4]){
					genColor = [0, 255, 255, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[5]){
					genColor = [0, 0, 255, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[6]){
					genColor = [128, 0, 255, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[7]){
					genColor = [159, 95, 159, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[8]){
					genColor = [259, 19, 159, 0.9];
					genSize = 16;
					
				}
				else if (mc == leastRate[9]){
					genColor = [19, 95, 259, 0.9];
					genSize = 16;
					
				}
				else {
					genColor = [0, 0, 0, 0];
					genSize = 0;
				}
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

function map2 (Map,PictureFillSymbol, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
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

function map3 (Map,PictureFillSymbol, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
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

function map4 (Map,PictureFillSymbol, Color, SimpleLineSymbol, SimpleMarkerSymbol, QueryTask, Query,GraphicsLayer,graphicsUtils,PictureMarkerSymbol,Graphic, FeatureLayer, ArcGISTiledMapServiceLayer, Extent, ArcGISImageServiceLayer, 
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
        text: '房屋类型销售率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋类型销售率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            	show: false
            },
            data : ['(1-4层）别墅','（5-8层）洋房','9-11层（小高层）','12-18层（小高层）','18层以上（高层）']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'房屋类型销售率',
            type:'line',
            data:[56.74, 75.22, 64.55, 91.46, 81.85]
        }
    ]
    };

    chart1.setOption(chart1Option);
}
function chart2 () {
	var chart2 = echarts.init(document.getElementById('chart2'));

	var chart1Option = {
    title : {
        text: '房屋户型面积销售率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋户型面积销售率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            	show: false,
            },

            data : ['60㎡以下','60-90㎡','90-120㎡','120-150㎡','150㎡以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value} '
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'房屋户型面积销售率',
            type:'line',

            data:[63.56, 68.54, 86.62, 88.55, 67.99]
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
            splitLine: {
            	show: false,
            },
            data : ['2013','2014','2015']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'交易金额',
            type:'line',
            data:[106.9, 169.5, 257.2]
        }
    ]
    };

    chart3.setOption(chart1Option);
}