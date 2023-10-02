import React from 'react';
import * as d3 from 'd3';

const ClientComparisonBarGraph = ({ data, longestClientsArray, selectedBiomarker, longestClientsDate }) => {
  // Filter the data to include only clients who took the test on the longestClientsDate
  const filteredData = data.filter((d) => d.date_testing === longestClientsDate);

  // Access the selected biomarker for the y-axis
  const yValue = (d) => d[selectedBiomarker];

  // Set up SVG dimensions
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create scales
  const xScale = d3
    .scaleBand()
    .domain(filteredData.map((d) => d.client_id))
    .range([0, width])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(filteredData, yValue)])
    .nice()
    .range([height, 0]);

  // Create a color scale
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  return (
    <div>
      <h2>Client Comparison Bar Graph</h2>
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {filteredData.map((d) => (
            <rect
              key={d.client_id}
              x={xScale(d.client_id)}
              y={yScale(yValue(d))}
              width={xScale.bandwidth()}
              height={height - yScale(yValue(d))}
              fill={colorScale(d.client_id)}
            />
          ))}
          <g
            className="x-axis"
            transform={`translate(0, ${height})`}
            ref={(node) => d3.select(node).call(d3.axisBottom(xScale))}
          />
          <g className="y-axis" ref={(node) => d3.select(node).call(d3.axisLeft(yScale))} />
        </g>
      </svg>
    </div>
  );
};

export default ClientComparisonBarGraph;
