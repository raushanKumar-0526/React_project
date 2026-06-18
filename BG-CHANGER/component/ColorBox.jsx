import Color from './Color'
import '../src/index.css'

const ColorBox = () => {
  return(
    <>
    < div className="main-box">
      <Color colorName="red" />
      <Color colorName="blue" />
      <Color colorName="green" />
      <Color colorName="yellow" />
      <Color colorName="pink" />
      <Color colorName="purple" />
      <Color colorName="orange" />
      <Color colorName="white" />
    </div>
    </>
  )
}

export default ColorBox