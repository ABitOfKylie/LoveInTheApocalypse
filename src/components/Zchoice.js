import React, {PropTypes} from 'react';
import {Card, CardTitle, CardText } from 'material-ui/Card';

const Zchoice = ({secretData}) => (
	<Card className = "container">
		<CardTitle
			title = "Chosen Zombie"
			subtitle = "You have now chosen Zombie + Zombie name."
		/>

		{secretData} && <CardText style = {{ fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
	</Card>
);

Zchoice.propTypes ={
	secretData: PropTypes.string.isRequired
};

export default Zchoice;