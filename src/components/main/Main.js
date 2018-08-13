import React, { Component } from 'react';
const DATA_URL = 'http://ip-api.com/json';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocationData: {
                city: 'Lagos',
                country: 'Nigeria',
                region: 'Unknown Region',
                zip: '23401'
            }
        }
    }
    componentDidMount(){
        fetch(DATA_URL)
            .then(response => response.json())
            .then((responseJSON) => {
                this.setState({
                    userLocationData: responseJSON
                })
            })
            // .then(userLocationData => this.setState({ userLocationData }))
    }
    render() {
        return (
            <div>
                <p> <strong> City: </strong> { this.state.userLocationData.city }  </p>
                <p> <strong> Country: </strong> { this.state.userLocationData.country } </p>
                <p> <strong> Region: </strong> { this.state.userLocationData.region } </p>
                <p> <strong> Zip: </strong> { this.state.userLocationData.zip } </p>
            </div>
        )
    }
}

export default Main; 