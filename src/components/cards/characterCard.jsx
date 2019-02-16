import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../characters/charactersAction';
import ActionButton from '../shared/actionButton';
import '../../template/style.css';
import consts from '../../utils/consts';

const { Content } = Card;

class CharacterCard extends Component {

    static propTypes = {
        openModal: PropTypes.func,
        character: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        openModal: () => {},
        character: {}
    };

    handleOpen = (modal) => {
        console.log('modal ', modal);
        const { openModal, character } = this.props;
        openModal(modal, character);
    };

    render() {
        const { character } = this.props;
        return (
        <Card>
            <Image src={character.image} className='fixedHeight'/>
            <Content extra>
                <ActionButton iconType='currency' size='medium' color='green' parameters={consts.GUESS_MODAL} side='right' event={this.handleOpen} />
                <ActionButton iconType='currency' size='medium' color='blue' parameters={consts.INFO_MODAL} side='right' event={this.handleOpen} />
            </Content>
        </Card> );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ openModal }, dispatch);
export default connect(null, mapDispatchToProps)(CharacterCard);
