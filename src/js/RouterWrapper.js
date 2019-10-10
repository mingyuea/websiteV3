import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import PageWrapper from './PageWrapper.js';

const RouterWrapper = ({ render, ...rest }) => {
	return(
	<Route
		{...rest}
		render={ props => (
					<PageWrapper>
						{render(props)}
					</PageWrapper>
		)}
	/>
	);
};

export default RouterWrapper;