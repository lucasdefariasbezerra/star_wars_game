import React, { Component } from 'react';
import '../../template/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCharacters } from './charactersAction';
import PropTypes from 'prop-types';
import { SemanticToastContainer } from 'react-semantic-toasts';
import CharacterGroups from '../cards/characterGroups';
import CharModal from '../modal/charModal';
import SpecialModal from '../modal/specialModal';
import consts from '../../utils/consts';

class CharacteresFeed extends Component {
    static propTypes = {
        fetchCharacters: PropTypes.func,
        page: PropTypes.objectOf(PropTypes.any)
    };

    static defaultProps = {
        fetchCharacters: () => {},
        page: {}
    };

    componentDidMount() {
        const { fetchCharacters } = this.props;
        fetchCharacters(consts.DEFAULT_URL);
    }

    render() {
        const { page } = this.props;
        return (
            <div>
                <SemanticToastContainer />
                <CharModal />
                <SpecialModal />
                <CharacterGroups charList={page.results} itemsRow={5} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ page: state.character.page });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCharacters }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharacteresFeed);