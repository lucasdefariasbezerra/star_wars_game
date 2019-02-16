import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal } from '../characters/charactersAction';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const { Content, Actions } = Modal;

class CharModal extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        closeModal: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        closeModal: () => {}
    };

    handleClose = () => {
        const { closeModal } = this.props;
        closeModal();
    }

    render() {
        const { isOpen } = this.props;
        return (
            <Modal open={isOpen} onClose={this.handleClose} size='small'>
                <Header icon='browser' content='Cookies policy' />
                <Content>
                    <h3>digite o personagem</h3>
                </Content>
                <Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                </Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({ isOpen: state.character.isModalOpen });
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharModal);