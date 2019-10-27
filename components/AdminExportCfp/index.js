import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles'
const useStyles = makeStyles(styles)

export default ({ onUpdate }) => {
	const css = useStyles();


	return (
		<div className={ css.container }>
			<Typography variant="h4" className={ css.heading }>
            	Export Results
			</Typography>
			<Typography>
            	Download the CFP data with the voting results
			</Typography>

		</div>
	)
}