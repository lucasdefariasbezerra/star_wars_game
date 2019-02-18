import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../characters/charactersAction';
import { changeIsTakenInfo } from '../game/gameActions';
import { toast } from 'react-semantic-toasts';
import ActionButton from '../shared/actionButton';
import '../../template/style.css';
import consts from '../../utils/consts';

const { Content } = Card;

class CharacterCard extends Component {

    static propTypes = {
        openModal: PropTypes.func,
        changeIsTakenInfo: PropTypes.func,
        character: PropTypes.objectOf(PropTypes.any),
        shots: PropTypes.number
    };

    static defaultProps = {
        openModal: () => {},
        changeIsTakenInfo: () => {},
        character: {},
        shots: 10
    };

    handleOpen = (modal) => {
        const { openModal, character, shots } = this.props;
        if (character.disabled) {
            const toaster = {...consts.TOASTER_TEMPLATE, type: 'warning',
                description: 'Voce ja tentou advinhar esse personagem', title: 'Advertência' };
            setTimeout(() => { toast(toaster); }, 2000);
        } else {
            /* this sets isInfoChecked flag to true
               when info modal is checked */
            if (modal === consts.INFO_MODAL) {
                changeIsTakenInfo(true);
            }

            /*
              while the number of shots in greater than 0
              the user can open both info and game modal
            */
            if (shots > 0) {
                openModal(modal, character);
            }
        }
    };

    render() {
        const { character } = this.props;
        return (
        <Card>
            <Image src={character.image} className='fixedHeight'/>
            <Content extra>
                <ActionButton iconType='play' size='medium' color='green' parameters={consts.GUESS_MODAL} side='right' event={this.handleOpen} />
                <ActionButton iconType='info' size='medium' color='blue' parameters={consts.INFO_MODAL} side='right' event={this.handleOpen} />
            </Content>
        </Card> );
    }
}

const mapStateToProps = state => ({ shots: state.game.shots });
const mapDispatchToProps = dispatch => bindActionCreators({ openModal, changeIsTakenInfo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
