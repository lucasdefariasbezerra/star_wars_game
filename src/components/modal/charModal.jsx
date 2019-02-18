import React, { Component } from 'react';
import '../../template/style.css';
import consts from '../../utils/consts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal } from '../characters/charactersAction';
import { changeIsTakenInfo } from '../game/gameActions';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import CharacterInfo from '../characters/characterInfo';
import GameForm from '../game/gameForm';


const { Content, Actions } = Modal;

class CharModal extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        modalType: PropTypes.string,
        closeModal: PropTypes.func,
        changeIsTakenInfo: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        modalType: '',
        closeModal: () => {},
        changeIsTakenInfo: () => {}
    };

    handleClose = () => {
        const { closeModal, changeIsTakenInfo, modalType } = this.props;
        closeModal();
        if (modalType !== consts.INFO_MODAL) {
            changeIsTakenInfo(false);
        }
    }

    renderText = (modal) => {
        const isGuess = modal === consts.GUESS_MODAL;
        const content = isGuess ? ' guess the name ' : ' character info ';
        return content;
    }

    renderContent = (modal) => {
        return modal === consts.GUESS_MODAL ? (<GameForm />) : (<CharacterInfo />);
    }

    render() {
        const { isOpen, modalType } = this.props;
        return (
            <Modal open={isOpen} onClose={this.handleClose} size='small'>
                <Header icon='browser' content={this.renderText(modalType)} />
                <Content>{ this.renderContent(modalType) }</Content>
                <Actions>
                    <Button color='red' onClick={this.handleClose} inverted>
                        <Icon name='close' /> Close
                    </Button>
                </Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({ isOpen: state.character.isModalOpen,
    modalType: state.character.modalType });
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, changeIsTakenInfo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharModal);