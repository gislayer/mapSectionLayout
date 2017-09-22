

// lat : 38.7412 lng : 27.7266
function Pafta(latLng,country) {
    this.name='';
    this.country=country;
    this.lat = latLng.lat;
    this.lng = latLng.lng;
    this.scales=[2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100];
    this.images = [];
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
Pafta.prototype.getRaster = function (scale) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var LB = this.paftalar[scale].bbox.leftBottom;
    var RT = this.paftalar[scale].bbox.rightTop;
    LB.zoom = this.paftalar[scale].zoom;
    RT.zoom = this.paftalar[scale].zoom;
    var zoom = LB.zoom;
    var LBxy = latLong2tile(LB);
    var RTxy = latLong2tile(RT);
    var x1=LBxy.x;
    var y1=LBxy.y;
    var x2=RTxy.x;
    var y2=RTxy.y;
    var tileLB = tile2LatLong(x1,y1,zoom);
    var tileRT = tile2LatLong(x2,y2,zoom);
    L.marker(tileLB).addTo(map);
    L.marker(tileRT).addTo(map);
    var xfark = Math.abs(x2-x1);
    var yfark = Math.abs(y2-y1);
    canvas.width = 256*(xfark+1);
    canvas.height = 256*(yfark+1);
    canvas.setAttribute("style","width:"+canvas.width+"px; height:"+canvas.height+"px;");

    var xsize=0;
    var imgs = [];
    for(var x=x1;x<=x2;x++){
        var ysize=0;
        var xs=xsize*256;
        for(var y=y2;y<=y1;y++){
            var ys=ysize*256;
            var linki ='http://mt1.google.com/vt/lyrs=m&x='+x+'&y='+y+'&z='+zoom+'';
            //var linki = 'https://a.tile.openstreetmap.org/'+zoom+'/'+x+'/'+y+'.png';
            this.imgDownload(canvas,ctx,linki,xs,ys);
            ysize++;
        }
        xsize++;
    }

};

Pafta.prototype.imgDownload=function(canvas,ctx,link,x,y){
    var imageObj = new Image();
    imageObj.src = link;
    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.onload = function(a) {
        ctx.drawImage(imageObj,x,y);
    };
};

function latLong2tile (obj){
    var lat = obj.lat;
    var lon = obj.lng;
    var zoom = obj.zoom;
    var xtile = (Math.floor((lon+180)/360*Math.pow(2,zoom)));
    var ytile = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
    return {x:xtile,y:ytile,zoom:zoom};
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

