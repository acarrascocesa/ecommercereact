import "./inputSearch.css"

const InputSearch = ({ setInputText, inputText }) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <div className="inputSearch-container">
      <label htmlFor="inputSearch"><span className="inputSearch-title">Filter by Name</span></label>
      <input className='inputSearch' value={inputText} onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch
