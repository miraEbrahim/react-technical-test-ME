import PropTypes from 'prop-types'
import {SelectList } from './Styles'




const Select = ({ options, onChange }) => {
  return (
    <SelectList onChange={onChange} selected="Please select">
    
        <option  value="Please select">Please select</option>
    {options.map((type) => {
      return (
        <option value={type}>
          {type}
        </option>
      )
    })}
  
  </SelectList  >
  )
}

Select.propTypes ={
  options: PropTypes.array.isRequired,
}

export default Select

