import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal } from '../characters/charactersAction';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import consts from '../../utils/consts';
const { Content, Actions } = Modal;

class CharModal extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        modalType: PropTypes.string,
        closeModal: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        modalType: '',
        closeModal: () => {}
    };

    handleClose = () => {
        const { closeModal } = this.props;
        closeModal();
    }

    renderText = (modal) => {
        const isGuess = modal === consts.GUESS_MODAL;
        const content = isGuess ? ' guess the name ' : ' character info ';
        return content;
    }

    render() {
        const { isOpen, modalType } = this.props;
        return (
            <Modal open={isOpen} onClose={this.handleClose} size='small'>
                <Header icon='browser' content={this.renderText(modalType)} />
                <Content>
                </Content>
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
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharModal);