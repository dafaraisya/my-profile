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
import { Navbar, Nav, Container, Row, Col, Carousel, CarouselItem, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap, Power3, Sine, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
		// expertiseItem1.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 182, 246)").play());
		expertiseItem1.addEventListener("mouseleave", () => hoverLeave(expertiseItem1).play());
		// expertiseItem1.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem2.addEventListener("mouseenter", () => hoverIn(expertiseItem2, "rgb(242, 192, 40)").play());
		// expertiseItem2.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(242, 192, 40)").play());
		expertiseItem2.addEventListener("mouseleave", () => hoverLeave(expertiseItem2).play());
		// expertiseItem2.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem3.addEventListener("mouseenter", () => hoverIn(expertiseItem3, "rgb(0, 116, 77)").play());
		// expertiseItem3.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 116, 77)").play());
		expertiseItem3.addEventListener("mouseleave", () => hoverLeave(expertiseItem3).play());
		// expertiseItem3.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem4.addEventListener("mouseenter", () => hoverIn(expertiseItem4, "rgb(79, 123, 25)").play());
		// expertiseItem4.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(79, 123, 25)").play());
		expertiseItem4.addEventListener("mouseleave", () => hoverLeave(expertiseItem4).play());
		// expertiseItem4.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem5.addEventListener("mouseenter", () => hoverIn(expertiseItem5, "rgb(0, 130, 153)").play());
		// expertiseItem5.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 130, 153)").play());
		expertiseItem5.addEventListener("mouseleave", () => hoverLeave(expertiseItem5).play());
		// expertiseItem5.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());

		// expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		expertiseItem6.addEventListener("mouseenter", () => hoverIn(expertiseItem6, "rgb(40, 95, 34)").play());
		// expertiseItem6.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 95, 34)").play());
		expertiseItem6.addEventListener("mouseleave", () => hoverLeave(expertiseItem6).play());
		// expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());

		// handle responsive desgin
		let mm = gsap.matchMedia();

		mm.add("(max-width: 800px)", () => {
			ScrollTrigger.create({
				trigger: expertiseTitle,
				start: "top-=40px",
				end: "+=40px",
				scrub: true,
				animation: colorToBlack
			});
			
			gsap.from(
				aboutMeTitle,
				{
					fontSize: '14px', 
				},
			);
			gsap.from(
				aboutMeTitle2,
				{
					fontSize: '24px', 
				},
			);
			gsap.from(
				aboutMeContent,
				{
					opacity: 1,
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
		});
	}, [])

	return (
		<div className="App">
			{/* navbar */}
			<Navbar expand="lg" className='Navbar-custom'>
				<Container>
					<Navbar.Brand href="#home" className='Nav-item-logo'>
						<img src={logoBrand} style={{ height: "35px" }} alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link href="#home" className='Nav-item Nav-item-active'><p>Home</p></Nav.Link>
							<Nav.Link href="#about-me" className='Nav-item' ><p>About Me</p></Nav.Link>
							<Nav.Link href="#my-projects" className='Nav-item' ><p>My Projects</p></Nav.Link>
							<Nav.Link href="#contact" className='Nav-item' ><p>Contact</p></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* jumbotron */}
			<div className="Jumbotron">
				<div id="jumbotron-background"></div>
				<h2>// Hi, I'm Dafa Raisya :)</h2>
				<span>Scroll For More!</span>
				<div className="Arrow_for_more">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			{/* about me */}
			<div className="About-me" id='about-me'>
				<span ref={el => { aboutMeTitle = el }} className="About-me-title">About Me</span><br></br>
				<span ref={el => { aboutMeTitle2 = el }} className="About-me-title2">Hi! I'm Dafa</span><br></br>
				{/* <p ref={el => { aboutMeContent = el }} className="About-me-content">A developer from Kendal, a small city in Indonesia.<br></br> 
				currently i'm being student in Sepuluh Nopember Institute of Technology. <br></br> I have a lot of interest in web development and Mobile Development. 
				<br></br>Here's some of my works.</p> */}
				<p ref={el => { aboutMeContent = el }} className="About-me-content">I grew up in a small town in Indonesia called Kendal. But i graduate of the Computer Engineering department from Sepuluh Nopember Institute of Technology in Surabaya. I have an interest in software development, especially in the fields of Web and Mobile Programming. I have gained experience in working on projects using various technologies in software development such as React.js, Vue.js, Express.js, Flutter, SQL, MongoDB, and Google Firebase. Currently, I am eager to constantly gain new experiences and develop skills in the field of software development.</p>
				{/* <p ref={el => { aboutMeContent = el }} className="About-me-content">I grew up in a small town in Indonesia called Kendal. But i graduate of the <br /> Computer Engineering department from Sepuluh Nopember Institute of <br /> Technology in Surabaya. I have an interest in software development, <br /> especially in the fields of Web and Mobile Programming. I have gained <br /> experience in working on projects using various technologies in software <br /> development such as React.js, Vue.js, Express.js, Flutter, SQL, MongoDB, <br /> and Google Firebase. Currently, I am eager to constantly gain new <br /> experiences and develop skills in the field of software development.</p> */}
				<img src={mapKendal} ref={el => { aboutMeBackground = el }} className="About-me-background" alt="logo" />
			</div>
			
			<div className="About-me-mobile" id='about-me'>
				<span className="About-me-title-mobile">About Me</span><br></br>
				<span className="About-me-title2-mobile">Hi! I'm Dafa</span><br></br>
				<p className="About-me-content-mobile">I grew up in a small town in Indonesia called Kendal. But i graduate of the Computer Engineering department from Sepuluh Nopember Institute of Technology in Surabaya. I have an interest in software development, especially in the fields of Web and Mobile Programming. I have gained experience in working on projects using various technologies in software development such as React.js, Vue.js, Express.js, Flutter, SQL, MongoDB, and Google Firebase. Currently, I am eager to constantly gain new experiences and develop skills in the field of software development.</p>
			</div>

			{/* expertise */}
			<div ref={el => { expertise = el }} className="Expertise" id='expertise'>
				<div className='Expertise-content'>
					<div ref={el => { expertiseTitle = el }} className='Expertise-title'>MY SKILLS</div> 
					<div className='Expertise-item-mobile'>
						<h4>Flutter</h4>
						<h4>Firebase</h4>
						<h4>Vue.js</h4>
						<h4>Node.js</h4>
						<h4>React.js</h4>
						<h4>MongoDB</h4>
					</div>
					<Row>
						<Col xs={6} md={4}>
							<a href='https://flutter.dev/'>
								<div ref={el => { expertiseItem1 = el }} className='Expertise-item Expertise-item-1' id='expertiseItem1'>
									<img className='Expertise-logo-1' width={150} src={flutter_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://firebase.google.com/">
								<div ref={el => { expertiseItem2 = el }} className='Expertise-item Expertise-item-2' id='expertiseItem2'>
									<img className='Expertise-logo-2' width={240} src={firebase_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://vuejs.org/">
								<div ref={el => { expertiseItem3 = el }} className='Expertise-item Expertise-item-3' id='expertiseItem3'>
									<img className='Expertise-logo-3' width={180} src={vuejs_logo}></img>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col xs={6} md={4}>
							<a href="https://nodejs.org/en/">
								<div ref={el => { expertiseItem4 = el }} className='Expertise-item-new-row Expertise-item-4' id='expertiseItem4'>
									<img className='Expertise-logo-4' width={280} src={nodejs_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://reactjs.org/">
								<div ref={el => { expertiseItem5 = el }} className='Expertise-item-new-row Expertise-item-5' id='expertiseItem5'>
									<img className='Expertise-logo-5' width={240} src={react_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://www.mongodb.com/">
								<div ref={el => { expertiseItem6 = el }} className='Expertise-item-new-row Expertise-item-6' id='expertiseItem6'>
									<img className='Expertise-logo-6' width={240} src={mongodb_logo}></img>
								</div>
							</a>
						</Col>
					</Row>
				</div>
			</div>

			{/* my project */}
			<div className='Expertise-to-my-project' id='my-project'></div>
			<div className='My-project'>
				<div className='My-project-title'>
					<span>Here's some of my work</span>
				</div>
				<hr />
			</div>

			{/* carousel */}
			<Carousel className='carousel' prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
				<Carousel.Item interval={5000}>
					<img
						className="carousel-img"
						src="assets/garuda-21.png"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} class="carousel-item">
					<img
						className="carousel-img"
						src="assets/rongsokin.png"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} class="carousel-item">
					<img 
						className="carousel-img"
						src="assets/mage-7.png"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} class="carousel-item">
					<img 
						className="carousel-img"
						src="assets/nulungi.png"
						alt="Fourth slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000} class="carousel-item">
					<img 
						className="carousel-img"
						src="assets/pemira.png"
						alt="Fifth slide"
					/>
				</Carousel.Item>
			</Carousel>

			<hr />

			{/* footer */}
			<div className='footer' id='contact'>
				<Card className="text-center">
					<Card.Header>Contact Me</Card.Header>
					<Card.Body>
						<div className='mb-3'>
							<i class="bi-envelope"></i>
							<span className='footer-contact'>Email</span>
							<a>dafaraisya.dr@gmail.com</a>
						</div>
						<div className='mb-3'>
							<i class="bi-github"></i>
							<span className='footer-contact'>Github</span>
							<a href="https://github.com/dafaraisya">
								github.com/dafaraisya
							</a>
						</div>
						<div className='mb-3'>
							<i class="bi-linkedin"></i>
							<span className='footer-contact'>LinkedIn</span>
							<a href="https://www.linkedin.com/in/dafaraisya">
								linkedin.com/dafaraisya
							</a>
						</div>
					</Card.Body>
					<Card.Footer className="text-muted"><p>Copyright &copy; 2023, All Right Reserved Dafa Raisya</p></Card.Footer>
				</Card>
			</div>			

		</div>
	);
}

export default App;
