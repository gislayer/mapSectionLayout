

// enlem : 38.7412 boylam : 27.7266
function Pafta(latLng,scale) {
    this.enlem = latLng.lat;
    this.boylam = latLng.lng;
    this.paftalar = {
        5000000:{width:30,height:20,lat:5,lng:5,get:10000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        2000000:{width:12,height:8,lat:2,lng:2,get:2000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        1000000:{width:6,height:4,lat:2,lng:2,get:5000000,to:500000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        500000:{width:3,height:2,lat:2,lng:2,get:1000000,to:250000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        250000:{width:1.5,height:1,lat:2,lng:3,get:500000,to:100000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        100000:{width:0.5,height:0.5,lat:2,lng:2,get:250000,to:50000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        50000:{width:0.25,height:0.25,lat:2,lng:2,get:100000,to:25000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        25000:{width:0.125,height:0.125,lat:2,lng:2,get:50000,to:10000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        10000:{width:0.05,height:0.05,lat:5,lng:5,get:50000,to:5000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        5000:{width:0.025,height:0.025,lat:2,lng:2,get:50000,to:2000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        2000:{width:0.0125,height:0.0125,lat:2,lng:2,get:5000,to:1000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        1000:{width:0.00625,height:0.00625,lat:2,lng:2,get:2000,to:500,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        500:{width:0.003125,height:0.003125,lat:2,lng:2,get:1000,to:250,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        250:{width:0.0015625,height:0.0015625,lat:2,lng:2,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}},
        100:{width:0.000625,height:0.000625,lat:5,lng:5,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}}}
    };

    this.paftalar['2000000'].bbox=this.set(2000000);
    this.paftalar['1000000'].bbox=this.set(1000000);
    this.paftalar['500000'].bbox=this.set(500000);
    this.paftalar['250000'].bbox=this.set(250000);
    this.paftalar['100000'].bbox=this.set(100000);
    this.paftalar['50000'].bbox=this.set(50000);
    this.paftalar['25000'].bbox=this.set(25000);
    this.paftalar['10000'].bbox=this.set(10000);
    this.paftalar['5000'].bbox=this.set(5000);
    this.paftalar['2000'].bbox=this.set(2000);
    this.paftalar['1000'].bbox=this.set(1000);
    this.paftalar['500'].bbox=this.set(500);
    this.paftalar['250'].bbox=this.set(250);
    this.paftalar['100'].bbox=this.set(100);
    return this;
}
Pafta.prototype.set=function (scale) {
    var en = this.enlem;
    var bo = this.boylam;
    var kendi=this.paftalar[scale];
    var ust = kendi.get;
    var box = this.paftalar[ust].bbox;
    var farken =en-box.leftBottom.lat;
    var farkboy=bo-box.leftBottom.lng;
    var boyint = parseInt(farkboy/kendi.width);
    var enint = parseInt(farken/kendi.height);
    var solAltBoy = box.leftBottom.lng+(boyint*kendi.width);
    var solAltEn = box.leftBottom.lat+(enint*kendi.height);
    if(this.boylam>=0 && this.enlem>=0){
        var sagUstEn = solAltEn+kendi.height;
        var sagUstBoy = solAltBoy+kendi.width;
    }
    if(this.boylam<0 && this.enlem>=0){
        var sagUstEn = solAltEn+kendi.height;
        var sagUstBoy = solAltBoy-kendi.width;
    }
    if(this.boylam<0 && this.enlem<0){
        var sagUstEn = solAltEn-kendi.height;
        var sagUstBoy = solAltBoy-kendi.width;
    }
    if(this.boylam>=0 && this.enlem<0){
        var sagUstEn = solAltEn-kendi.height;
        var sagUstBoy = solAltBoy+kendi.width;
    }
    return {leftBottom:{lat:solAltEn,lng:solAltBoy},rightTop:{lat:sagUstEn,lng:sagUstBoy}};
};





var rec=false;
function drawRect(bbox,renk) {
    var bounds = [[bbox.leftBottom.lat,bbox.leftBottom.lng], [bbox.rightTop.lat, bbox.rightTop.lng]];
    console.log(bounds);
    L.rectangle(bounds, {color: renk, weight: 1}).addTo(map);
    /*if(rec==false){
        rec=L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
    }else{
        rec.setBounds(bounds);
    }*/
}



/*
function  paftaSec(a) {
    var olcek = a.value;
    olcek=parseInt(olcek);
    var sonuc = new Pafta({lat:38.7412,lng:27.7266},olcek);
}*/
