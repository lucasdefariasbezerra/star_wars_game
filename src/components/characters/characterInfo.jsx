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
        films: PropTypes.arrayOf(PropTypes.any),
        vehicles: PropTypes.arrayOf(PropTypes.any),
        species: PropTypes.arrayOf(PropTypes.any),
        planet: PropTypes.string,
        fetchCharacterDetails: PropTypes.func
    };

    static defaultProps = {
        character: {},
        films: [],
        vehicles: [],
        species: [],
        planet: '',
        fetchCharacterDetails: () => {}
    };

    componentDidMount() {
        const { fetchCharacterDetails, character } = this.props;
        const clone = { ...character };
        fetchCharacterDetails(clone);
    }

    renderText = (list) => {
        if (list.lenght === 1) {
            return list[0];
        } else {
            return list.join(', ');
        }
    }

    render() {
        const { character, films, vehicles, planet, species } = this.props;
        return (
            <Container text>
                <Grid>
                    <Row columns={2}>
                        <Column width={5}>
                            <Image src={character.image} />
                        </Column>
                        <Column width={6}>
                            <Header>Details</Header>
                            <p>Specie: {this.renderText(species)}</p>
                            <p>Height: {character.height} </p>
                            <p>Hair: {character.hair_color} </p>
                            <p>Planet: {this.renderText([planet])} </p>
                        </Column>
                    </Row>

                    <Row columns={1}>
                        <Column>
                            <p>Films : {this.renderText(films)}</p>
                            <p>Vehicles : {this.renderText(vehicles) === '' ? 'n/a' : this.renderText(vehicles) }</p>
                        </Column>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ character: state.character.openChar,
    species: state.character.species,
    films: state.character.films,
    vehicles: state.character.vehicles,
    planet: state.character.planet });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacterDetails }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfo);