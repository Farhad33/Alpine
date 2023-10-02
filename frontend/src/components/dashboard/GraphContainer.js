'use client'
import styled from 'styled-components'
import Header from './Header'
import TimeSeriesGraph from './TimeSeriesGraph'
import { formatLabel } from '@/lib/formatLabel'


export default function GraphContainer({ patients, graphData }) {

    return (
        <Container>
            <Header />
            <SepratorLine />
            { patients.length ?
                <>
                    <GraphTitle>{formatLabel(graphData.secondData)} - {formatLabel(graphData.firstData)}</GraphTitle>
                    <TimeSeriesGraph
                        data={patients}
                        firstData={graphData.firstData}
                        secondData={graphData.secondData}
                        unit={graphData.unit}
                    />
                </>
                : ''
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #f6f7fb;
`
const GraphTitle = styled.h2`
    margin-top: 20px;
    text-align: center;
`

const SepratorLine = styled.div`
    height: 3px;
    background-color: #ececf0;
    margin: 0 10px;
`

