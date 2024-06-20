import { white as _white, gray as _gray, blue as _blue } from 'tailwindcss/colors'

export const content = [
  './renderer/app/**/*.{js,ts,jsx,tsx}',
  './renderer/components/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  colors: {
    // use colors only specified
    white: _white,
    gray: _gray,
    blue: _blue,
  },
  extend: {},
}
export const plugins = []
