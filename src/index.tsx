import { render } from 'preact';
import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {
	const [state, setState] = useState('show-button');
	const handleClick = () => {
		setState('show-greeting')
	}
	return (
		<div class="container">
			{state === 'show-button' && <button onClick={() => handleClick()}>
				Press me!
			</button>}
			{state === 'show-greeting' && <>Hello, human</>}	
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));
