import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Right = () => {
    var renderTooltip = <span>Hello world!</span>
    return (
        <div>
            <Tooltip
                placement="right"
                overlay={renderTooltip}
            >
                <span>Right</span>
            </Tooltip>
            <div className="image2">
                <img src="	https://cdn-icons-png.flaticon.com/512/2267/2267911.png" alt='right' />
            </div>
        </div>
    )
}

export default Right;