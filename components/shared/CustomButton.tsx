

import React from "react";
import { View, Text, Pressable } from "react-native"
import { PressableProps } from "react-native/Libraries/Components/Pressable/Pressable";

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'contained' | 'text-only'
  className?: string
}


const CustomButton = React.forwardRef(
  (
    { children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: Props, 
    ref: React.Ref<View>
  ) => {

  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color]



  if( variant === 'text-only') {
    return(
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className={`text-center ${textColor} font-modelica`}>{children}</Text>
      </Pressable>
    )
  }

  return(
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-50 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
      ref={ref}
    >
      <Text className="text-white text-center font-modelica">{children}</Text>
    </Pressable>
  )
})

export default CustomButton;