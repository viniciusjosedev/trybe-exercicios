import { useState } from "react";

function App() {
	const [emails, setEmails] = useState([{
		id: 0,
		title: "Título do email",
		status: 0
	}, {
		id: 1,
		title: "Título do 2 email",
		status: 0
	}, {
		id: 2,
		title: "Título do 3 email",
		status: 0
	}]);

	const buttonOnly = ({ target: { name, id } }) => {
		if (name === 'lida') {
		  emails[id].status = 1;
			// console.log(emails)
			setEmails([ ...emails ])
		}
		else {
		  emails[id].status = 0;
			setEmails([ ...emails ])
		}
	}

	const buttonAll = ({ target: { name } }) => {
		if (name === 'all-done') {
			const emailsListNew = emails.map((e, index) => {
				e.status = 1;
				return e;
			});
			setEmails([ ...emailsListNew ])
		}
		else {
			const emailsListNew = emails.map((e, index) => {
				e.status = 0;
				return e;
			});
			// console.log(emailsListNew)
			setEmails([ ...emailsListNew ])
		}
	}

  return (
		<>
			<h1>Caixa de entrada</h1>
			<button name="all-done" onClick={ buttonAll } type="button">Marcar todos como lido</button>
			<button name="all-faill" onClick={ buttonAll } type="button">Marcar todos como não lido</button>
			{ emails.map((e) => (
				<div key={e.id}>
					<h1 style={ { color: e.status === 1 ? 'grey' : 'black' } }>{e.title}</h1>
					<button id={e.id} onClick={ buttonOnly } name="lida" type="button">lido</button>
					<button id={e.id} onClick={ buttonOnly } name="não lida" type="button">não lido</button>
				</div>
			)) }
		</>
  );
}

export default App;
