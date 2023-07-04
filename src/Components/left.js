import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Left = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <div>
            <Tooltip
                placement="left"
                overlay={renderTooltip}
            >
                <span>Left</span>
            </Tooltip>
            <div className="image4">
                <img src="	https://cdn-icons-png.flaticon.com/512/2267/2267911.png" alt='left' />
            </div>
        </div>
    )
}

export default Left;