import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Left = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <Tooltip 
        placement="left"
        overlay={renderTooltip}
        >
            <span>Left</span>
        </Tooltip>
    )
}

export default Left;