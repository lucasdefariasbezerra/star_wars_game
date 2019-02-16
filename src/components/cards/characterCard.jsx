import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Grid, Icon } from 'semantic-ui-react';
import '../../template/style.css';

const { Content } = Card;

class CharacterCard extends Component {

    static propTypes = {
        character: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        character: {}
    };

    render() {
        const { character } = this.props;
        return (
        <Card>
            <Image src={character.image} className='fixedHeight'/>
            <Content extra>
                <Button icon color='green' floated='right'>
                    <Icon name='currency' />
                </Button>
                <Button icon color='blue' floated='right'>
                    <Icon name='currency' />
                </Button>
            </Content>
        </Card> );
    }
}

export default CharacterCard;