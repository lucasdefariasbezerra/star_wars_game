import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal, disableCharacter } from '../characters/charactersAction';
import { calculatePoints } from './gameActions';
import PropTypes from 'prop-types';
import { Container, Form } from 'semantic-ui-react';
const { Field, Input } = Form;
import ActionButton from '../shared/actionButton';
import { toast } from 'react-semantic-toasts';
import consts from '../../utils/consts';

class GameForm extends Component {
    state = {
        guess: ''
    }

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any),
        game: PropTypes.objectOf(PropTypes.any),
        page: PropTypes.objectOf(PropTypes.any),
        closeModal: PropTypes.func,
        calculatePoints: PropTypes.func,
        disableCharacter: PropTypes.func
    };

    static defaultProps = {
        character: {},
        game: {},
        page: {},
        closeModal: () => {},
        calculatePoints: () => {},
        disableCharacter: () => {}
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGuess = () => {
        const { character } = this.props;
        const { guess } = this.state;
        const { name } = character;
        this.calculateScore(guess, character.name);
        this.handleDisableCharacter(name);
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
        console.log('newPage ', newPage);
        disableCharacter(newPage);
    };

    calculateScore = (guess, name) => {
        console.log('guess ', guess, ' name ', name);
        const { game, calculatePoints } = this.props;
        let message = '';
        let points = 0;
        const shots = game.shots - 1;
        if (guess.toLowerCase() === name.toLowerCase()) {
            points = game.point + 10;
            message = `Voce Acertou. Sua pontuação é ${points}. Você tem ${shots} tentativas`;
            const toaster = this.mountToaster(message, consts.SUCCESS);
            this.setToaster(toaster);
        } else {
            points = game.point;
            message = `Voce ERROU. Sua pontuação é ${points}. Você tem ${shots} tentativas`;
            const toaster = this.mountToaster(message, consts.ERROR);
            this.setToaster(toaster);
        }
        calculatePoints(points, shots);
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
                    <ActionButton iconType='target' size='big' color= 'green' event={this.handleGuess} />
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ character: state.character.openChar,
                                    game: state.game,
                                    page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ closeModal, calculatePoints, disableCharacter }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GameForm);