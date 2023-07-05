import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Top = () => {
    var renderTooltip = <span className='world'>Hello world!</span>
    return (
        <div>
            <Tooltip
                placement="top"
                overlay={renderTooltip}
            >
                <span>Top</span>
            </Tooltip>
            <div className="image1">
                <img src="	https://cdn-icons-png.flaticon.com/512/2267/2267911.png" alt='top' />
            </div>
        </div>
    )
}

export default Top;