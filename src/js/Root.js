import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

//my custom imports
//import Style from '../scss/Root.scss';
import RouterWrapper from "./RouterWrapper.js";
import LoadComp from './LoadComp.js';
import HomePage from './HomePage.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';

class Root extends React.Component{
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return(
			<BrowserRouter basename="/">
				<Switch>
					<RouterWrapper
						exact path="/"
						render={props => (
							<Suspense fallback={<LoadComp />}>
								<HomePage {...props} />
							</Suspense>
						)}
					/>

					<RouterWrapper
						exact path="/aboutme"
						render={props => (
							<Suspense fallback={<LoadComp />}>
								<AboutMe {...props} />
							</Suspense>
						)}
					/>

					<RouterWrapper
						exact path="/projects"
						render={props => (
							<Suspense fallback={<LoadComp />}>
								<Projects {...props} />
							</Suspense>
						)}
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Root;