import React from 'react';

import BodyWrapper from './BodyWrapper.js';
import ProjRow from './ProjRow.js';
import ProjCell from './ProjCell.js';

class Projects extends React.PureComponent{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<BodyWrapper 
				title="Projects"
				text="These are a portfolio of projects I completed just for myself"
			>
				<ProjRow animation="fadeCont">
					<ProjCell>
						Chat Application
					</ProjCell>

					<ProjCell>
						Stock Application
					</ProjCell>

					<ProjCell>
						ECommerce Application
					</ProjCell>
				</ProjRow>

				<ProjRow animation="fadeCont5">
					<ProjCell>
						Chat Application
					</ProjCell>

					<ProjCell>
						Stock Application
					</ProjCell>

					<ProjCell>
						ECommerce Application
					</ProjCell>
				</ProjRow>

				<ProjRow animation="fadeCont8">
					<ProjCell>
						Chat Application
					</ProjCell>

					<ProjCell>
						Stock Application
					</ProjCell>

					<ProjCell>
						ECommerce Application
					</ProjCell>
				</ProjRow>
			</BodyWrapper>
		);
	}
}

export default Projects;