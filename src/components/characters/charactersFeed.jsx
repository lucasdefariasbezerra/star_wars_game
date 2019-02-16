import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacters } from './charactersAction';
import PropTypes from 'prop-types';
import CharacterGroups from '../cards/characterGroups';

class CharacteresFeed extends Component {

    state = {
        points: 0,
        pageUrl: 'https://swapi.co/api/people/?page=1'
    }

    static propTypes = {
        fetchCharacters: PropTypes.func,
        page: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        fetchCharacters: () => {},
        page: {}
    };

    componentDidMount() {
        const { pageUrl } = this.state;
        const { fetchCharacters } = this.props;
        fetchCharacters(pageUrl);
    }

    render() {
        const { page } = this.props;
        console.log('page zxzxzx ', page);
        return (
            <div>
                <CharacterGroups charList={page.results} itemsRow={5} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacters }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacteresFeed);