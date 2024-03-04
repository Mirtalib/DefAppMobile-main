import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#FF8C03" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
  </Svg>
)
export default SvgComponent
