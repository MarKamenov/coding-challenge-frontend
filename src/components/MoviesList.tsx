import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import { IMovieResponse } from '../types';
import styled from 'src/theme';

interface IMoviesItems {
	className?: string;
	movie: IMovieResponse;
}
const imgUrl = 'https://image.tmdb.org/t/p/w500';

const UnstyledMoviesList = (props: IMoviesItems) => {
	const { movie, className } = props;

	return (
		<Flex p="1rem" mb={3} className={className} role="article" aria-label={`Movie: ${movie.title}`}>
			<Box mr={3}>
				<img src={`${imgUrl}${movie.poster_path}`} alt={`Movie poster for ${movie.title}`} />
			</Box>
			<Flex width={1} flexDirection="column" justifyContent="space-between">
				<Flex width={1} justifyContent="space-between">
					<Box className="card-title" role="heading" aria-level={2}>
						{movie.title}
					</Box>
					<Flex
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						className="vote"
						aria-label={`Rating: ${movie.vote_average} out of 10`}
					>
						{movie.vote_average}
					</Flex>
				</Flex>
				<Box className="overview" aria-label="Movie overview">
					{movie.overview}
				</Box>
				<Box className="release" aria-label="Release date">
					{movie.release_date}
				</Box>
			</Flex>
		</Flex>
	);
};

const MoviesList = styled(UnstyledMoviesList)`
	color: black;
	background-color: white;
	min-height: 185px;
	.card-title {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.overview {
		max-height: 200px;
		overflow: hidden;
	}

	img {
		height: 100%;
		width: 100px;
	}
	.release {
		color: ${props => props.theme.textHighLightColor};
	}
	.vote {
		color: white;
		background-color: ${props => props.theme.textHighLightColor};
		border-radius: ${props => props.theme.radius};
		padding: 2px;
	}
`;
export default MoviesList;
