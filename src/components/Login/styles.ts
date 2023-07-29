import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

const SCREEN = {
  WIDTH: Dimensions.get('screen').width,
  HEIGHT: Dimensions.get('screen').height
}

export const styles = StyleSheet.create({
  container: {
    width: SCREEN.WIDTH,
    height: SCREEN.HEIGHT,
    paddingHorizontal: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  },
  content: {
    width: '100%',
    gap: 16
  }
})
