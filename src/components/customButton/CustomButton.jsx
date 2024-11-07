import './CustomButton.css'
const CustomButton = ({onClick, disabled, children}) => {
    return (
        <button type="button" onClick={onClick} disabled={disabled} className="customButton">{children}</button>
    )
}

export default CustomButton;