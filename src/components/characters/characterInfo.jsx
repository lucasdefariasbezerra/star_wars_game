import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacterDetails } from '../characters/charactersAction';
import PropTypes from 'prop-types';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
const { Row, Column } = Grid;

class CharacterInfo extends Component {

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any),
        fetchCharacterDetails: PropTypes.func
    };

    static defaultProps = {
        character: {},
        fetchCharacterDetails: () => {}
    };

    componentDidMount() {
        const { fetchCharacterDetails, character } = this.props;
        const clone = { ...character };
        fetchCharacterDetails(clone);
    }

    render() {
        const { character } = this.props;
        return (
            <Container text>
                <Grid>
                    <Row columns={2}>
                        <Column width={5}>
                            <Image src={character.image} />
                        </Column>
                        <Column width={6}>
                            <Header>Details</Header>
                            <p>Specie: TODO</p>
                            <p>Height: {character.height} </p>
                            <p>Hair: {character.hair_color} </p>
                            <p>Planet:TODO </p>
                        </Column>
                    </Row>

                    <Row columns={1}>
                        <Column>
                            <p>Wve found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Column>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ character: state.character.openChar });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacterDetails }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfo);