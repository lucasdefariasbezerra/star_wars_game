import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Grid, Icon } from 'semantic-ui-react';
import Paginator from '../pagination/paginator';
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
            <Card key={char.name} >
              <Image src={char.image} className='fixedHeight'/>
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
                    <Row centered>
                      <Paginator />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default CharactereGroups;