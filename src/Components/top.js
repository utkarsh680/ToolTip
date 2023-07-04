import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Top = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <Tooltip 
        placement="top"
        overlay={renderTooltip}
        >
        <span>Top</span>
        </Tooltip>
    )
}

export default Top;