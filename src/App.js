import "./App.css";

function App() {
	const number = 777;
	const id = "#67FGHF78G87YG87";
	const number2 = 888;
	const id2 = "#KS8TF778TF79";
	const number3 = 555;
	const id3 = "#6GHA9G8G87YG87";
	const number4 = 999;
	const id4 = "#YGU67G7D5S7Y6";

	const details = {
		name: "Habibor Rahaman",
		profassion: "Full Stack Developer",
		skils: [
			"Web design",
			"Web development",
			"Software developemnt",
			"Graphics design",
		],
		language: {
			language: [
				"C++",
				"C",
				"JavaScript",
				"Pythob",
				"PHP",
				"TypeScript",
				"Java",
				"C#",
			],
			framwork: ["Node.js", "Django", "Laravel", "Flask"],
			frontFramwork: ["React.js", "Vue.js", "Anguler.js"],
		},
		discrip() {
			const data = `I am habibor rahaman. i'm self thought leraner. i'm a fullstack developer in both field like web and web application or software application. i expert to javaScript, python, php and there fornt and backend framework like laravel, node.js, django. i passionate about this.`;
			return data;
		},
	};

	//for style object...
	const header = {
		backgroundColor: 'green',
		color: 'white',
		padding: '10px',
		textAlign: 'center',
		borderRadius: '5px',
	}


	return (
		<div className="App">
			<h1 style={{ color: 'green' }}>This is fist react app here...</h1>

			<section className="mySection">
				<div className="card">
					<p>My id is : {id}</p>
					<h3>My namber is : {number}</h3>
					<h3>My add namber is : {number + 20}</h3>
				</div>

				<div className="card">
					<p>My id is : {id2}</p>
					<h3>My namber is : {number2}</h3>
					<h3>My add namber is : {number2 + 80}</h3>
				</div>

				<div className="card">
					<p>My id is : {id3}</p>
					<h3>My namber is : {number3}</h3>
					<h3>My add namber is : {number3 + 66}</h3>
				</div>

				<div className="card">
					<p>My id is : {id4}</p>
					<h3>My namber is : {number4}</h3>
					<h3>My add namber is : {number4 + 67}</h3>
				</div>
			</section> <br /> <br />


			<div className="details">
				<h2 style={header}>My Details Here, Here is data tream to an object..</h2>
				<p>Nmae: {details.name}</p>
				<p>Profession: {details.profassion}</p>
				<p>My Skils: {details.skils.join(', ')}</p>
				<p>Programming Language: {details.language.language.join(', ')}</p>
				<p>Fontend Framwork: {details.language.frontFramwork.join(', ')}</p>
				<p>Backend Framwork: {details.language.framwork.join(', ')}</p>
				<p>About Myself: {details.discrip()}</p>
			</div> <br />

			{/* calling UserInfo component  */}
			<div className="data-user">
				<UserInfo name="Habibor Rahaman" profession="Full Stack Developer" depertment="Computer Science"></UserInfo>
				<UserInfo name="Abdullah" profession="Pattern Designer" depertment="Computer Science"></UserInfo>
				<UserInfo name="Mahmudullah" profession="Programmer" depertment="Computer Science"></UserInfo>
				<UserInfo name="Alex Metual" profession="System Developer" depertment="Computer Science"></UserInfo>
				<UserInfo name="Jems Jonderld" profession="Problem setter" depertment="Computer Science"></UserInfo>
				<UserInfo name="Nil Armstrong" profession="Scientest" depertment="Computer Science"></UserInfo>
				<UserInfo name="Marf" profession=".Net Developer" depertment="Computer Science"></UserInfo>
				<UserInfo name="Allen Mars" profession="Hybrid System Developer" depertment="Computer Science"></UserInfo>
			</div> <br />
		</div>
	);
}

// another component here....
function UserInfo(props) {
	const { name, profession, depertment } = props;
	return (
		<div className="person">
			<h2>User Information Herre</h2>
			<p>Name: {name ? name : 'Empty Data'}</p>
			<p>Profession: {profession ? profession : 'Empty Data'}</p>
			<p>Depertment: {depertment ? depertment : 'Empty Data'}</p>
		</div>
	)
}


export default App;
