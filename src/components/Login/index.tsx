import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import { Input } from '../Input'
import { styles } from './styles'
import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Colors } from '../../utils/colors'
import { Text } from '../Text'
import { ScrollView } from 'react-native-gesture-handler'
import { AuthGoogleContext } from 'contexts/authGoogle'

interface FieldsProps {
  login: string
  password: string
}

export function Login() {
  const [fields, setFields] = useState<FieldsProps>({
    login: '',
    password: ''
  })

  const [errors, setErrors] = useState<FieldsProps>({
    login: '',
    password: ''
  })

  const { onGoogleButtonPress } = useContext(AuthGoogleContext)

  function handleChange(
    prop: 'login' | 'password',
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    const { text } = event.nativeEvent
    setFields(prevState => ({ ...prevState, [prop]: text }))

    if (errors[prop]) {
      handleSetErrors(prop, '')
    }
  }

  function handleLogin() {
    if (!fields.login || !fields.password) {
      if (!fields.login) {
        handleSetErrors('login', 'Type a username')
      }

      if (!fields.password) {
        handleSetErrors('password', 'Type a password')
      }
      return
    }
  }

  function handleSetErrors(prop: 'login' | 'password', message: string) {
    setErrors(prevState => ({ ...prevState, [prop]: message }))
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text fontWeight="BOLD" fontSize={32} color={Colors.ORANGE}>
          PokeSearch!
        </Text>
        <View style={styles.content}>
          <Input
            borderColor={errors.login ? Colors.RED : Colors.GREY}
            label="Username"
            error={errors.login}
            onChange={text => handleChange('login', text)}
          />
          <Input
            borderColor={errors.password ? Colors.RED : Colors.GREY}
            label="Password"
            error={errors.password}
            onChange={text => handleChange('password', text)}
            isConfidential
          />
        </View>
        <Button color={Colors.ORANGE} text="Login" />
        <Button
          onPress={onGoogleButtonPress}
          isGoogle
          text="Login with Google"
        />
      </View>
    </ScrollView>
  )
}
