// edit by ali kilic www.alikilic.org
function Pafta(latLng,country) {
    this.name='';
    this.country=country;
    this.lat = latLng.lat;
    this.lng = latLng.lng;
    this.scales=[2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100];
    this.images = {};
    this.layout={};
    this.paftalar = {
        5000000:{zoom:1,color:'',width:30,height:20,lat:5,lng:5,get:10000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},name:'',globalName:''},
        2000000:{zoom:9,color:'#ff0000',width:6,height:8,lat:2,lng:1,get:5000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:2000000,name:'',globalName:''},
        1000000:{zoom:9,color:'#80d033',width:6,height:4,lat:2,lng:2,get:2000000,to:500000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['b'],['a']],name:'',globalName:''},
        500000:{zoom:10,color:'#2ec1e5',width:3,height:2,lat:2,lng:2,get:1000000,to:250000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        250000:{zoom:11,color:'#438881',width:1.5,height:1,lat:2,lng:3,get:500000,to:100000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        100000:{zoom:13,color:'#d843ff',width:0.5,height:0.5,lat:2,lng:2,get:250000,to:50000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['5','2'],['6','3']],name:'',globalName:''},
        50000:{zoom:14,color:'#085fff',width:0.25,height:0.25,lat:2,lng:2,get:100000,to:25000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        25000:{zoom:15,color:'#ffb6b6',width:0.125,height:0.125,lat:2,lng:2,get:50000,to:10000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        10000:{zoom:16,color:'#ffa900',width:0.05,height:0.05,lat:5,lng:5,get:50000,to:5000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['21','16','11','6','1'],['22','17','12','7','2'],['23','18','13','8','3'],['24','19','14','9','4'],['25','20','15','10','5']],name:'',globalName:''},
        5000:{zoom:17,color:'#ff00fe',width:0.025,height:0.025,lat:2,lng:2,get:10000,to:2000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        2000:{zoom:18,color:'#b55877',width:0.0125,height:0.0125,lat:2,lng:2,get:5000,to:1000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        1000:{zoom:19,color:'#0c6502',width:0.00625,height:0.00625,lat:2,lng:2,get:2000,to:500,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        500:{zoom:19,color:'#ad3c68',width:0.003125,height:0.003125,lat:2,lng:2,get:1000,to:250,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        250:{zoom:19,color:'#717171',width:0.0015625,height:0.0015625,lat:2,lng:2,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        100:{zoom:19,color:'#d09d8b',width:0.000625,height:0.000625,lat:5,lng:5,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['21','16','11','6','1'],['22','17','12','7','2'],['23','18','13','8','3'],['24','19','14','9','4'],['25','20','15','10','5']],name:'',globalName:''}
    };
    for(i in this.scales){
        this.set(this.scales[i]);
    }
    return this;
}
Pafta.prototype.get=function (scale) {
    if(this.scales.indexOf(scale)>-1){
        return this.paftalar[scale];
    }else{
        alert('Wrong Scale Number Please Select Only This Value : (2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100)');
        return false;
    }


};
Pafta.prototype.setName100000=function () {
    var name='';
    var json = LocalLayer100000[this.country];
    var bbox = json.bbox;
    var p1 = L.latLng(bbox.leftBottom);
    var p2 = L.latLng(bbox.rightTop);
    var cerceve = L.latLngBounds(p1, p2);
    var p3 = L.latLng({lat:this.lat,lng:this.lng});
    var durum = cerceve.contains(p3);
    var horizontal = json[json.horizontal];
    var vertical = json[json.vertical];
    var fetbbox = this.paftalar['100000'].bbox.leftBottom;
    var farkhor = (fetbbox.lng-bbox.leftBottom.lng)/this.paftalar['100000'].width;
    var farkver = (fetbbox.lat-bbox.leftBottom.lat)/this.paftalar['100000'].height;
    if(durum==true){
        var number = horizontal[farkhor];
        var text = vertical[farkver];
        name = text+""+number;
    }else{
        var name = this.paftalar['100000'].name;
    }

    return name;
};
Pafta.prototype.setName250000=function () {
    var name = '';
    var json = LocalLayer250000[this.country];
    var bbox = LocalLayer250000.bbox;
    var p1 = L.latLng(bbox.leftBottom);
    var p2 = L.latLng(bbox.rightTop);
    var cerceve = L.latLngBounds(p1, p2);
    var p3 = L.latLng({lat:this.lat,lng:this.lng});
    var durum = cerceve.contains(p3);
    var leftBottomLat = bbox.leftBottom.lat;
    var leftBottomLng = bbox.leftBottom.lng;
    var orjleftBottomLat = this.paftalar['250000'].bbox.leftBottom.lat;
    var orjleftBottomLng = this.paftalar['250000'].bbox.leftBottom.lng;
    var boyfark = orjleftBottomLng-leftBottomLng;
    var enfark = orjleftBottomLat-leftBottomLat;
    var tamboy = boyfark/this.paftalar['250000'].width;
    var tamen = enfark/this.paftalar['250000'].height;
    if(durum==true){
        var name = json[tamen][tamboy];
    }else{
        var name = this.paftalar['250000'].name;
    }
    return name;
};
Pafta.prototype.set=function (scale) {
    var en = this.lat;
    var bo = this.lng;
    var kendi=this.paftalar[scale];
    var ust = kendi.get;
    var box = this.paftalar[ust].bbox;
    var farken =en-box.leftBottom.lat;
    var farkboy=bo-box.leftBottom.lng;
    var boyint = parseInt(farkboy/kendi.width);
    var enint = parseInt(farken/kendi.height);
    var solAltBoy = box.leftBottom.lng+(boyint*kendi.width);
    var solAltEn = box.leftBottom.lat+(enint*kendi.height);
    if(this.lng>=0 && this.lat>=0){
        var sagUstEn = solAltEn+kendi.height;
        var sagUstBoy = solAltBoy+kendi.width;
    }
    if(this.lng<0 && this.lat>=0){
        var sagUstEn = solAltEn+kendi.height;
        var sagUstBoy = solAltBoy-kendi.width;
    }
    if(this.lng<0 && this.lat<0){
        var sagUstEn = solAltEn-kendi.height;
        var sagUstBoy = solAltBoy-kendi.width;
    }
    if(this.lng>=0 && this.lat<0){
        var sagUstEn = solAltEn-kendi.height;
        var sagUstBoy = solAltBoy+kendi.width;
    }

    boyint=Math.abs(boyint);
    enint=Math.abs(enint);
    if(scale!==2000000){
        if(scale!==1000000){
            kendi.name= kendi.label[boyint][enint];
        }else{
            kendi.name= kendi.label[enint][boyint];
        }

    }else{
        var harfdizi = ['C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X'];
        var saydizi = [];
        for(var i=1;i<=60;i++){
            saydizi.push(i);
        }
        var bint=boyint; var eint=enint;
        if(this.lng>=0 && this.lat>=0){
            bint=bint+30;
            eint=eint+11;
        }
        if(this.lng<0 && this.lat>=0){
            bint=30-bint;
            eint=eint+11;
        }
        if(this.lng<0 && this.lat<0){
            bint=30-bint;
            eint=11-eint;
        }
        if(this.lng>=0 && this.lat<0){
            bint=bint+30;
            eint=11-eint;
        }
        kendi.name = harfdizi[eint]+''+saydizi[bint];
    }
    this.paftalar[scale].bbox = {leftBottom:{lat:solAltEn,lng:solAltBoy},rightTop:{lat:sagUstEn,lng:sagUstBoy}};
    if(scale==250000){
        this.paftalar['250000'].name=this.setName250000();
        kendi.name=this.paftalar['250000'].name;
    }
    if(scale==100000){
        this.paftalar['100000'].name=this.setName100000();
        kendi.name=this.paftalar['100000'].name;
    }
    if(scale>=2000000){
        kendi.globalName=kendi.name;
    }else{
        kendi.globalName=this.paftalar[ust].globalName+'-'+kendi.name;
    }
    this.paftalar[scale]=kendi;
    return this.paftalar[scale].bbox;
};
Pafta.prototype.draw=function (scale,fly) {
    var pft = this.paftalar[scale];
    var bbox = pft.bbox;
    var bounds = [[bbox.leftBottom.lat,bbox.leftBottom.lng], [bbox.rightTop.lat, bbox.rightTop.lng]];
    L.rectangle(bounds, {color: pft.color, weight: 1}).bindPopup(pft.globalName).addTo(map);
    if(fly==true){
        map.flyToBounds(bounds);
    }
};
Pafta.prototype.getPaftaScale=function (scale) {

};
Pafta.prototype.setTileSet=function () {

};
Pafta.prototype.getRaster = function (scale,tile) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext("2d");
    var LB={};
    var RT={};
    if(this.lat>=0 && this.lng>=0){
        LB = this.paftalar[scale].bbox.leftBottom;
        RT = this.paftalar[scale].bbox.rightTop;
    }
    if(this.lat<0 && this.lng>=0){
        //2.bolge
        LB.lng = this.paftalar[scale].bbox.leftBottom.lng;
        LB.lat = this.paftalar[scale].bbox.rightTop.lat;
        RT.lng = this.paftalar[scale].bbox.rightTop.lng;
        RT.lat = this.paftalar[scale].bbox.leftBottom.lat;
    }
    if(this.lat<0 && this.lng<0){
        //3.bolge
        LB = this.paftalar[scale].bbox.rightTop;
        RT = this.paftalar[scale].bbox.leftBottom;
    }
    if(this.lat>0 && this.lng<0){
        //4.bolge
        LB.lng = this.paftalar[scale].bbox.rightTop.lng;
        LB.lat = this.paftalar[scale].bbox.leftBottom.lat;
        RT.lng = this.paftalar[scale].bbox.leftBottom.lng;
        RT.lat = this.paftalar[scale].bbox.rightTop.lat;
    }

    LB.zoom = this.paftalar[scale].zoom;
    RT.zoom = this.paftalar[scale].zoom;
    var zoom = LB.zoom;
    var LBxy = latLong2tile(LB);
    var RTxy = latLong2tile(RT);
    var x1=LBxy.x-1;
    var y1=LBxy.y+1;
    var x2=RTxy.x+1;
    var y2=RTxy.y-1;
    var tileLB = tile2LatLong(x1,y1,zoom);
    var tileRT = tile2LatLong(x2,y2,zoom);
    var xfark = Math.abs(x2-x1);
    var yfark = Math.abs(y2-y1);
    this.canvas.width = 256*(xfark+1);
    this.canvas.height = 256*(yfark+1);
    this.canvas.setAttribute("style","width:"+this.canvas.width+"px; height:"+this.canvas.height+"px;");

    var xsize=0;
    var imgs = [];
    this.images.dizi = {xsatir:xfark,ysutun:yfark};
    this.images.tile=tile;
    this.images.status=false;
    this.noload={};
    this.images.x=[];
    this.images.y=[];
    this.images.res={};
    this.layout = {scale:scale,x1:x1,y1:y1,x2:x2,y2:y2,xsize:this.canvas.width,ysize:this.canvas.height,tileLB:tileLB,tileRT:tileRT,LB:LB,RT:RT,zoom:zoom};

    for(var x=x1;x<=x2;x++){
        this.images.x.push(x);
        var ysize=0;
        var xs=xsize*256;
        this.images.res['satir'+x] = {};
        for(var y=y2;y<=y1;y++){
            this.images.y.push(y);

            var ys=ysize*256;
            if(tile=="basemap"){
                var linki ='http://mt1.google.com/vt/lyrs=m&x='+x+'&y='+y+'&z='+zoom+'';
            }
            if(tile=="satallite"){
                var linki ='http://mt3.google.com/vt/lyrs=s&x='+x+'&y='+y+'&z='+zoom+'';
            }
            if(tile=="hybrid"){
                var linki ='http://mt2.google.com/vt/lyrs=s,h&x='+x+'&y='+y+'&z='+zoom+'';
            }
            if(tile=="osm"){
                var linki ='http://a.tile.openstreetmap.org/'+zoom+'/'+x+'/'+y+'.png';
            }

            this.images.res['satir'+x]['sutun'+y] = {satir:x,sutun:y,zoom:zoom,xs:xs,ys:ys,link:linki,durum:false};
            //var linki = 'https://a.tile.openstreetmap.org/'+zoom+'/'+x+'/'+y+'.png';
            this.imgDownload(this.canvas,this.ctx,linki,xs,ys,x,y,zoom);
            ysize++;
        }
        xsize++;
    }
    var ts = this;
    var imgs = this.images;
    this.interval = setInterval(function(){
        var sayi = imgs.y.length;
        var i=0;
        for (prop in imgs.res){
            var sutun = imgs.res[prop];
            for(prp in sutun){
                var durum = sutun[prp].durum;
                if(durum==true){
                    i++;
                    if(i==sayi){
                        imgs.status=true;
                        ts.clearInterval();
                    }
                }else{
                    ts.noload[prop]=sutun[prp];
                    ts.imgDownload(this.canvas,this.ctx,sutun[prp].link,sutun[prp].xs,sutun[prp].ys,sutun[prp].satir,sutun[prp].sutun,sutun[prp].zoom);
                }
            }
        }
    }, 2000);

};
Pafta.prototype.clearInterval=function () {
    clearInterval(this.interval);
    this.drawLayout();
};
Pafta.prototype.scanSurfacePoints = function (scale) {
    var LB={};
    var RT={};
    if(this.lat>=0 && this.lng>=0){
        LB = this.paftalar[scale].bbox.leftBottom;
        RT = this.paftalar[scale].bbox.rightTop;
    }
    if(this.lat<0 && this.lng>=0){
        //2.bolge
        LB.lng = this.paftalar[scale].bbox.leftBottom.lng;
        LB.lat = this.paftalar[scale].bbox.rightTop.lat;
        RT.lng = this.paftalar[scale].bbox.rightTop.lng;
        RT.lat = this.paftalar[scale].bbox.leftBottom.lat;
    }
    if(this.lat<0 && this.lng<0){
        //3.bolge
        LB = this.paftalar[scale].bbox.rightTop;
        RT = this.paftalar[scale].bbox.leftBottom;
    }
    if(this.lat>0 && this.lng<0){
        //4.bolge
        LB.lng = this.paftalar[scale].bbox.rightTop.lng;
        LB.lat = this.paftalar[scale].bbox.leftBottom.lat;
        RT.lng = this.paftalar[scale].bbox.leftBottom.lng;
        RT.lat = this.paftalar[scale].bbox.rightTop.lat;
    }

    LB.zoom = this.paftalar[scale].zoom;
    RT.zoom = this.paftalar[scale].zoom;
    var zoom = LB.zoom;
    var LBxy = latLong2tile(LB);
    var RTxy = latLong2tile(RT);
    var x1=LBxy.x-1;
    var y1=LBxy.y+2;
    var x2=RTxy.x+1;
    var y2=RTxy.y-1;
    var x3=x2+1;
    var Point1 = tile2LatLong(x1,y2,zoom);
    var Point2 = tile2LatLong(x3,y2,zoom);
    var Point3 = tile2LatLong(x3,y1,zoom);
    var Point4 = tile2LatLong(x1,y1,zoom);
    if(this.lat>=0 && this.lng>=0){
        var yataypix = Point2.lng-Point1.lng;
        var duseypix = Point1.lat-Point4.lat;
    }
    if(this.lat<0 && this.lng>=0){
        var yataypix = Point2.lng-Point1.lng;
        var duseypix = Point4.lat-Point1.lat;
    }
    if(this.lat<0 && this.lng<0){
        var yataypix = Point1.lng-Point2.lng;
        var duseypix = Point4.lat-Point1.lat;
    }
    if(this.lat>=0 && this.lng<0){
        var yataypix = Point1.lng-Point2.lng;
        var duseypix = Point1.lat-Point4.lat;
    }


    if(Math.abs(yataypix)>Math.abs(duseypix)){
        var genpix = Math.abs(yataypix)/65;
    }else{
        var genpix = Math.abs(duseypix)/65;
    }
    var dizi= [];
    var i=0;
    for(var px=Point1.lat;px>=Point4.lat;px=px-genpix){
        for(var py=Point1.lng;py<=Point2.lng;py=py+genpix){
            if(i%450==0){
                a=dizi.length;
                dizi[a]=[];
                dizi[a].push([px,py]);
            }else{
                dizi[a].push([px,py]);
            }
            i++;
        }
    }
    this.surfacePoints = dizi;
    return dizi;
};
Pafta.prototype.drawLayout = function () {
    var l =  this.layout;
    var scale = l.scale;
    var x1=l.x1; var y1=l.y1;
    var x2=l.x2;  var y2=l.y2;
    var x3=x2+1;
    var zoom=l.zoom;
    var p4 = l.LB; var p4lng = p4.lng; var p4lat = p4.lat;
    var p2 = l.RT; var p2lng = p2.lng; var p2lat = p2.lat;
    var p1lng =p4lng; var p1lat=p2lat;
    var p3lng =p2lng; var p3lat=p4lat;
    var point1 =  L.latLng(p1lat,p1lng);
    var point2 =  L.latLng(p2lat,p2lng);
    var point3 =  L.latLng(p3lat,p3lng);
    var point4 =  L.latLng(p4lat,p4lng);
    var disp1p2 = ondalikli(point1.distanceTo(point2),3);
    var disp2p3 = ondalikli(point2.distanceTo(point3),3);
    var disp3p4 = ondalikli(point3.distanceTo(point4),3);
    var disp4p1 = ondalikli(point4.distanceTo(point1),3);
    var Point1 = tile2LatLong(x1,y2,zoom);
    var Point2 = tile2LatLong(x3,y2,zoom);
    var Point3 = tile2LatLong(x3,y1,zoom);
    var Point4 = tile2LatLong(x1,y1,zoom);
    var pixelpoint1 = map.project(point1,zoom);
    var pixelpoint2 = map.project(point2,zoom);
    var pixelpoint3 = map.project(point3,zoom);
    var pixelpoint4 = map.project(point4,zoom);
    var pixelPoint1 = map.project(Point1,zoom);
    var pixelPoint2 = map.project(Point2,zoom);
    var pixelPoint3 = map.project(Point3,zoom);
    var pixelPoint4 = map.project(Point4,zoom);
    var pixP1x = pixelpoint1.x-pixelPoint1.x;
    var pixP1y = pixelpoint1.y-pixelPoint1.y;
    var pixP2x = pixelpoint2.x-pixelPoint1.x;
    var pixP2y = pixelpoint2.y-pixelPoint1.y;
    var pixP3x = pixelpoint3.x-pixelPoint1.x;
    var pixP3y = pixelpoint3.y-pixelPoint1.y;
    var pixP4x = pixelpoint4.x-pixelPoint1.x;
    var pixP4y = pixelpoint4.y-pixelPoint1.y;

    this.ctx.beginPath();
    this.ctx.moveTo(pixP1x,pixP1y);
    this.ctx.lineTo(pixP2x,pixP2y);
    var ortax = (pixP2x+pixP1x)/2;
    this.ctx.lineTo(pixP3x,pixP3y);
    this.ctx.lineTo(pixP4x,pixP4y);
    this.ctx.lineTo(pixP1x,pixP1y);
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.plusDraw(pixP1x,pixP1y,"P.1");
    this.plusDraw(pixP2x,pixP2y,"P.2");
    this.plusDraw(pixP3x,pixP3y,"P.3");
    this.plusDraw(pixP4x,pixP4y,"P.4");
    this.drawinfo(this.paftalar[scale].globalName,ortax,(pixP1y+35),30);
    this.drawinfo("P.1 = Lat : "+ondalikli(point1.lat,8)+" - Lng : "+ondalikli(point1.lng,8)+" | Dist To P.2 = "+disp1p2+" m",ortax,(pixP1y+70),20);
    this.drawinfo("P.2 = Lat : "+ondalikli(point2.lat,8)+" - Lng : "+ondalikli(point2.lng,8)+" | Dist To P.3 = "+disp2p3+" m",ortax,(pixP1y+100),20);
    this.drawinfo("P.3 = Lat : "+ondalikli(point3.lat,8)+" - Lng : "+ondalikli(point3.lng,8)+" | Dist To P.4 = "+disp3p4+" m",ortax,(pixP1y+130),20);
    this.drawinfo("P.4 = Lat : "+ondalikli(point4.lat,8)+" - Lng : "+ondalikli(point4.lng,8)+" | Dist To P.1 = "+disp4p1+" m",ortax,(pixP1y+160),20);
    this.drawinfo("Elp : WGS84 | www.alikilic.org",ortax,(pixP1y+200),20);
    this.northArrow(pixP2x-160,pixP2y+10,scale);


};
Pafta.prototype.northArrow = function (x,y,scale) {
    var tis=this;
    var imageObj = new Image();
    imageObj.src = 'img/north.png';
    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.onload = function(e) {
        tis.ctx.drawImage(imageObj,x,y,150,150);
        var dataStr = tis.canvas.toDataURL("image/png");
        download(dataStr,tis.images.tile+' - '+tis.paftalar[scale].globalName+'.png',"image/png")
    };

};
Pafta.prototype.drawinfo=function (txt,x,y,size) {
    this.ctx.font = size+"px Arial";
    this.ctx.shadowColor = "white";
    this.ctx.shadowOffsetX = 2;
    this.ctx.shadowOffsetY = 2;
    this.ctx.shadowBlur = 2;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(txt,x,y);
};
Pafta.prototype.plusDraw=function(x,y,txt){
    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    this.ctx.lineTo(x,(y-10));
    this.ctx.lineTo(x,(y+10));
    this.ctx.lineTo(x,y);
    this.ctx.lineTo(x+10,y);
    this.ctx.lineTo(x-10,y);
    this.ctx.lineTo(x,y);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(txt,x+5,y+25);
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(x, y, 1, 0, 2 * Math.PI, false);
    this.ctx.fill();

};
Pafta.prototype.imgStatus=function (imgs) {
    this.images=imgs;
};
Pafta.prototype.imgDownload=function(canvas,ctx,link,x,y,a,b,z){
    var tis=this;
    var imgs = this.images;
    try {
        var imageObj = new Image();
        imageObj.src = link;
        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.onload = function(e) {
            tis.ctx.drawImage(imageObj,x,y);
            imgs.res['satir'+a]['sutun'+b].durum=true;
            tis.imgStatus(imgs);
        };
    } catch(e) {
        throw 'This is being thrown after setting img.src';
        imgs.res['satir'+a]['sutun'+b].durum=false;
        tis.imgStatus(imgs);
    }
};

function latLong2tile (obj){
    var lat = obj.lat;
    var lon = obj.lng;
    var zoom = obj.zoom;
    var xtile = (Math.floor((lon+180)/360*Math.pow(2,zoom)));
    var ytile = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
    return {x:xtile,y:ytile,zoom:zoom};
}
function ondalikli(sayi,virgul){
    sayi = parseFloat(sayi);
    virgul = parseInt(virgul);
    virgul=Math.pow(10,virgul);
    var deger=Math.round(sayi*virgul)/virgul;
    return deger;
}
function tile2LatLong (x,y,zoom){
    var n=Math.PI-2*Math.PI*y/Math.pow(2,zoom);
    var lng = (x/Math.pow(2,zoom)*360-180);
    var lat = (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))))
    return {lat:lat,lng:lng};
}

L.Layout ={
    pafta:function (latLng,country) {
        var pafta = new Pafta(latLng,country);
        return pafta;
    },
    getScaleList:function () {
        return this.pafta.scales;
    },
    getNameScale:function (scale) {
        return this.pafta.get(scale).name;
    },
    getGlobalName:function (scale) {
        return this.pafta.get(scale).globalName;
    },
    getScaleBbox:function (scale) {
        return this.pafta.get(scale).bbox;
    },
    setColor:function (scale,color) {
        this.pafta.paftalar[scale].color=color;
        return this.pafta;
    },
    draw:function (scale) {
        this.pafta.draw(scale);
        return this.pafta;
    }
};

