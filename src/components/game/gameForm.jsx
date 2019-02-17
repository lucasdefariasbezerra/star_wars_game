import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal } from '../characters/charactersAction';
import { calculatePoints } from './gameActions';
import PropTypes from 'prop-types';
import { Container, Form } from 'semantic-ui-react';
const { Field, Input } = Form;
import ActionButton from '../shared/actionButton';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import consts from '../../utils/consts';

class GameForm extends Component {

    state = {
        guess: ''
    }

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any),
        game: PropTypes.objectOf(PropTypes.any),
        closeModal: PropTypes.func,
        calculatePoints: PropTypes.func
    };

    static defaultProps = {
        character: {},
        game: {},
        closeModal: () => {},
        calculatePoints: () => {}
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGuess = () => {
        const { character } = this.props;
        const { guess } = this.state;

    }

    calculateScore = (guess, name) => {
        const { game, calculatePoints } = this.props;
        let message = '';
        let points = 0;
        const shots = game.shots - 1;
        if (guess.toLowerCase() === name.toLowerCase()) {
            points = game.point + 10;
            message = `Voce Acertou. Sua pontuação é ${points}. Você tem ${shots} tentativas`;
            const toaster = mountToaster(message, consts.SUCCESS);
            this.setToaster(toaster);
        } else {
            points = game.point;
            message = `Voce ERROU. Sua pontuação é ${points}. Você tem ${shots} tentativas`;
            const toaster = mountToaster(message, consts.ERROR);
            this.setToaster(toaster);
        }
        calculatePoints(points, shots);
    }

    mountToaster = (message, type) => {
        const { closeModal } = this.props;
        if (type === consts.SUCCESS) {
            return { ...consts.TOASTER_TEMPLATE, description: message, onClick: closeModal, onClose: closeModal };
        } else {
            return { ...consts.TOASTER_TEMPLATE, description: '', icon: 'delete', type: 'error', onClick: closeModal, onClose: closeModal };
        }
    }

    setToaster = (toaster) => {
        setTimeout(() => { toast(toaster); }, 2000);
    }

    render() {
        return (
            <Container text>
                <SemanticToastContainer />
                <Form>
                    <Field width={6}>
                        <Input
                            name='guess'
                            placeholder='qual é o personagem ?'
                            label='personagem'
                            onChange={this.handleInputChange} />
                    </Field>
                    <ActionButton iconType='target' size='big' color= 'green' event={this.handleGuess} />
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ character: state.character.openChar, game: state.game });
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, calculatePoints }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GameForm);