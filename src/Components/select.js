import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Select = () => {
    var renderTooltip = <span>Select option!</span>
    return (
        <Tooltip 
        placement="right"
        overlay={renderTooltip}
        >
            <span className='hover'>Hover over me!</span>
        </Tooltip>
    )
}

export default Select;