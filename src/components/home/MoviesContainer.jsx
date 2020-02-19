import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        let content = '';

        if(!movies) {
            return (
                <div>
                    <h4>Nothing was found with the name "{this.props.searchText}".</h4>
                </div>
            );
        }

        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) : null;
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    searchText: state.movies.text
});

export default connect(mapStateToProps)(MoviesContainer);
