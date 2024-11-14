import './Rate.css'
const Rate = ({rate = '0.0'}) => {
    return (
        <div id="rate">
            <img className='star' src="./Star.svg" alt="" />
            <p>{rate}</p>
        </div>
    )
}

export default Rate