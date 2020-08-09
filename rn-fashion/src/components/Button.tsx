import React, { ReactNode } from 'react';
import {  StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Theme, { Text } from './Theme';


interface ButtonProps {
    variant: "default" | "primary" | "transparent",
    label?: string,
    children?: ReactNode;
    onPress: () => void;
}


const Button = ({ variant, label, onPress, children }: ButtonProps) => {
    const backgroundColor = 
        variant === "primary" 
        ? Theme.colors.primary 
        : variant === "transparent"
        ? "transparent"
        : Theme.colors.gray;

    const color = variant == "primary" ? Theme.colors.white : Theme.colors.text;
    return (
        <RectButton 
            onPress={onPress}
            style={[styles.container, {backgroundColor: backgroundColor }]}>
            {
                (children) ? (
                    children
                ) : (
                    <Text variant="button" style={{ color }}>{label}</Text>
                )
            }
        </RectButton>
    );
}

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
    container: {
        borderRadius:25,
        height: 50,
        minWidth: 245,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Button;