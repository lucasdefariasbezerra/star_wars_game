import React, { Component } from 'react';
import '../../template/style.css';
// import consts from '../../utils/consts';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import RegisterForm from '../game/registerForm';


const { Content, Actions } = Modal;

class SpecialModal extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        modalType: PropTypes.string
    };

    static defaultProps = {
        isOpen: true,
        modalType: ''
    };

    handleClose = () => {}

    render() {
        const { isOpen } = this.props;
        return (
            <Modal open={isOpen} onClose={this.handleClose} >
                <Header icon='info' content='Quiz Finalizado' />
                <Content>
                    <RegisterForm />
                </Content>
                <Actions>
                </Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({ isOpen: state.game.specialModalOpen });
// const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch);
export default connect(mapStateToProps, null)(SpecialModal);