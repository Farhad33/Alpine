'use client'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import API, { importPatientAPI } from '@/lib/API'
import SidePanel from './SidePanel'
import GraphContainer from './GraphContainer'


export default function DashboardPage() {
    const isPatientImported = useRef(false)
    const [patients, usePatients] = useState([])
    const [graphData, setGraphData] = useState({})

    const handleGraphSelection = (secondData, firstData, unit) => {
        API.get('/patients')
        .then(patients => {
            usePatients(patients?.data?.rows || [])
            setGraphData({ firstData, secondData, unit })
        })
        .catch( console.log )
    }
    
    useEffect( () => {
        if (!isPatientImported.current) {
            isPatientImported.current = true
            importPatientAPI.post()
            .catch( console.log )
        }

    }, [])

    return (
        <DashboardContainer>
            <SidePanel handleGraphSelection={handleGraphSelection} />
            <GraphContainer patients={patients} graphData={graphData} />
        </DashboardContainer>
    )
}

export const DashboardContainer = styled.div`
    display: flex;
`