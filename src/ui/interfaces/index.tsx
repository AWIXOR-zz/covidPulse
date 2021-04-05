export interface ButtonProps {
  wide?: boolean
  state?: string
  variant: string
  size: string
}

export interface TypographyProps {
  margin?: [number, number, number, number]
  fontSize?: number
  lineHeight?: number
  color?: string
  letterSpacing?: string
  fontWeight?: number
  fontSizeMobile?: number
  align?: string
  customColor?: string
}

export interface InputFieldProps {
  children: React.ReactNode
  label?: string
  error?: boolean
  relative?: boolean
}

export interface SEOProps {
  url?: string
  title?: string
  description?: string
  cover?: string
}
export interface SVGProps {
  width?: string
  height?: string
  color?: string
}
