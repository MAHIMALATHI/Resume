import { Box, Flex, HStack, useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useLocation } from 'react-router-dom';
import BuilderArea from '../BuilderArea';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const bgColor = 'darkslategray';
    const hoverBgColor = useColorModeValue('gray.200', 'gray.700');
    const hiddenPaths = ['/login', '/sign-in', '/theme1'];
    const displayNavbar = !hiddenPaths.includes(location.pathname);

    if (!displayNavbar) {
        return null;
    }

    const linkStyle = {
        color:'white',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '0 12px',
        textDecoration: 'none',
        
    };

    const hoverStyle = {
        backgroundColor: hoverBgColor,
    };

    return (
        <Box 
            id='navbar' 
            bg={bgColor} 
            px={4} 
            boxShadow="md" 
            style={{ 
                borderBottom: '1px solid #e2e8f0', 
                position: 'fixed', 
                height:'10%',
                top: 0, 
                marginTop:'0%',
                textAlign:'center',
                width: '100%', 
                zIndex: 1000 
            }}>
            <Flex h={16} alignItems={'center'} justifyContent={'center'}>
                <HStack spacing={8} alignItems={'center'}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/intro'}
                            style={linkStyle}
                        >
                            Home
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/about'}
                            style={linkStyle}
                        >
                            About
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/home'}
                            style={linkStyle}
                        >
                            Resume
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/home'}
                            style={linkStyle}
                        >
                            CoverLetter
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/home'}
                            style={linkStyle}
                        >
                            Portfolio
                        </ReachLink>
                        
                    </HStack>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
}
