import React from 'react'

const titolo={
	color:"black",
	textAlign: "center",
	fontFamily: "Times New Roman",
	fontSize: '250%'
}

const titleBox={
	backgroundColor: 'white',
	marginBottom:'none'
}

class AppHeader extends React.Component{
	

	render(){
		return(
		<div style={titleBox}>
			<h1 style={titolo}>Quick Translator</h1>
		</div>
			);
	}
}

export default AppHeader;