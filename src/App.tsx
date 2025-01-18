import * as React from 'react';
import styled from './theme';
import { observer, inject } from 'mobx-react';
import { Flex, Box } from 'grid-styled';
import Movies from './store/Movies';
import UI from './store/Ui';
import LeftMenu from './components/LeftMenu';
import LeftMenuMob from './components/LeftMenuMob';
import RightMenu from './components/RightMenu';
import StyledCheckbox from './components/CheckBoxFields';
import FormExpander from './components/FormExpander';
import HamburgerButton from './components/ButtonHamburger';
import MovieListSection from './components/MovieListSection';
import { MOVIE_GENRES } from 'src/constants';

interface IAppProps {
	className?: string;
	movies?: Movies; // Add injected props to the interface
	ui?: UI;
}

@inject('movies', 'ui')
@observer
class UnstyledApp extends React.Component<IAppProps> {
	constructor(props: IAppProps) {
		super(props);
	}

	public render() {
		const { movies, ui, className } = this.props;
		const { list, total } = movies as Movies;
		const { toggle, toggleMenu } = ui as UI;
		const show = toggleMenu && window.innerWidth < 768;
		return (
			<Flex width={1} flexDirection="column" className={className} role="main">
				<Flex flex={1} className="content-wrapper">
					<Box className="menu-items" role="navigation" aria-label="Main menu">
						<Flex className="menu-wrapper" mb={2} pt="3rem" pl="55px">
							<HamburgerButton
								onClick={() => toggle()}
								aria-expanded={toggleMenu}
								aria-controls="mobile-menu"
								aria-label="Toggle mobile menu"
							/>
							<h1>Discover</h1>
						</Flex>
						<LeftMenu />
						{show && (
							<Flex p={5} pb={0} id="mobile-menu">
								<LeftMenuMob />
							</Flex>
						)}
					</Box>
					<Box className="app-content" role="main" aria-label="Movie content">
						<Flex className="main-wrapper" p={5}>
							<Box mr="1rem" className="middle">
								<MovieListSection list={list} total={total} />
							</Box>
							<Box className="right" role="complementary" aria-label="Movie filters">
								<RightMenu />
								<Box p={2} className="expander-box">
									<FormExpander initOpen={true} title="Select genre(s)">
										{MOVIE_GENRES.map((g, i) => (
											<StyledCheckbox key={`${g}${i}`} label={g} aria-label={`Filter by ${g} genre`} />
										))}
									</FormExpander>
									<FormExpander title="Select min. vote" aria-label="Filter by minimum vote rating" />
									<FormExpander title="Select language" aria-label="Filter by movie language" />
								</Box>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		);
	}
}

const App = styled(UnstyledApp)`
	.app-content {
		width: 100%;
		height: 100%;
		background-color: ${props => props.theme.bckgGreyColor};
		overflow-y: auto;
		overflow-x: hidden;
		flex-grow: 1;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		@media (min-width: ${props => props.theme.breakpoints.tablet}) {
			flex-direction: row;
		}
	}
	.main-wrapper {
		flex-grow: 2;
		min-height: 97vh;
		justify-content: flex-end;
		flex-direction: column-reverse;
		@media (min-width: ${props => props.theme.breakpoints.tablet}) {
			flex-direction: row;
		}
	}

	.menu-wrapper {
		svg {
			width: 35px;
			height: 25px;
		}
		@media (min-width: ${props => props.theme.breakpoints.tablet}) {
			display: none;
		}
	}

	.middle {
		margin-right: 0;
		margin-top: 3rem;
		@media (min-width: ${props => props.theme.breakpoints.tablet}) {
			margin-right: 1rem;
			margin-top: 0;
			flex-grow: 1;
		}
	}

	h1 {
		margin: 0 0 0 1rem;
	}

	.menu-items {
		background-color: ${props => props.theme.bckgGreyColor};
	}

	.expander-box {
		display: none;
		@media (min-width: ${props => props.theme.breakpoints.tablet}) {
			background-color: white;
			display: block;
		}
	}

	.total {
		position: absolute;
		top: -1.2rem;
		color: black;
		font-size: 0.8rem;
	}
`;

export default App;
