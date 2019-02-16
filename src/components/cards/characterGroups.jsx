import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Grid, Icon } from 'semantic-ui-react';
import Paginator from '../pagination/paginator';
import CharacterCard from './characterCard';
import '../../template/style.css';

const { Group, Content } = Card;
const { Row } = Grid;

class CharactereGroups extends Component {

    static propTypes = {
        charList: PropTypes.arrayOf(PropTypes.any),
        itemsRow: PropTypes.number
    };

    static defaultProps = {
        charList: [],
        itemsRow: 1
    };

    renderCards = () => {
        const { charList } = this.props;
        return charList.map((char) => (
            <CharacterCard key={char.name} character={char} />
        ));
    };

    render() {
        const { itemsRow } = this.props;
        return (
            <div>
                <Grid container className='gridSpace'>
                    <Group itemsPerRow={itemsRow}>
                            {this.renderCards()}
                    </Group>
                    <Row centered>
                      <Paginator />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default CharactereGroups;