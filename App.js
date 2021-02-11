import React from 'react';
import IOSection from './components/IOSection'
import AppHeader from './components/AppHeader'


class App extends React.Component {
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this);
    this.state={
      translated: "Your translation will be here!",
      languageI:"it",
      languageO:"en",
      text:"Insert here the text to translate..."
    }
  }


  render(){

        console.log("Input Language: "+this.state.languageI)
        console.log("Output Language: "+this.state.languageO)
        console.log("text: "+this.state.text)
        console.log("translated: "+this.state.translated)
      return (
        <div>

          <AppHeader/>

          <IOSection  getTranslated={this.state.translated}
                  getValue={this.state.text}
                  getLanguageO={this.state.languageO}
                  getLanguageI={this.state.languageI}
                  onChangeInput={event => this.handleInputChange(event)}
                  onChange={event =>this.handleChange(event)} 
                  onChangeOutput={event => this.handleOutputChange(event)}
                  onClickButton={event=>this.handleClickButton()}
                  onReverseClick={event=>this.handleReverseClick()}

                  />
          
            
          
        </div>
      );
  }

  handleChange(e){

    this.setState({text:e.target.value})  
  }

  handleInputChange(e){

    this.setState({languageI:e.target.value})
  }
  handleOutputChange(e){
  
    this.setState({languageO:e.target.value})
  }

  handleReverseClick(){
    var x=this.state.text;
    var y=this.state.languageI;
    this.setState({languageI:this.state.languageO,languageO:y,text:this.state.translated,translated:x})

  }

  handleClickButton(){
    fetch(`https://api.mymemory.translated.net/get?q=${this.state.text}&langpair=${this.state.languageI}|${this.state.languageO}`)
    .then(response => {
      console.log(response.status)
      this.setState({response:response},()=>console.log(this.state));
      return response.json();
    })
    .then(data=>{
      this.setState({
        data:JSON.stringify(data),
        translated:data.responseData.translatedText
      })
    
    })

  }
  


}

export default App;
