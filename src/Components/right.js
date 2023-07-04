import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Right = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <Tooltip 
        placement="right"
        overlay={renderTooltip}
        >
            <span>Right</span>
        </Tooltip>
    )
}

export default Right;