import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacters } from '../characters/charactersAction';
import { Button, Icon } from 'semantic-ui-react';
import ActionButton from '../shared/actionButton';
import PropTypes from 'prop-types';
import consts from '../../utils/consts';

class Paginator extends Component {

    static propTypes = {
        fetchCharacters: PropTypes.func,
        page: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        fetchCharacters: () => {},
        page: {}
    };

    handlePageChange = (direction) => {
        const { page, fetchCharacters } = this.props;
        console.log('page next ', page.next);
        console.log('page previous ', page.previous);
        if (direction === consts.NEXT && page.next) {
            fetchCharacters(page.next);
        } else if (direction === consts.PREVIOUS && page.previous) {
            fetchCharacters(page.previous);
        }
    };

    render() {
        return (
            <div>
                <ActionButton size='big'
                    color='black'
                    iconType='left arrow'
                    parameters={consts.PREVIOUS}
                    event={this.handlePageChange} />

                <ActionButton size='big'
                    color='black'
                    iconType='right arrow'
                    parameters={consts.NEXT}
                    event={this.handlePageChange} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacters }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Paginator);