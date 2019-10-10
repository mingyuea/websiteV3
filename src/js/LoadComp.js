import React from 'react';
import { Spinner } from 'reactstrap';

function LoadComp(props){
		return(
			<div className="container d-flex justify-content-center align-items-center">
				<Spinner style={{ width: '3rem', height: '3rem' }} color="dark" />
			</div>
		);
}

export default LoadComp;