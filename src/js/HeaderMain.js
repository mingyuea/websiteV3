import React from 'react';

import HeaderCont from "./HeaderCont.js";
import HeaderItem from "./HeaderItem.js";

function HeaderMain(props){
	return(
		<HeaderCont>
			<HeaderItem title="About Me" path="/aboutme" />
			<HeaderItem title="Projects" path="/projects" />
			<HeaderItem title="Contact" path="/contact" />
			<HeaderItem title="Blog" path="/blog" />
		</HeaderCont>
	)
}

export default HeaderMain;