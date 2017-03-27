import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCVw6GOerZbEawmJZLkgEWT6j-rL2m3hdI'


//Create a new component.This component should produce some html
class App extends Component{
	constructor(props){
		super(props);
		this.state = {videos : []};
		YTSearch({key : API_KEY,term : 'smushball'},(videos)=>{
			this.setState({videos});
			//this.setState({videos:videos})
		});
	}
	render(){
		return(
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

//Take this components generated html and 
//put it on the page(in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));