// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us”
//  and “Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” 
//  in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” 
//  in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.
const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<h1>Welcome to Home Page</h1>`)
        res.write(`<a href='/about'>About Us</a>`)
        res.write(`<br><a href='/contact'>Conact Us</a>`)
        res.end()
    }

    else if(req.url==="/contact")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<i style="color:red;">Email:abc@ljinstitutes.edu.in</i>`)
        res.write(`<br><a href='/about'>Go To About</a>`)
        res.end()
    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<b style="color:blue;">Welcome to LJ University</b>`)
        res.write(`<br><a href='/'>Go To Home</a>`)
        res.end()
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.write("PAGE NOT FOUND")
        res.end()
    }

}).listen(8180)