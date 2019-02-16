import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Grid, Icon } from 'semantic-ui-react';
import '../../template/style.css';

const { Group, Content } = Card;
const { Row, Column } = Grid;

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
        console.log('charList zxzx ', charList);
        return charList.map((char) => (
            <Card key={char.name}>
              <Image src='data:image/jpeg;base64,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' />
                <Content extra>
                     <Button icon color='green' floated='right'>
                        <Icon name='currency' />
                     </Button>
                    <Button icon color='blue' floated='right'>
                        <Icon name='currency' />
                    </Button>
                </Content>
            </Card>
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
                </Grid>
            </div>
        );
    }
}

export default CharactereGroups;