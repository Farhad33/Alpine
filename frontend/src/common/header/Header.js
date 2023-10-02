"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../header/HeaderStyle'



export default function Header(props)  {

    useEffect(() => {
        // // Fetch data from the API here
        // importPatientAPI.post()
        // .catch( console.log )
    }, [])

    return(
        <Container>
            header
        </Container>
    )
}