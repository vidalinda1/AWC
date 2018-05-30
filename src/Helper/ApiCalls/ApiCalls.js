import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super();
  }

  fetchEvents = async () => {
    const url = `https://api.awc.dance/events?city=denver`;
    const response = await fetch(url);
    const data= await response.json();
    return data;
  } 

  fetchStudios = () => {
    const url = `https://api.awc.dance/?city=80202`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then( response => response.json() )
      .then( data => data );   
  }

  fetchVideos= async () => {
    var url = 'https://api.awc.dance/youtubevideos';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.items)
    return data.items;
  }

  fetchGoogle = async (userInput) => {
    const url = `https://api.awc.dance/autocomplete?input=${userInput}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export default ApiCalls;