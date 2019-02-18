import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetGameDefaultConfig, handleSpecialModal } from '../game/gameActions';
import { fetchCharacters } from '../characters/charactersAction';
import PropTypes from 'prop-types';
import { Container, Form } from 'semantic-ui-react';
import ActionButton from '../shared/actionButton';
import consts from '../../utils/consts';
import '../../template/style.css';
import Linker from '../shared/linker';

const { Field, Input } = Form;

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        registerDone: false
    }

    static propTypes = {
        game: PropTypes.objectOf(PropTypes.any),
        resetGameDefaultConfig: PropTypes.func,
        handleSpecialModal: PropTypes.func,
        fetchCharacters: PropTypes.func
    };

    static defaultProps = {
        game: {},
        resetGameDefaultConfig: () => {},
        handleSpecialModal: () => {},
        fetchCharacters: () => {}
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSave = () => {
        const { name, email } = this.state;
        const { resetGameDefaultConfig, fetchCharacters } = this.props;
        if (name !== '' && email !== '') {
            this.setState({
                registerDone: true
            });
            resetGameDefaultConfig();
            fetchCharacters(consts.DEFAULT_URL);
        }
    }

    handleModalClose = () => {
        const { handleSpecialModal } = this.props;
        handleSpecialModal(false);
    };

    render() {
        const { registerDone } = this.state;
        return (
            <Container text>
                <Form>
                    <Field width={6}>
                        <Input
                            name='name'
                            placeholder='nome'
                            label='nome'
                            onChange={this.handleInputChange} />
                    </Field>

                    <Field width={6} className='link'>
                        <Input
                            name='email'
                            placeholder='email'
                            label='email'
                            onChange={this.handleInputChange} />
                    </Field>

                    <ActionButton iconType='save'
                        size='big'
                        color= 'green'
                        text='Salvar'
                        disabled={registerDone}
                        event={this.handleSave} />
                    {
                        registerDone && (<Linker componentType={consts.BUTTON}
                                                text='New'
                                                url='/'
                                                event={this.handleModalClose} />)
                    }
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ game: state.game,
                                    page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ resetGameDefaultConfig,
    handleSpecialModal,
    fetchCharacters }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);