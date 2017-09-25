# Global Map Threader Segmentation Library

For easy find to map threaders we are using Global Map Threader Segmentation.
every threaders have a name. this name is address on the map. Systematically, a Direct Proportion finding method is used.
## [Demo (click here)](http://www.alikilic.org/ulkepaftalama/index.html)

![alt text](http://www.yazilimlar.sektorharita.com/esref/img/pafta.png)


## Getting Started

So easy a library writed for us. You can work all location
### İnclude HTML Page

You can add javascript tag in head or bottom html tag

```
<script src="src/js/turkey.js"></script>
<script src="src/js/download.js"></script>
<script src="src/js/mapSectionLayout.js"></script>
```

### Using


```
var layout = new Pafta({lat:e.latlng.lat,lng:e.latlng.lng},'turkey');

//  if you wanna draw rectangle 
layout.draw(scale,true);

// if you wanna download İmage Data
layout.getRaster(olcek,'hybrid');

// if you wanna download 3D surface point data
layout.scanSurfacePoints(olcek);

```

### Methods

```
var layout = L.Layout.pafta(latLng,countryname);

// getScaleList
layout.getScaleList();

// getNameScale
layout.getNameScale(scale);

//getGlobalName
layout.getGlobalName(scale);

//setColor
layout.setColor(scale,colorhex);

//draw
layout.draw(scale,true);

//getRaster
layout.getRaster(olcek,'hybrid');

//scanSurfacePoints
layout.scanSurfacePoints(olcek);

```

## Deployment

Add additional notes about how to deploy this on a live system


## Authors

* **Ali KILIÇ** - *Initial work* - [PurpleBooth](https://github.com/gislayer)

See also the list of [contributors](http://www.alikilic.org) who participated in this project.


