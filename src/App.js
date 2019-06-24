import React, { Component } from 'react';

import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import MovieDetails from './components/movie-details/MovieDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [
				{
					title: 'the godfather',
					img: 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg',
					details: 'R|175min|crime,Drama',
					description:
						'Le Parrain (titre original : The Godfather) est un film américain réalisé par Francis Ford Coppola et produit par les studios Paramount, sorti le 15 mars 1972.'
				},
				{
					title: 'Les visiteurs',
					img:
						'https://upload.wikimedia.org/wikipedia/commons/4/4f/Renault_4F4_1993_-_Mondial_de_l%27Automobile_de_Paris_2016_-_002.jpg',
					details: 'Genre	Comédie|107 minutes Sortie 1993',
					description: `Le film raconte l'histoire de deux hommes, le comte Godefroy de Montmirail et son serviteur Jacquouille, transportés par magie dans le temps afin déviter la mort accidentelle du beau-père de Godefroy. Mais, à la suite d'une erreur, au lieu de remonter le temps de quelques jours, ils sont transportés du xiie siècle à la fin du xxe siècle.`
				},
				{
					title: 'Léon',
					img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Leon_the_Professional.png',
					details: '	Drame Durée	110 minutes Sortie	1994',
					description: `Sixième long métrage réalisé par Besson, Léon retrace la vie d'un tueur à gages du même nom vivant en solitaire à New York et qui héberge, après un concours de circonstances, une voisine de palier, Mathilda, fillette de douze ans dont la famille a été assassinée car le père avait volé de la cocaïne. Pour venger son petit frère, le seul membre de sa famille pour lequel elle avait de la tendresse, Mathilda demande à Léon de lui apprendre son « métier ».`
				}
			],

			selectedMovie: 0
		};
	}
	updateSelectedMovie = title => {
		const index = this.state.movies.findIndex(m => {
			return title === m.title;
		});
		this.setState({
			selectedMovie: index
		});
	};
	render() {
		return (
			<div className='App d-flex flex-column'>
				<Header />
				<div className='d-flex flex-row flex-fill pt-4 p-2'>
					<MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
					<MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
				</div>
			</div>
		);
	}
}

export default App;
