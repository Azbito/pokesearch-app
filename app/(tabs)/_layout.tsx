import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Login } from 'components/Login'
import 'expo-dev-client'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { WEB_CLIENT_ID } from '@env'
import { AuthGoogleContext, AuthGoogleProvider } from 'contexts/authGoogle'
import { useContext } from 'react'

export default function TabRoutesLayout() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID
  })

  // const { isSigned } = useContext(AuthGoogleContext)
  const isSigned = false

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf')
  })

  if (!fontsLoaded) {
    return undefined
  }

  if (!isSigned) {
    return <Login />
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
