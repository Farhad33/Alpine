'use client'
import styled from 'styled-components'
import Image from 'next/image'

export default function Header() {

    return (
        <HeaderContainer>
            <Image
                src="/alpine-logo.jpeg"
                alt="profile logo"
                width={50}
                height={50}
            />
            <Image
                src="/profile-logo.png"
                alt="profile logo"
                width={50}
                height={40}
            />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;

`
