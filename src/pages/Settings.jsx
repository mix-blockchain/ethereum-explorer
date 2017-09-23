import React from 'react';

export default class Settings extends React.Component {

    constructor() {

        super();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.setURI = this.setURI.bind(this);

    }

    handleInputChange(event) {

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

    }

    setURI(ev) {

        ev.preventDefault();


    }

    render() {

        return <div className="settings-page">

            <h3>Connection settings</h3>

            <div className="col-md-8 col-md-offset-2">

                <p>
                    The Ethereum Block Explorer can connect to an Ethereum blockchain via two methods:
                </p>

                <ul>
                    <li>
                        Blockchain node URI (e.g. http://[blockchain node]:[port]). Could be a blockchain node running on your
                        localhost. The node will need to have CORS enabled for this to work.
                    </li>
                    <li>
                        Metamask. See <a href="https://metamask.io/" target="_blank">https://metamask.io/</a>. Metamask is a clever
                        Chrome and Firefox browser extension that manages blockchain connections and accounts for individual blockchains
                        (including test and localhost nodes). You will need to install and enable Metamask for this option to work.
                    </li>
                </ul>


            </div>

            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

            </div>

        </div>

    }

}