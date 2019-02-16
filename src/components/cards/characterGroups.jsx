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
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-r2ATGl2Tg7atWK23PRPo1WEPH3mhMmSFvLLlN2JhCFFbKpqew' />
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