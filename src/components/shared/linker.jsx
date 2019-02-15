import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../../template/style.css';
import { Link } from 'react-router-dom';
import consts from '../../utils/consts';

const renderComponent = (type, text) => {
    if (type === consts.BUTTON) {
        return (
            <Button size='massive' color='black'>{text}</Button>
        );
    }
};

const Linker = (props) => {
    return (
        <Link to={`/${props.url}`} className='link'>
            {renderComponent(props.componentType, props.text)}
        </Link>
    );
};

Linker.propTypes = {
    componentType: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string
};

Linker.defaultProps = {
    componentType: '',
    text: '',
    url: ''
};

export default Linker;