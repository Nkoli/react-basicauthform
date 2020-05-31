import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			password: 'kakegurui',
			authorized: false
		};
		this.authorize = this.authorize.bind(this);
	}

	authorize(e) {
		const password = e.target.querySelector(
			'input[type="password"]').value;
		const auth = password === this.state.password;
		this.setState({
			authorized: auth
		});
	}
	render() {

		let contact;
		if (this.state.authorized) {
			contact = "Contact"
		} else {
			contact = "Enter the password"
		}

		const login = (
			<form action="#" onSubmit={this.authorize}>
				<input type="password" placeholder="Password" />
				<input type="submit" />
			</form>
		);

		const contactInfo = (
			<ul>
				<li>client@example.com</li>
				<li>555.555.5555</li>
			</ul>
		);

		return (
			<div id="authorization">
				<h1>{contact}</h1>
				{ this.state.authorized ? contactInfo : login }
			</div>
		);
	}
}

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
