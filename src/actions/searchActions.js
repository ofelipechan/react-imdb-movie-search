import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
} from './types';
import axios from 'axios';
import {
    APIKey
} from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => async dispatch => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`);
        if (response.Error) {
            throw response.Error;
        }
        dispatch({
            type: FETCH_MOVIES,
            payload: response.data.Search
        });
    } catch (error) {
        console.error('falha ao carregar filmes', error);
    }
};

export const fetchMovie = id => async dispatch => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`);
        if (response.Error) {
            throw response.Error;
        }
        dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        });
    } catch (error) {

    }
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}