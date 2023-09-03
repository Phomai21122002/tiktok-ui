import PropTypes from 'prop-types';
import './GlabelStyles.scss';

function GlabelStyles({ children }) {
    return children;
}

GlabelStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlabelStyles;
