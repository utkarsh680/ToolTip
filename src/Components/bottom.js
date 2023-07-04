import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Bottom = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <div>
            <Tooltip
                placement="bottom"
                overlay={renderTooltip}>
                <span>Bottom</span>
            </Tooltip>
            <div className="image3">
                <img src="	https://cdn-icons-png.flaticon.com/512/2267/2267911.png" alt='bottom' />
            </div>
        </div>
    )
}

export default Bottom;