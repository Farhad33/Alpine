'use client'
import styled from 'styled-components'


export default function SidePanel({ handleGraphSelection }) {

    return (
        <SidePanelContainer>
            <SidePanelTitle>List of Graphs</SidePanelTitle>
            <SepratorLine />
            <Button onClick={() => handleGraphSelection('creatine', 'date_testing', 'mgdl')}>Creatine</Button>
            <Button onClick={() => handleGraphSelection('chloride', 'date_testing', 'mmoll')}>Chloride</Button>
            <Button onClick={() => handleGraphSelection('fasting_glucose', 'date_testing', 'mgdl')}>Fasting Glucose</Button>
            <Button onClick={() => handleGraphSelection('potassium', 'date_testing', 'mmoll')}>Potassium</Button>
            <Button onClick={() => handleGraphSelection('sodium', 'date_testing', 'ul')}>Sodium</Button>
            <Button onClick={() => handleGraphSelection('total_calcium', 'date_testing', 'mgdl')}>Total Calcium</Button>
            <Button onClick={() => handleGraphSelection('total_protein', 'date_testing', 'gdl')}>Total Protein</Button>
        </SidePanelContainer>
    )
}

const Button = styled.button`
    padding: 10px 20px;
    margin: 12px 1vw;
    font-weight: 500;
    font-size: 15px;
`

const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 200px;
    width: 400px;
    /* max-width: 90vw; */
    background-color: #32384e;
    min-height: 100vh;
`
const SidePanelTitle = styled.h2`
    padding: 20px 0;
    text-align: center;
    color: white;
`
const SepratorLine = styled.div`
    height: 3px;
    background-color: #262b38;
    margin: 0 10px;
    margin-bottom: 10px;
`