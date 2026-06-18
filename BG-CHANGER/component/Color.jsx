import '../src/index.css'



const Color = ( {colorName} ) => {

  const bgChange = () => {
    document.body.style.backgroundColor = colorName
  }

  return (
    <div className="clr-btn" style={{ backgroundColor: colorName }} onClick={bgChange} > {colorName} </div>
  )
} 

export default Color 