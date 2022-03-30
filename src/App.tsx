import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { combinedLinearCongruentialGenerator } from './clcg';
import { linearCongruentialGenerator } from './lcg';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
	const [callers, setCallers] = useState(1000);
	const [interArrivals, setInterArrivals] = useState(
		Array.from({ length: 20 })
	);
	const [serviceTimes, setServiceTimes] = useState(Array.from({ length: 20 }));

	const fetchMoreArrivals = () => {
		setTimeout(() => {
			setInterArrivals(arrivals.concat(Array.from({ length: 20 })));
		}, 1500);
	};
	const fetchMoreServiceTimes = () => {
		setTimeout(() => {
			setServiceTimes(services.concat(Array.from({ length: 20 })));
		}, 1500);
	};
	const style = {
		height: 30,
		border: '1px solid green',
		margin: 6,
		padding: 8,
		minWidth: 100,
	};
	// Seed value
	let Xo = 5;

	// Modulus parameter
	let m = callers;

	// Multiplier term
	let a = 3;

	// Increment term
	let c = 3;

	// Number of Random numbers
	// to be generated
	let noOfRandomNums = m;

	// To store random numbers
	let randomNums = new Array(noOfRandomNums).fill(0);
	const arrivals: number[] = linearCongruentialGenerator(
		Xo,
		m,
		a,
		c,
		randomNums,
		noOfRandomNums
	);
	const services: number[] = combinedLinearCongruentialGenerator();

	return (
		<div className="App">
			<header className="App-header">
				<h1>SAFARICOM AUTOMATED QUEUING SYSTEM</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<h5>(React and TypeScript)</h5>
			</header>
			<section className="body">
				<h2>
					<label htmlFor="callers">Enter number of Callers: </label>
					<input
						type="number"
						name="callers"
						id="callers"
						min={1000}
						onChange={e => setCallers(parseInt(e.currentTarget.value))}
						value={callers}
					/>
				</h2>
				<div className="display-region">
					<p>
						<h2>Inter-arrival time:</h2>
						{
							<InfiniteScroll
								dataLength={interArrivals.length}
								next={fetchMoreArrivals}
								hasMore={true}
								loader={<h4>Loading...</h4>}
							>
								{interArrivals.map((_, i) => (
									<div key={i} style={style}>
										{arrivals[i]}
									</div>
								))}
							</InfiniteScroll>
						}
					</p>
					<p>
						<h2>Service time:</h2>
						{
							<InfiniteScroll
								dataLength={serviceTimes.length}
								next={fetchMoreServiceTimes}
								hasMore={true}
								loader={<h4>Loading...</h4>}
							>
								{serviceTimes.map((_, i) => (
									<div key={i} style={style}>
										{services[i]}
									</div>
								))}
							</InfiniteScroll>
						}
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
