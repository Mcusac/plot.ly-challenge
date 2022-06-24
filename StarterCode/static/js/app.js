// D3 DATA
    d3.json("samples.json").then(function(data) {
        console.log(data);

        // DROPDOWN
            // Use D3 to select the dropdown menu
            var dropdownMenu = d3.select("#selDataset");
            // Assign the value of the dropdown menu option to a variable
            data.names.forEach((id) => {
                // console.log(id)
                dropdownMenu.append("option").text(id).property("value", id);
                
            })
        loadcharts(data.names[0])  
    });

    function optionChanged(this_id){
        loadcharts(this_id)
    }
    function loadcharts(selected){
        d3.json("samples.json").then(function(data){
            console.log(selected)

            // BAR CHART
                let results = data.samples.filter(obj => obj.id == selected);

                // console.log(results)
                // console.log(results[0])
                // console.log(results[0].otu_ids)
                // console.log(results[0].otu_labels)
                // console.log(results[0].sample_values)

                // // Reverse the array to accommodate Plotly's defaults
                // reversedData = slicedData.reverse();
            

                // Trace1 for the OTU Data
                let trace1 = {
                    x: results[0].sample_values.slice(0,10).reverse(),
                    y: results[0].otu_ids.slice(0,10).map(obj => "OTU " + obj ).reverse(),
                    text: results[0].otu_labels.slice(0,10).reverse(),
                    name: "OTUs by Sample Size",
                    type: "bar",
                    orientation: "h"
                };
            
                // Data array
                // `data` has already been defined, so we must choose a new name here:
                let traceData1 = [trace1];
            
                // Apply a title to the layout
                let layout1 = {
                    title: "OTUs by Sample Size",
                    margin: {
                        l: 100,
                        r: 100,
                        t: 100,
                        b: 100
                    }
                };
            
                // Render the plot to the div tag with id "plot"
                // Note that we use `traceData` here, not `data`
                Plotly.newPlot("bar", traceData1, layout1);

            // BUBBLE CHART


                // Trace2 for the OTU Data
                let trace2 = {
                    y: results[0].sample_values,
                    x: results[0].otu_ids,
                    text: results[0].otu_labels,
                    mode:"markers",
                    marker: {
                        size: results[0].sample_values,
                        color: results[0].otu_ids
                    },
                    name: "OTU ID",
                    type: "bubble",
                    };

                // Data array
                // `data` has already been defined, so we must choose a new name here:
                let traceData2 = [trace2];

                // Apply a title to the layout
                let layout2 = {
                    title: "OTU ID",
                    margin: {
                        l: 100,
                        r: 100,
                        t: 100,
                        b: 100
                    }
                    };
                
                    // Render the plot to the div tag with id "plot"
                    // Note that we use `traceData` here, not `data`
                    Plotly.newPlot("bubble", traceData2, layout2);

            // DEMOGRAPHIC INFO
                let metaresults = data.metadata.filter(obj => obj.metadata == selected);
                console.log(metaresults[0])
        })
    }
