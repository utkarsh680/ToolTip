import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Bottom = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <Tooltip 
        placement="bottom"
        overlay={renderTooltip}
        >
            <span>Bottom</span>
        </Tooltip>
    )
}

export default Bottom;