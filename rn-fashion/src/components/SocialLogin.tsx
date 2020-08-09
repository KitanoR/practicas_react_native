import React from 'react';
import { Image, StyleSheet, Dimensions,  } from 'react-native';
import theme, { Box } from './Theme';

const { width } = Dimensions.get("window");

// iconos
const GOOGLE = require('./assets/social/google.png');
const FACEBOOK = require('./assets/social/facebook.png');
const TWITTER = require('./assets/social/twitter.png');
interface SocialLoginProps {
}

interface SocialIconProps {
    imagen: string;
}
const SocialIcon = ({ imagen }: SocialIconProps) => {
    return(
        <Box 
                marginHorizontal="m"
                backgroundColor="white" 
                borderRadius="l"
                width={44} 
                alignItems="center"
                justifyContent="center"
                height={44}>
                <Image 
                      style={{
                        width: 20,  
                        height: 20,
                        aspectRatio: 1, // <-- this
                    }}
                    source={imagen} />
            </Box>
    )
}


const SocialLogin = () => {
    return(
        <Box flexDirection="row" alignItems="center" justifyContent="center">
            <SocialIcon imagen={FACEBOOK} />
            <SocialIcon imagen={GOOGLE} />
            <SocialIcon imagen={TWITTER} />
        </Box>
    )
}

const styles = StyleSheet.create({
  
})

export default SocialLogin;