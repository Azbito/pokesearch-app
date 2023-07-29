import { Text as NativeText } from 'react-native'
import { ReactNode } from 'react'
import { Poppins } from '../../utils/fonts'

interface TextProps {
  children: ReactNode
  fontWeight: 'REGULAR' | 'MEDIUM' | 'BOLD'
  fontSize?: number
  color?: string
}

export function Text({ children, fontWeight, fontSize, color }: TextProps) {
  return (
    <NativeText style={{ fontFamily: Poppins[fontWeight], fontSize, color }}>
      {children}
    </NativeText>
  )
}
