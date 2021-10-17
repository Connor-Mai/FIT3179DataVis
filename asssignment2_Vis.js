var vg_1 = "connectjson.vg.json";
vegaEmbed("#vis1", vg_1).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "splomjson.vg.json";
vegaEmbed("#vis2", vg_2).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);