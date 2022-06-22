// D3 DATA
    console.log(samples.json)

// BAR CHART

    // Sort the data by OTU search results descending
    let sortedByOTU = data.sort((a, b) => b.OTUSearchResults - a.OTUSearchResults);

    // Slice the first 10 objects for plotting
    slicedData = sortedByOTU.slice(0, 10);

    // Reverse the array to accommodate Plotly's defaults
    reversedData = slicedData.reverse();

    // Trace1 for the OTU Data
    let trace1 = {
        x: reversedData.map(object => object.sample_values),
        y: reversedData.map(object => object.otu_ids),
        text: reversedData.map(object => object.otu_labels),
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
    Plotly.newPlot("plot", traceData1, layout1);

// BUBBLE CHART


    // Trace2 for the OTU Data
    let trace2 = {
        x: sortedByOTU.map(object => object.otu_ids),
        y: sortedByOTU.map(object => object.samples_values),
        text: sortedByOTU.map(object => object.otu_labels),
        color: sortedByOTU.map(object => object.otu_ids),
        size: sortedByOTU.map(object => object.sample_values),
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
        Plotly.newPlot("plot", traceData2, layout2);