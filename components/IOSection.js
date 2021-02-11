import React from 'react'

const outputStyle={
	backgroundColor:'white',
	textAlign: 'center',
	fontSize: '120%',
	width: '63%',
	height: '150px'
}


const buttonBox ={
	display: 'flex',
	justifyContent : 'space-around',
	marginBottom:'1em'
}

const outerBox ={
	display: 'flex',
	alignItems: 'center',
	flexDirection:'column',
	marginBottom: '1em'
}

const textArea={
	fontSize:'120%',
	color:'black',
	display: 'center'
}

const trnsltBtnStyle={
	borderRadius: '12px',
	padding :'1em',
	marginRight: '2em',
	backgroundColor:'black',
	color:'white',
	
}

const rvrBtnStyle={
	borderRadius: '12px',
	padding :'1em',
	marginLeft: '1em',
	backgroundColor:'black',
	color:'white',
}


class IOSection extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var txt = this.props.text;
		return(

				<div style = {outerBox}>

					<select value={this.props.getLanguageI} onChange={event => this.props.onChangeInput(event)} name="lang">
						<option value="it">Italiano</option>
	  					<option value="en">English</option>
	  					<option value="es">Español</option>
	  					<option value="de">Deutsch</option>
					</select>

					<textarea style={textArea} value={this.props.getValue} type="text" cols="70" rows="10" onChange={event => this.props.onChange(event)} /> 
					<div  style={buttonBox}>
						<button style={trnsltBtnStyle} onClick={event => this.props.onClickButton()}>Translate</button>
						<button style={rvrBtnStyle} onClick={event => this.props.onReverseClick()}>Invert</button>
					</div>
				
					
					<select value={this.props.getLanguageO} onChange={event => this.props.onChangeOutput(event)} name="lang">
		  				<option value="en">English</option>
		  				<option value="es">Español</option>
		  				<option value="it">Italiano</option>
		  				<option value="de">Deutsch</option>
					</select>

					<textarea readonly style={outputStyle} value={this.props.getTranslated}/>
				</div>

			);
	}
}

export default IOSection;