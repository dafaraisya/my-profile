import { useRef, useEffect } from 'react';
import logoBrand from './logo_brand.svg';
import mapKendal from './map_kendal.svg';
import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap, Power3, Sine, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery'; 
gsap.registerPlugin(ScrollTrigger);

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: 'black !important',
//             backgroundColor: 'black',
//             height: 2
//         }}
//     />
// );



function App() {
	let aboutMeTitle = useRef(null);
	let aboutMeTitle2 = useRef(null);
	let aboutMeContent = useRef(null);
	let aboutMeBackground = useRef(null);
	let expertise = useRef(null);
	let expertiseTitle = useRef(null);
	let expertiseItem = useRef(null);
	let expertiseItem1 = useRef(null);
	let expertiseItem2 = useRef(null);
	let expertiseItem3 = useRef(null);

	useEffect(() => {
		// about me
		gsap.from(
			aboutMeTitle,
			{
				fontSize: 150, 
				duration: 2,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeTitle,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
				
			},
		);
		gsap.from(
			aboutMeTitle2,
			{
				fontSize: 150, 
				duration: 2,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeTitle,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
				
			},
		);
		gsap.from(
			aboutMeContent,
			{
				opacity: 0,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeContent,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
			},
		);
		gsap.from(
			aboutMeBackground,
			{
				y: 10,
				opacity: 0,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeBackground,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
			},
		);

		gsap.set(".page", {autoAlpha: 1, xPercent:-100})

		var $page = $('.page'),
			$button = $('.button');

		$button.on('mouseenter', function(e) {
			var $thisPage = $(this).attr('id');
			console.log($thisPage);

			gsap.to($thisPage, 0.8, {xPercent:0, ease: Sine.easeInOut});
		});

		$button.on('mouseleave', function(e) {
			gsap.to($page, 0.4, {xPercent:-100, ease: Power2.easeIn});
		});

		// expertise
		const colorToBlack = gsap.fromTo(
			expertise, 
			{ backgroundColor: "rgba(255, 255, 255, 0.0)"},
			{ backgroundColor: "#000000", color: "white"}
		)
		
		ScrollTrigger.create({
			trigger: expertiseTitle,
			start: "top-=10px",
			end: "+=10px",
			scrub: true,
			animation: colorToBlack
		});
	}, [])

	// const elementExpertise = document.getElementById("expertise");
	// const custom_style={
	// 	backgroundColor : 'blue'
	// }

	// Object.assign(elementExpertise.style, custom_style);

	function changeBackgroundItem1() {
		document.getElementById("expertise").style.backgroundColor = 'blue';
		document.getElementById("expertiseItem1").style.backgroundColor = 'rgb(43, 31, 94)';
		document.getElementById("expertiseItem1").style.cursor = 'pointer';
	}
	
	function changeBackgroundItem2() {
		document.getElementById("expertise").style.backgroundColor = 'blue';
		document.getElementById("expertiseItem2").style.backgroundColor = 'blue';
		document.getElementById("expertiseItem2").style.cursor = 'pointer';
	}
	
	function changeBackgroundItem3() {
		document.getElementById("expertise").style.backgroundColor = 'blue';
		document.getElementById("expertiseItem3").style.backgroundColor = 'blue';
		document.getElementById("expertiseItem3").style.cursor = 'pointer';
	}
	
	function resetChangeBackground() {
		document.getElementById("expertise").style.backgroundColor = 'black';
		document.getElementById("expertiseItem1").style.backgroundColor = 'rgb(26, 26, 26)';
		document.getElementById("expertiseItem2").style.backgroundColor = 'rgb(26, 26, 26)';
		document.getElementById("expertiseItem3").style.backgroundColor = 'rgb(26, 26, 26)';
	}

	return (
		<div className="App">
			<Navbar expand="lg" className='Navbar-custom'>
				<Container>
					<Navbar.Brand href="#home" className='Nav-item-logo'>
						<img src={logoBrand} style={{ height: "35px" }} alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link href="#home" className='Nav-item Nav-item-active'><p>Home</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>About Me</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>My Projects</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>Contact</p></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* <ColoredLine color="white" />	 */}
			<div className="Jumbotron">
				{/* <span className="Jumbotron-background"></span> */}
				{/* <img src={main_background} className="Jumbotron-background" alt="logo" /> */}
				<div id="jumbotron-background"></div>
				<h2>// I Do Some Code :)</h2>
				<span>Scroll For More!</span>
				<div class="Arrow_for_more">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="About-me">
				<span ref={el => { aboutMeTitle = el }} className="About-me-title">About Me</span><br></br>
				<span ref={el => { aboutMeTitle2 = el }} className="About-me-title2">Hi! I'm Dafa</span><br></br>
				<p ref={el => { aboutMeContent = el }} className="About-me-content">A developer from Kendal, a small city in Indonesia.<br></br> 
				currently i'm being student in Sepuluh Nopember Institute of Technology. <br></br> I have a lot of interest in web development and Mobile Development. 
				<br></br>Here's some of my works.</p>
				<img src={mapKendal} ref={el => { aboutMeBackground = el }} className="About-me-background" alt="logo" />
			</div>
			<div ref={el => { expertise = el }} className="Expertise" id='expertise'>
				<div className='Expertise-content'>
					<div ref={el => { expertiseTitle = el }} className='Expertise-title'>STACK / FRAMEWORK<br></br>THAT I USED</div> 
					<Row>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem1 = el }} className='Expertise-item Expertise-item-1' id='expertiseItem1' onMouseEnter={changeBackgroundItem1} onMouseLeave={resetChangeBackground}></div>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem2 = el }} className='Expertise-item Expertise-item-2' id='expertiseItem2' onMouseEnter={changeBackgroundItem2} onMouseLeave={resetChangeBackground}></div>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem3 = el }} className='Expertise-item Expertise-item-3' id='expertiseItem3' onMouseEnter={changeBackgroundItem3} onMouseLeave={resetChangeBackground}></div>
						</Col>
					</Row>
				</div>
			</div>
			<li id="#Coffee" class="button">Coffee</li>
			<li id="#Raspberries" class="button">Raspberries</li>
			<li id="#Strawberries" class="button">Strawberries</li> 
			
			<div id="Book">
				<div id="Coffee" class="page">
				<img src="https://unsplash.it/300/450?image=766" alt="xxxxx"/>
				</div>
				<div id="Raspberries" class="page" >
					<img src="https://unsplash.it/300/450?image=889" alt="xxxxx"/>
				</div>
				<div id="Strawberries" class="page" >
					<img src="https://unsplash.it/300/450?image=1080" alt="xxxxx"/>
				</div>
			</div>
		</div>
	);
}

export default App;
