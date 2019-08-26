import axios from 'axios';
import queryString from 'query-string';

export const createArtist = ({name, like}) => axios.post('/api/artists', {name, like});
export const getArtist = (id) => axios.get(`/api/artists/${id}`);
export const getArtistList = ({name, like}) => axios.get(`/api/artists/?${queryString.stringify({name, like})}`);

export const login = (password) => axios.post('/api/auth/login', { password });
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
