import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title}) => {
  return (
    <TouchableOpacity className={`bg-secondary  rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className="text-primary font-psemibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton