import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    to={config.routes.profile}
                />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                />
                <MenuItem title="Live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
