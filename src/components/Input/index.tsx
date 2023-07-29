import { TextInput, TextInputAndroidProps, View } from 'react-native'
import { styles } from './styles'
import { Text } from '../Text'
import { Colors } from '../../utils/colors'

interface InputProps extends TextInputAndroidProps {
  label: string
  error?: string
  borderColor?: string
  isConfidential?: boolean
  onChange: (text: any) => void
}

export function Input({
  label,
  error = '',
  isConfidential,
  onChange,
  borderColor,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text fontWeight="REGULAR">{label}</Text>
      <TextInput
        style={[styles.input, { borderColor }]}
        {...props}
        onChange={onChange}
        textContentType={isConfidential ? 'password' : 'name'}
        secureTextEntry={isConfidential}
      />
      {error && (
        <Text fontWeight="REGULAR" color={Colors.RED}>
          {error}
        </Text>
      )}
    </View>
  )
}
