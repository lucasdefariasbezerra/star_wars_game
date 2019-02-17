import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../characters/charactersAction';
import { toast } from 'react-semantic-toasts';
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
        const { openModal, character } = this.props;
        if (character.disabled) {
            const toaster = {...consts.TOASTER_TEMPLATE, type: 'warning',
                description: 'Voce ja tentou advinhar esse personagem', title: 'Advertência' };
            setTimeout(() => { toast(toaster); }, 2000);
        } else {
            openModal(modal, character);
        }
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
