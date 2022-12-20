## 1. When a user enters an URL in the browser, how does the browser fetch the desired result?

a. What is the main functionality of the browser?

	The Main functionality of the Browser is to Process user Requests on the Internet and Display back the Result.

	Once user enters the URL in the Browser, Browser Loop up the Domain names to find IP Address of the website, where exactly website is hosted.

	Once the IP Address is found then Browser establishes TCP Connection with the Server.
	Next Browser sends HTTP(s)(Hyper Text Transport Protocol) Request to the Server.
	There are Multiple Request Methods, GET, POST, PUT etc.

	Also Browser sends Path pointing to the requested resource.

	Once Server is recognised the Request, then according to the Request Server sends back Response to the Browser with Some status code (200 for Success Response).


b. High Level Components of a browser.

	The User Interface

	The Browser Engine

	The Rendering Engine

	Networking

	UI Backend

	Javascript

	Data Storage

c. Rendering engine and its use.

	Rendering engine is responsible for displaying requested content. Rendering engine is a software that draws text and images on screen.

d. Parsers (HTML, CSS, etc)

	HTML Parsing = HTML -> Tokenization -> DOM Tree

	CSS Parsing = CSS Text -> Tokenization -> CSSOM Tree

	HTML Parser

	When user type URL and press then enter and the server responds with html file (index.html).

	HTML content is displayed on screen web page with colors and backgrounds, animations, pictures.

	Above process that turns the HTML content to a webpage, and that parsing and rendering.

	HTML content at the beginning which goes from a process called tokenization as mentioned above.

	Tokenization is a common process where code is split into several tokens, these tokens are easier to understand while parsing.

	From above HTML Parser understands start and end of the tag, type of tag and also what is inside the tag.

	CSS Parser

	CSS goes through a process of CSS Text and then the tokenization of CSS to create CSSOM (CSS Object Model).


e. Script Processors

	Javascript is interpreted, compiled, parsed and executed.


	Scripts are parsed into abstract syntax trees. Browser engines take the Abstract Synatx Tree and pass it into an interpreter, outputting bytecode which is executed on the main thread. This process called as Javascript compilation.


f. Tree construction

	The CCSOM and DOM trees are combined into a render tree, which is used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen.

	The DOM and CSSOM trees combine to form the render tree.

	Render tree contains only the nodes required to render the page.

	Layout computes the exact position and size of each object.

	Paint takes in the final render tree and renders the pixels to the screen.

g. Order of script processing

	The Scripts are loaded in the order encountered in the page. It doesn`t matter whether it`s and inline script or external script. All Script are executed in the order they are appeared.

h. Layout and Painting

	Layout

	Layout is about producing a layout tree, whose nodes are layout objects each associated with an HTML element, and each with a size and a position.

	Layout of a web page is typically specified by CSS. style sheet is a series of rules which the browser engine interprets.

	Painting

	Paint is a pixel by pixel to create the visual representation we see on the screen.
	