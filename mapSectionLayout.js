

// enlem : 38.7412 boylam : 27.7266
function Pafta(latLng,country) {
    this.name='';
    this.country=country;
    this.enlem = latLng.lat;
    this.boylam = latLng.lng;
    this.scales=[2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100];
    this.paftalar = {
        5000000:{color:'',width:30,height:20,lat:5,lng:5,get:10000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},name:'',globalName:''},
        2000000:{color:'#ff0000',width:6,height:8,lat:2,lng:1,get:5000000,to:1000000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:2000000,name:'',globalName:''},
        1000000:{color:'#80d033',width:6,height:4,lat:2,lng:2,get:2000000,to:500000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['b'],['a']],name:'',globalName:''},
        500000:{color:'#2ec1e5',width:3,height:2,lat:2,lng:2,get:1000000,to:250000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        250000:{color:'#438881',width:1.5,height:1,lat:2,lng:3,get:500000,to:100000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        100000:{color:'#d843ff',width:0.5,height:0.5,lat:2,lng:2,get:250000,to:50000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['5','2'],['6','3']],name:'',globalName:''},
        50000:{color:'#085fff',width:0.25,height:0.25,lat:2,lng:2,get:100000,to:25000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        25000:{color:'#ffb6b6',width:0.125,height:0.125,lat:2,lng:2,get:50000,to:10000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        10000:{color:'#ffa900',width:0.05,height:0.05,lat:5,lng:5,get:50000,to:5000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['21','16','11','6','1'],['22','17','12','7','2'],['23','18','13','8','3'],['24','19','14','9','4'],['25','20','15','10','5']],name:'',globalName:''},
        5000:{color:'#ff00fe',width:0.025,height:0.025,lat:2,lng:2,get:10000,to:2000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        2000:{color:'#b55877',width:0.0125,height:0.0125,lat:2,lng:2,get:5000,to:1000,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        1000:{color:'#0c6502',width:0.00625,height:0.00625,lat:2,lng:2,get:2000,to:500,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        500:{color:'#ad3c68',width:0.003125,height:0.003125,lat:2,lng:2,get:1000,to:250,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['4','1'],['3','2']],name:'',globalName:''},
        250:{color:'#717171',width:0.0015625,height:0.0015625,lat:2,lng:2,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['d','a'],['c','b']],name:'',globalName:''},
        100:{color:'#d09d8b',width:0.000625,height:0.000625,lat:5,lng:5,get:500,to:100,bbox:{leftBottom:{lat:0,lng:0},rightTop:{lat:0,lng:0}},label:[['21','16','11','6','1'],['22','17','12','7','2'],['23','18','13','8','3'],['24','19','14','9','4'],['25','20','15','10','5']],name:'',globalName:''}
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
Pafta.prototype.get=function (scale) {
    if(this.scales.indexOf(scale)>-1){
        this.setName(scale);
        return this.paftalar[scale];
    }else{
        alert('Wrong Scale Number Please Select Only This Value : (2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100)');
        return false;
    }


};
Pafta.prototype.setDefaultName = function (dizi,scale) {
    var a=0;
    var name = "";
    for(olcek in this.scales){
        if(this.scales[olcek]==scale){
            if(a==0){
                this.name=this.paftalar[dizi[olcek]].name;
                a++;
            }else{
                this.name=this.name+'-'+this.paftalar[dizi[olcek]].name;
            }
            break;
        }else{
            if(a==0){
                this.name=this.paftalar[dizi[olcek]].name;
                a++;
            }else{
                this.name=this.name+'-'+this.paftalar[dizi[olcek]].name;
            }
        }
    }
};
Pafta.prototype.setName100000=function () {
    var name='';
    var json = LocalLayer100000[this.country];
    var bbox = json.bbox;
    var horizontal = json[json.horizontal];
    var vertical = json[json.vertical];
    var fetbbox = this.paftalar['100000'].bbox.leftBottom;
    var farkhor = (fetbbox.lng-bbox.leftBottom.lng)/this.paftalar['100000'].width;
    var farkver = (fetbbox.lat-bbox.leftBottom.lat)/this.paftalar['100000'].height;
    var number = horizontal[farkhor];
    var text = vertical[farkver];
    name = text+""+number;
    return name;
};
Pafta.prototype.setName250000=function () {
    var nnn = '';
    var json = LocalLayer250000[this.country];
    var bbox = LocalLayer250000.bbox;
    var leftBottomLat = bbox.leftBottom.lat;
    var leftBottomLng = bbox.leftBottom.lng;
    var orjleftBottomLat = this.paftalar['250000'].bbox.leftBottom.lat;
    var orjleftBottomLng = this.paftalar['250000'].bbox.leftBottom.lng;
    var boyfark = orjleftBottomLng-leftBottomLng;
    var enfark = orjleftBottomLat-leftBottomLat;
    var tamboy = boyfark/this.paftalar['250000'].width;
    var tamen = enfark/this.paftalar['250000'].height;
    var name = json[tamen][tamboy];
    return nnn;
};
Pafta.prototype.setName=function (scale) {
    var newscales = this.scales;
    if(scale==10000 || scale==25000){
        if(scale==10000){
            var indexnum = this.scales.indexOf(25000);
            newscales.splice(indexnum,1);
        }else{
            var indexnum = this.scales.indexOf(10000);
            newscales.splice(indexnum,1);
        }

    }
    if(newscales.indexOf(scale)>-1){
        if(scale==250000 || scale==100000){
            if(scale==250000){
                var name = this.setName250000();
                this.name=this.name+''+name;
            }else{
                var name = this.setName100000();
                this.name=this.name+''+name;
            }
        }else{
            this.setDefaultName(newscales,scale);
        }
        this.paftalar[scale].globalName=this.name;
    }else{
        alert('Wrong Scale Number Please Select Only This Value : (2000000,1000000,500000,250000,100000,50000,25000,10000,5000,2000,1000,500,250,100)');
        return false;
    }
};
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
        if(this.boylam>=0 && this.enlem>=0){
            bint=bint+30;
            eint=eint+11;
        }
        if(this.boylam<0 && this.enlem>=0){
            bint=30-bint;
            eint=eint+11;
        }
        if(this.boylam<0 && this.enlem<0){
            bint=30-bint;
            eint=11-eint;
        }
        if(this.boylam>=0 && this.enlem<0){
            bint=bint+30;
            eint=11-eint;
        }
        kendi.name = harfdizi[eint]+''+saydizi[bint];
    }

    return {leftBottom:{lat:solAltEn,lng:solAltBoy},rightTop:{lat:sagUstEn,lng:sagUstBoy}};
};





var rec=false;
function drawRect(sonuc,olcek,renk) {
    var bbox = sonuc.paftalar[olcek].bbox;
    var bounds = [[bbox.leftBottom.lat,bbox.leftBottom.lng], [bbox.rightTop.lat, bbox.rightTop.lng]];
    console.log(bounds);
    L.rectangle(bounds, {color: sonuc.paftalar[olcek].color, weight: 1}).bindPopup(sonuc.paftalar[olcek].globalName).addTo(map);
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
