import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import MoviesList from './MoviesList';
import { IMovieResponse } from 'src/types';

const UnstyledMovieListSection: React.FC<{ list: IMovieResponse[]; total: number }> = ({ list, total }) =>
	list.length > 0 ? (
		<Box className="movies-wrapper" role="region" aria-label="Movie list section">
			<span className="total" aria-live="polite">
				{total} movies
			</span>
			<div role="list">
				{list.slice(0, 3).map(movie => (
					<div role="listitem" key={movie.id}>
						<MoviesList movie={movie} />
					</div>
				))}
			</div>
		</Box>
	) : (
		<Flex pt="5rem" justifyContent="center" width={1} role="alert">
			<b>No movies</b>
		</Flex>
	);

const MovieListSection = styled(UnstyledMovieListSection)`
	.movies-wrapper {
		position: relative;
	}
`;

export default MovieListSection;
