import React from 'react';
import PieChart, { action } from 'react-minimal-pie-chart';

import Style from '../scss/AboutMe.scss';
import BodyWrapper from './BodyWrapper.js';
import RowDivider from './RowDivider.js';

const pieColor = {
	0: {
		0: "#999999",//"rgba(111, 115, 117, 0.8)",
		1: "#6f7375"
	},
	1: {
		0: "#dbdbdb",
		1: "#c2c2c2"
	}
}

class AboutMe extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			chartData0: {title: "Back-end", value: 60, color: pieColor[0][0], style: {cursor: 'pointer'}},
			chartData1: {title: "Front-end", value: 40, color: pieColor[1][0], style: {cursor: 'pointer'}},
			chartText0: "hiddenDiv",
			chartText1: "hiddenDiv",
			chartTextGen: "fadeInDiv",
			chartCurrSel: null,

		}

		this.handleChartMouseOver = this.handleChartMouseOver.bind(this);
		this.handleChartMouseOut = this.handleChartMouseOut.bind(this);
		this.handleChartClick = this.handleChartClick.bind(this);
		this.handleChartBlur = this.handleChartBlur.bind(this);
		//this.handleChartLabel = this.handleChartLabel.bind(this);
	}

	
	handleChartMouseOver(event, data, index){
		let newState = {};
		let copyObj = JSON.parse(JSON.stringify(this.state["chartData"+index]));

		copyObj.color = pieColor[index][1];
		newState["chartData" + index] = copyObj;
		//console.log(chartData)
		this.setState(newState);
	}

	handleChartMouseOut(event, data, index){
		let newState = {};
		let copyObj = JSON.parse(JSON.stringify(this.state["chartData"+index]));

		copyObj.color = pieColor[index][0];
		newState["chartData" + index] = copyObj;
		//console.log(chartData)
		this.setState(newState);
	}

	handleChartClick(event, data, ind){
		if(ind == this.state.chartCurrSel){
			let copyObjTarg = JSON.parse(JSON.stringify(this.state["chartData" + ind]));
			let newState ={};

			delete copyObjTarg.style.strokeWidth;
			newState["chartData"+ind] = copyObjTarg;
			newState["chartText"+ind] = "hiddenDiv";
			newState.chartTextGen = "fadeInDiv";
			newState.chartCurrSel = null;

			this.setState(newState);
		}
		else{
			console.log(event.target.attributes["stroke-width"].value);

			let partnerInd = Math.abs(ind - 1);
			let currSW = event.target.attributes["stroke-width"].value;
			let copyObjTarg = JSON.parse(JSON.stringify(this.state["chartData" + ind]));
			let copyObjPartner = JSON.parse(JSON.stringify(this.state["chartData" + partnerInd]));
			let newState = {};

			copyObjTarg.style.strokeWidth = Number(currSW) + 3;
			delete copyObjPartner.style.strokeWidth;

			newState["chartData" + ind] = copyObjTarg;
			newState["chartData" + partnerInd] = copyObjPartner;
			newState["chartText" + ind] = "fadeInDiv";
			newState["chartText" + partnerInd] = "hiddenDiv";
			newState.chartTextGen = "hiddenDiv";
			newState.chartCurrSel = ind;

			this.setState(newState);
		}
	}
	
	handleChartBlur(e){
		console.log("Blur")
	}

	render(){
		return(
			<BodyWrapper 
				title="About Me"
				//text="Hello! My name is Ming Albert Yue. I'm a software engineer who's constantly learning and growing. I'm a native Californian, born and raised in Los Angeles for most of my life. The Bay Area has only been my home for the years, after I moved up for college. Growing up, I never knew what I wanted to be. I was good at math and science, and so I thought, why not an engineer. And so I was, studying civil engineering at Berkeley."
			>
			<RowDivider leftTheme="dark" rightTheme="light" leftSize="bigger1" rightSize="smaller1" leftSlide="slideLeft">
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
				<div className={Style.textBlob1}>
					<div className={Style.subtitle}>INTRO</div>
					Hello! My name is Ming Albert Yue. I'm a (fullstack) software engineer. I was born and raised in Los Angeles, but moved up to the Bay Area after starting college at Cal, where my major was <i>civil</i> engineering. I'm currently working at a small fin-tech startup called Affine Finance.
				</div>
			</RowDivider>

			<RowDivider leftTheme="light" rightTheme="dark" leftSize="smaller1" rightSize="bigger1" rightSlide="slideRight">
				<div style={{paddingTop: "50px"}} onBlur={this.handleChartBlur}>
					<PieChart
						data={[this.state.chartData0, this.state.chartData1]}
						radius={45}
						lineWidth={70}
						label={({data, dataIndex}) => {
							return (data[dataIndex].value + "% " + data[dataIndex].title);
						}}
						labelStyle={{
							fill: '#121212',
							fontFamily: 'sans-serif',
							fontSize: '4px'
						}}
						labelPosition={107}
						onMouseOver={this.handleChartMouseOver}
						onMouseOut={this.handleChartMouseOut}
						onClick={this.handleChartClick}
					/>
				</div>
				<div className={Style.textBlob1}>
					<div id="about2Gen" className={Style[this.state.chartTextGen]}>
						<div className={Style.subtitle}>ENGINEERING</div> 
						<div className={Style.chartText}>
							I started at Affine as a software engineering intern. My first tasks were pretty simple, just getting familiar with the codebase. I refactored some old code, built an internal tool to access our database for the business team (increasing productivity by about 40%), simple things. I later became a full-fledged engineer, and proceeded to lay the groundwork for one of our current products. Here I got my hands dirty in both front-end, back-end, and database.
						</div>
					</div>
					<div id="about2:0" className={Style[this.state.chartText0]}>
						<div className={Style.subtitle}>BACK-END</div>
						<div className={Style.chartText}>
							The product I worked on was composed of several microservices that we built from the ground up. These included a business-facing API, a candidate API, a chat and messaging service, a realtime coding & whiteboarding service, etc. We used different frameworks, depending on our needs. It might be a personal preference for writing server side applications(they're just more fun as a mental exercise), but I felt like I spent more time writing server applications
						</div>
					</div>
					<div id="about2:1" className={Style[this.state.chartText1]}>
						<div className={Style.subtitle}>FRONT-END</div>
						<div className={Style.chartText}>
							We built our UI with ReactJS/Redux. The team had been using a templating engine for server-side rendering of the UI prior to me starting, but a decision was made to switch to something more powerful. As an engineer, sticking to one technology is a surefire way of becoming irrelevant. Inevitably, something new will come along to replace the thing you specialized in. But until then, writing in React just makes me happy (this site was written in React. Overkill? Maybe).
						</div>
					</div>
				</div>
			</RowDivider>

			</BodyWrapper>
		);
	}
}

export default AboutMe;