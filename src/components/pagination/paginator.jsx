import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacters } from '../characters/charactersAction';
import { Button, Icon } from 'semantic-ui-react';

class Paginator extends Component {
    render() {
        return (
            <div>
                <Button icon size='big' color='black'>
                    <Icon name='left arrow'/>
                </Button>

                <Button icon size='big' color='black'>
                    <Icon name='right arrow' />
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacters }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Paginator);