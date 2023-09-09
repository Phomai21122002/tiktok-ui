import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AcountItem from './AcountItem';
import styles from './SuggestedAcounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAcounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AcountItem />
            <AcountItem />
            <AcountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAcounts;
