// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Poper';
import styles from './SuggestedAcounts.module.scss';
import AcountPreview from './AcountPreview';

const cx = classNames.bind(styles);

function AcountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AcountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-12, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('acount-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>maivanpho</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Mai Văn Phố</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AcountItem.propTypes = {};

export default AcountItem;
