import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal, disableCharacter } from '../characters/charactersAction';
import { calculatePoints, changeIsTakenInfo, handleSpecialModal } from './gameActions';
import PropTypes from 'prop-types';
import { Container, Form } from 'semantic-ui-react';
const { Field, Input } = Form;
import ActionButton from '../shared/actionButton';
import { toast } from 'react-semantic-toasts';
import consts from '../../utils/consts';

class GameForm extends Component {
    state = {
        guess: '',
        clicked: false
    }

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any),
        game: PropTypes.objectOf(PropTypes.any),
        page: PropTypes.objectOf(PropTypes.any),
        closeModal: PropTypes.func,
        calculatePoints: PropTypes.func,
        disableCharacter: PropTypes.func,
        changeIsTakenInfo: PropTypes.func,
        handleSpecialModal: PropTypes.func
    };

    static defaultProps = {
        character: {},
        game: {},
        page: {},
        closeModal: () => {},
        calculatePoints: () => {},
        disableCharacter: () => {},
        changeIsTakenInfo: () => {},
        handleSpecialModal: () => {}
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGuess = () => {
        const { character, changeIsTakenInfo, game } = this.props;
        const { guess } = this.state;
        const { name } = character;
        const { infoChecked } = game;
        this.calculateScore(guess, character.name, infoChecked);
        this.handleDisableCharacter(name);
        this.setState({ clicked: true });
        changeIsTakenInfo(false);
    };

    handleDisableCharacter = (name) => {
        const { page, disableCharacter } = this.props;
        const { results } = page;
        const newList = results.map((item) => {
            if (item.name === name) {
                return {...item, disabled: true };
            } else {
                return item;
            }
        });
        const newPage = { ...page, results: newList };
        disableCharacter(newPage);
    };


    calculateScore = (guess, name, infoChecked) => {
        const { game, calculatePoints, handleSpecialModal } = this.props;
        let message = '';
        let points = 0;
        const shots = game.shots - 1;
        const shotsMessage = shots > 0 ? `Você tem ${shots} tentativas` : '';
        if (guess.toLowerCase() === name.toLowerCase()) {
            points = infoChecked ? game.point + 5 : game.point + 10;
            message = `Voce Acertou. Sua pontuação é ${points}. ${shotsMessage}`;
            const toaster = this.mountToaster(message, consts.SUCCESS);
            this.setToaster(toaster);
        } else {
            points = game.point;
            message = `Voce ERROU. Sua pontuação é ${points}. ${shotsMessage}`;
            const toaster = this.mountToaster(message, consts.ERROR);
            this.setToaster(toaster);
        }
        calculatePoints(points, shots);
        if (shots === 0) {
            handleSpecialModal(true);
        }
    }

    mountToaster = (message, type) => {
        const { closeModal } = this.props;
        if (type === consts.SUCCESS) {
            return { ...consts.TOASTER_TEMPLATE, description: message, onClick: closeModal, onClose: closeModal };
        } else {
            return { ...consts.TOASTER_TEMPLATE, description: message, icon: 'delete', type: 'error', onClick: closeModal, onClose: closeModal };
        }
    }

    setToaster = (toaster) => {
        setTimeout(() => { toast(toaster); }, 2000);
    }

    render() {
        const { clicked } = this.state;
        return (
            <Container text>
                <Form>
                    <Field width={6}>
                        <Input
                            name='guess'
                            placeholder='qual é o personagem ?'
                            label='personagem'
                            onChange={this.handleInputChange} />
                    </Field>
                    <ActionButton iconType='target'
                        size='big'
                        color= 'green'
                        event={this.handleGuess}
                        disabled={clicked} />
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ character: state.character.openChar,
                                    game: state.game,
                                    page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, calculatePoints,
    disableCharacter, changeIsTakenInfo, handleSpecialModal }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GameForm);