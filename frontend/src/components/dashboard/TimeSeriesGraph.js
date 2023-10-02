import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { formatLabel } from '@/lib/formatLabel';




const TimeSeriesGraph = ({ data, firstData, secondData, unit }) => {
  const svgRef = useRef();
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [selectedClient, setSelectedClient] = useState({})

  useEffect(() => {
    // Define the dimensions and margins for your graph
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 100, left: 40 };

    // Remove any existing SVG content
    d3.select(svgRef.current).selectAll('*').remove();
    setSelectedClient({})

    // Create an SVG element
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define scales for your data
    const xScale = d3.scaleTime()
      .domain([new Date(data[0][firstData]), new Date(data[data.length - 1][firstData])])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d[secondData])])
      .range([height, 0]);

    // Create and add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    // Add labels for the x and y axes with margin
    svg.append('text')
      .attr('class', 'x-label')
      .attr('x', width / 2)
      .attr('y', height + margin.bottom - 50) // Add margin here
      .style('text-anchor', 'middle')
      .text(formatLabel(firstData));

    svg.append('text')
      .attr('class', 'y-label')
      .attr('x', -height / 2)
      .attr('y', -margin.left - 4) // Add margin here
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text(formatLabel(secondData));

    // Create and add data points (scatter plot)
    svg.selectAll('circle')
      .data(data, d => d.id) // Use a unique identifier (e.g., 'id') as a key
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', 'blue')
      .attr('cx', d => xScale(new Date(d[firstData])))
      .attr('cy', d => yScale(d[secondData]))
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => {
        // Show tooltip on hover
        setTooltipData(d);

        // Calculate tooltip position based on the mouse position
        setTooltipPosition({
          top: event.clientY -250,
          left: event.clientX -400,
        });
      })
      .on('mouseout', () => {
        // Hide tooltip on mouseout
        setTooltipData(null);
      })
      .on('click', (e, client) => {
        setSelectedClient(client)
      })
  }, [data, firstData, secondData]);

  return (
    <GraphContainer>
      <svg ref={svgRef}></svg>
      <Tooltip 
        $visible={tooltipData !== null} 
        $top={tooltipPosition.top} 
        $left={tooltipPosition.left}
      >
        {tooltipData && (
          <>
            <strong>Date:</strong> {tooltipData[firstData]}<br />
            <strong>{formatLabel(secondData)}:</strong> {tooltipData[secondData] + ' ' + [unit]}
          </>
        )}
      </Tooltip>
      {
        Object.entries(selectedClient).length ? 
          <List>
            <li><h4>Client id:</h4><p>{selectedClient.client_id}</p></li>
            <li><h4>Date Testing:</h4><p>{selectedClient.date_testing}</p></li>
            <li><h4>Date Birthdate:</h4><p>{selectedClient.date_birthdate}</p></li>
            <li><h4>Gender:</h4><p>{selectedClient.gender}</p></li>
            <li><h4>Ethnicity:</h4><p>{selectedClient.ethnicity}</p></li>
            <li><h4>Creatine:</h4><p>{selectedClient.creatine} mgdl</p></li>
            <li><h4>Chloride:</h4><p>{selectedClient.chloride} mmoll</p></li>
            <li><h4>Fasting Glucose:</h4><p>{selectedClient.fasting_glucose} mgdl</p></li>
            <li><h4>Potassium:</h4><p>{selectedClient.potassium} mmoll</p></li>
            <li><h4>Sodium:</h4><p>{selectedClient.sodium} ul</p></li>
            <li><h4>Total Calcium:</h4><p>{selectedClient.total_calcium} mgdl</p></li>
            <li><h4>Total Protein:</h4><p>{selectedClient.total_protein} gdl</p></li>
          </List>
        : ''
      }
    </GraphContainer>
  );
};

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 80px;
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
`;
const List = styled.ul`
  font-size: 18px;
  li {
    display: flex;
    font-weight: 500;
    margin-bottom: 2px;
    border-bottom: 1px dotted gray;
  }
  h4 {
    width: 150px;
  }
`

export default TimeSeriesGraph;
