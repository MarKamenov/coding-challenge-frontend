import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import MoviesList from './MoviesList';
import { IMovieResponse } from 'src/types';

const UnstyledMovieListSection: React.FC<{ list: IMovieResponse[]; total: number }> = ({ list, total }) =>
	list.length > 0 ? (
		<Box className="movies-wrapper">
			<span className="total">{total} movies</span>
			{list.slice(0, 3).map(movie => <MoviesList key={movie.id} movie={movie} />)}
		</Box>
	) : (
		<Flex pt="5rem" justifyContent="center" width={1}>
			<b>No movies</b>
		</Flex>
	);

const MovieListSection = styled(UnstyledMovieListSection)`
	.movies-wrapper {
		position: relative;
	}
`;

export default MovieListSection;
