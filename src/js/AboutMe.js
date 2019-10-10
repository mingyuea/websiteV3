import React from 'react';

import Style from '../scss/AboutMe.scss';
import BodyWrapper from './BodyWrapper.js';

class AboutMe extends React.Component{
	constructor(props){
		super(props);
		this.state ={

		}
	}

	render(){
		return(
			<BodyWrapper 
				title="About Me"
				//text="Hello! My name is Ming Albert Yue. I'm a software engineer who's constantly learning and growing. I'm a native Californian, born and raised in Los Angeles for most of my life. The Bay Area has only been my home for the years, after I moved up for college. Growing up, I never knew what I wanted to be. I was good at math and science, and so I thought, why not an engineer. And so I was, studying civil engineering at Berkeley."
			>

			<div className={Style.skills}>
				<div className={Style.curlSym}>{"{"}</div>
				<div className={Style.objBody}>
					<div className={Style.objRow}>
						<div className={Style.objField}>"Languages":</div>
						<div className={Style.objVal}>["Python", "Java", "JavaScript", "Ruby"],</div>
					</div>
					<div className={Style.objRow}>
						<div className={Style.objField}>"Frameworks":</div>
						<div className={Style.objVal}>["ReactJS", "Node.js", "Flask", "Django", "Spring", "Ruby-on-Rails", "React Native (Andriod)"],</div>
					</div>
					<div className={Style.objRow}>
						<div className={Style.objField}>"Databases":</div>
						<div className={Style.objVal}>["PostgreSQL", "MySQL", "MongoDB"],</div>
					</div>
					<div className={Style.objRow}>
						<div className={Style.objField}>"Misc":</div>
						<div className={Style.objVal}>["Docker", "NGINX", "AWS", "Google Cloud", "Heroku"],</div>
					</div>
				</div>
				<div className={Style.curlSym}>{"}"}</div>
			</div>

			</BodyWrapper>
		);
	}
}

export default AboutMe;