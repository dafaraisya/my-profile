import { useRef, useEffect } from 'react';
import logoBrand from './logo_brand.svg';
import mapKendal from './map_kendal.svg';
import flutter_logo from './flutter_logo.png';
import firebase_logo from './firebase_logo.png';
import vuejs_logo from './vuejs_logo.png';
import nodejs_logo from './nodejs_logo.png';
import react_logo from './react_logo.png';
import mongodb_logo from './mongodb_logo.png';
import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap, Power3, Sine, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery'; 
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
gsap.registerPlugin(ScrollTrigger);

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
	let expertiseItem4 = useRef(null);
	let expertiseItem5 = useRef(null);
	let expertiseItem6 = useRef(null);

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
			{ 
				backgroundColor: "rgba(255, 255, 255, 0.0)"
			},
			{ 	backgroundColor: "#000000", 
				color: "white",
			}
		)
		
		ScrollTrigger.create({
			trigger: expertiseTitle,
			start: "top-=10px",
			end: "+=10px",
			scrub: true,
			animation: colorToBlack
		});

		const expertiseItem1 = document.getElementById("expertiseItem1");
		const expertiseItem2 = document.getElementById("expertiseItem2");
		const expertiseItem3 = document.getElementById("expertiseItem3");
		const expertiseItem4 = document.getElementById("expertiseItem4");
		const expertiseItem5 = document.getElementById("expertiseItem5");
		const expertiseItem6 = document.getElementById("expertiseItem6");
		const expertiseBackground = document.getElementById("expertise");

		const hoverIn = (id, color) => gsap.to(id, {
			scaleX:1.05, scaleY:1.05, scaleZ:1.05,
			backgroundColor: color,
			duration: 1.5,
			paused: true,
			ease: "ease-in-out"
		});
		const hoverLeave = (idElement) => gsap.to(idElement, {
			scaleX:1.0, scaleY:1.0, scaleZ:1,
			backgroundColor: 'rgb(26, 26, 26)',
			duration: 1.5,
			paused: true,
			ease: "ease-in-out",
		});

		const changeBackgroundExpertise = (idElement, color) => gsap.to(
			idElement, {
				backgroundColor: color,
			}
		);

		const resetChangeBackgroundExpertise = (idElement) => gsap.to(
			idElement, {
				backgroundColor: "#000000",
			}
		);

		expertiseItem1.addEventListener("mouseenter", () => hoverIn(expertiseItem1, "rgb(40, 182, 246)").play());
		expertiseItem1.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 182, 246)").play());
		expertiseItem1.addEventListener("mouseleave", () => hoverLeave(expertiseItem1).play());
		expertiseItem1.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem2.addEventListener("mouseenter", () => hoverIn(expertiseItem2, "rgb(242, 192, 40)").play());
		expertiseItem2.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(242, 192, 40)").play());
		expertiseItem2.addEventListener("mouseleave", () => hoverLeave(expertiseItem2).play());
		expertiseItem2.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem3.addEventListener("mouseenter", () => hoverIn(expertiseItem3, "rgb(0, 116, 77)").play());
		expertiseItem3.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 116, 77)").play());
		expertiseItem3.addEventListener("mouseleave", () => hoverLeave(expertiseItem3).play());
		expertiseItem3.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem4.addEventListener("mouseenter", () => hoverIn(expertiseItem4, "rgb(79, 123, 25)").play());
		expertiseItem4.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(79, 123, 25)").play());
		expertiseItem4.addEventListener("mouseleave", () => hoverLeave(expertiseItem4).play());
		expertiseItem4.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem5.addEventListener("mouseenter", () => hoverIn(expertiseItem5, "rgb(0, 130, 153)").play());
		expertiseItem5.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 130, 153)").play());
		expertiseItem5.addEventListener("mouseleave", () => hoverLeave(expertiseItem5).play());
		
		expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		expertiseItem6.addEventListener("mouseenter", () => hoverIn(expertiseItem6, "rgb(40, 95, 34)").play());
		expertiseItem6.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 95, 34)").play());
		expertiseItem6.addEventListener("mouseleave", () => hoverLeave(expertiseItem6).play());
		expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
	}, [])

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
			<div className="Jumbotron">
				<div id="jumbotron-background"></div>
				<h2>// lorem ipsum lorem :)</h2>
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
							<a href='google.com'>
								<div ref={el => { expertiseItem1 = el }} className='Expertise-item Expertise-item-1' id='expertiseItem1'>
									<img className='Expertise-logo-1' width={150} src={flutter_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem2 = el }} className='Expertise-item Expertise-item-2' id='expertiseItem2'>
								<img className='Expertise-logo-2' width={240} src={firebase_logo}></img>
							</div>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem3 = el }} className='Expertise-item Expertise-item-3' id='expertiseItem3'>
								<img className='Expertise-logo-3' width={180} src={vuejs_logo}></img>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem4 = el }} className='Expertise-item-new-row Expertise-item-4' id='expertiseItem4'>
								<img className='Expertise-logo-4' width={280} src={nodejs_logo}></img>
							</div>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem5 = el }} className='Expertise-item-new-row Expertise-item-5' id='expertiseItem5'>
							<img className='Expertise-logo-5' width={240} src={react_logo}></img>
							</div>
						</Col>
						<Col xs={6} md={4}>
							<div ref={el => { expertiseItem6 = el }} className='Expertise-item-new-row Expertise-item-6' id='expertiseItem6'>
							<img className='Expertise-logo-6' width={240} src={mongodb_logo}></img>
							</div>
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
