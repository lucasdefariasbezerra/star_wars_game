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
        points: PropTypes.number,
        modalType: PropTypes.string
    };

    static defaultProps = {
        isOpen: true,
        points: 0,
        modalType: ''
    };

    handleClose = () => {}

    render() {
        const { isOpen, points } = this.props;
        const pointsMessage = points !== 0 ? `${points} pontos marcados ` : '';
        const message = `Quiz Finalizado. ${pointsMessage}`;
        console.log('points zxzx ', points);
        return (
            <Modal open={isOpen} onClose={this.handleClose} >
                <Header icon='info' content={message} />
                <Content>
                    <RegisterForm />
                </Content>
                <Actions>
                </Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({ isOpen: state.game.specialModalOpen,
    points: state.game.point });
// const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch);
export default connect(mapStateToProps, null)(SpecialModal);