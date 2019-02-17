import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacterDetails } from '../characters/charactersAction';
import PropTypes from 'prop-types';
import { Container, Form } from 'semantic-ui-react';
const { Field, Input } = Form;
import ActionButton from '../shared/actionButton';

class GameForm extends Component {

    state = {
        guess: ''
    }

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        character: {}
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGuess = () => {
        const { character } = this.props;
        console.log('char zxzx ', character);
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

const mapStateToProps = state => ({ character: state.character.openChar });
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GameForm);