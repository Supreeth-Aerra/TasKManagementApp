import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
  
  return (
    <header className = "header">
      <h2>{title}</h2>
      <Button  
        color={showAdd ? 'red' : 'green'}
        text ={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Management App',
}
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
