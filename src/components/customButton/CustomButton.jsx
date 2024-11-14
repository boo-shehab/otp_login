import './CustomButton.css'
const CustomButton = ({onClick, disabled, className = '', children}) => {
    return (
        <button type="button" onClick={onClick} disabled={disabled} className={`customButton cursor-pointer ${className}`}>{children}</button>
    )
}

export default CustomButton;