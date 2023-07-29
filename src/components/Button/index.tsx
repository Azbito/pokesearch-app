import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { Colors } from '../../utils/colors'
import { Text } from '../Text'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  isGoogle?: boolean
  color?: string
}

export function Button({ text, isGoogle, color, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isGoogle ? { borderColor: Colors.BLUE_600 } : { borderColor: color }
      ]}
      {...props}
    >
      {isGoogle && (
        <AntDesign color={Colors.BLUE_600} size={24} name="google" />
      )}

      <Text fontWeight="REGULAR" color={isGoogle ? Colors.BLUE_600 : color}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
