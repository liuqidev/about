(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1546:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(110),n(119),n(109);function o(map,source,t){var e=t.$l7,o=e.Scene,r=e.Popup,c=t.$l7maps,h=c.GaodeMap,f=c.Mapbox,d=n(425).setting,l={center:[108.5525,34.3227],pitch:0,zoom:4,maxZoom:18,token:"china"===map?d.token.gaode:d.token.mapbox},m=new o({id:"".concat(map,"Footprint"),logoVisible:!1,preserveDrawingBuffer:!1,map:"china"===map?new h(l):new f(l)});m.on("loaded",(function(){window.dispatchEvent(new Event("resize")),t.screenHeight=t.$store.getters["size/getHeight"],t.screenWidth=t.$store.getters["size/getWidth"],t.screenWidth-=1,t.screenHeight-=1}));var $=function(data,t){return new(0,t.$l7.PointLayer)({name:"layer"}).source(data,{cluster:!0,parser:{type:"json",x:"lng",y:"lat"}}).scale("point_count",{type:"quantile"}).size("point_count",[20,25,30,40,50]).color("point_count",(function(t){return 1===t?"#4cfd47":t>=2&&t<=5?"#01a31c":t>=6&&t<=10?"#006400":t>=11&&t<=30?"#20a0ff":"#5b8ff9"})).shape("point_count",["circle"]).style({opacity:.75,strokeWidth:.75}).active(!0).select(!0).animate(!0).on("click",(function(e){e.feature.cluster?t.$Message.info(t.$t("footprint.cluster_click")):t.$emit("pictures",e.feature.id,e.feature.pictures)}))}("china"===map?source.filter((function(t){return"china"===t.map})):source,t);return $.on("mousemove",(function(e){var n="<span>";if(e.feature.cluster)n=t.$t("footprint.cluster",{count:e.feature.point_count});else{var o=e.feature,c=o.date,h=o.name;c&&(n+=t.$t("footprint.date",{date:c})),n+=t.$t("footprint.name",{name:h}),n+="</span>"}var f=new r({offsets:[0,0],closeButton:!1}).setLnglat(e.lngLat).setHTML(n);m.addPopup(f)})),m.addLayer($),m}},1548:function(t,e,n){"use strict";n.r(e);n(119);var o=n(1546),r=n(425),c={name:"ChinaFootprint",data:function(){return{map:"china",source:r.footprint,screenHeight:0,screenWidth:0}},computed:{getId:function(){return this.map+"Footprint"},contentHeight:function(){return this.screenHeight-160-106},contentWidth:function(){return this.screenWidth-200-96}},watch:{"$store.state.size.height":function(){this.screenHeight=this.$store.getters["size/getHeight"]},"$store.state.size.width":function(){this.screenWidth=this.$store.getters["size/getWidth"]}},mounted:function(){this.screenHeight=this.$store.getters["size/getHeight"],this.screenWidth=this.$store.getters["size/getWidth"];var t=o.a(this.map,this.source,this);this.$emit("scene",t)}},h=n(147),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:{width:t.contentWidth+"px",height:t.contentHeight+"px",justifyContent:"center",position:"absolute",zIndex:2},attrs:{id:t.getId}})])}),[],!1,null,null,null);e.default=component.exports}}]);