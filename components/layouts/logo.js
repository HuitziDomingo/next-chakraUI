import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

// import img from '../../public/img/huitziLogo.png'

const LogoBox = styled.span`
    font-weight:bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        tranform: rotate(20deg);
    }
`

const Logo = () => {
    // const footPrintImg = `/img/huitziLogo/${useColorModeValue('', 'huitziLogo.png')}`
    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
                    <Text
                        color={useColorModeValue('gray.800', 'widthAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        Huitzitzili Domingo
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo