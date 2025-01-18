import * as React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import Accordion from './Accordion';
import * as search from '../assets/search-icon-white.png';

export interface ILeftMenuMobProps {
	className?: string;
}

class UnstyledLeftMenuMob extends React.Component<ILeftMenuMobProps> {
	public render() {
		const { className } = this.props;

		return (
			<Flex flexDirection="column" className={className} role="navigation" aria-label="Mobile menu">
				<Accordion initOpen={true} title="Wesley" aria-expanded={true}>
					<Flex p={3} className="discover" alignItems="center" justifyContent="space-between">
						<Box role="heading" aria-level={1}>
							Discover
						</Box>
						<Box>
							<img className="search-img" src={search} alt="search icon" aria-label="Search movies and shows" />
						</Box>
					</Flex>
				</Accordion>
				<Box className="main-titles" p={3} role="heading" aria-level={2}>
					Watched
				</Box>
				<hr aria-hidden="true" />
				<Box p={3} role="menuitem" tabIndex={0}>
					Movies
				</Box>
				<Box p={3} role="menuitem" tabIndex={0}>
					TV Shows
				</Box>
				<Box className="main-titles" p={3} role="heading" aria-level={2}>
					Saved
				</Box>
				<hr aria-hidden="true" />
				<Box p={3} role="menuitem" tabIndex={0}>
					Movies
				</Box>
				<Box p={3} role="menuitem" tabIndex={0}>
					TV Shows
				</Box>
			</Flex>
		);
	}
}

const LeftMenuMob = styled(UnstyledLeftMenuMob)`
	display: flex;
	background-color: ${props => props.theme.bckgColor};
	color: white;
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	min-width: 12rem;
	height: 100%;
	@media (min-width: 768px) {
		display: none;
	}

	.main-titles {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.search-img {
		width: 20px;
		height: 20px;
		transform: rotate(0deg);
	}
	.discover {
		background-color: ${props => props.theme.textHighLightColor};
	}
	hr {
		width: 94%;
		margin-left: 1rem;
		border-style: inset;
		border-width: 0.5px;
	}
`;
export default LeftMenuMob;
