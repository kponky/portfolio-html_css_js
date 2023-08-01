// typing animation ====///
var typed = new Typed(".typing", {
    strings:[" ", "Frontend Developer", "Web Designer", "Web Developer", "Software Engineer"],
    typeSpeed: 200,
    BackSpeed: 30,
    loop: true

})

// Aside 

const nav = document.querySelector(".side-nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
   a.addEventListener("click", function()
   {
    // for (let i = 0; i<totalSection; i++)
    // {
    //     allSection[i].classList.remove("back-section");
    // }
    removeBackSection(); 

    for(let n=0; n<totalNavList; n++ )
{
    if(navList[n].querySelector("a").classList.contains("active"))
    {
        // addBackSection();
        allSection[n].classList.add("back-section");
    }
    navList[n].querySelector("a").classList.remove("active")
}    this.classList.add("active")
    viewSection(this)
    if(window.innerWidth < 1200){
        sideBarSectionTogglerBtn();
    }
   })
}

function removeBackSection()
{
      for (let i = 0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    
    allSection[num].classList.add("back-section");

}
function viewSection(element)
{
    for (let i = 0; i<totalSection; i++)
    {
    
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element)
{
    for(let i = 0; i <totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");

        }
    }
    
}

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");

    viewSection (this);
    updateNav(this);
    removeBackSection();  
    addBackSection(sectionIndex);

})

const navTogglerBtn = document.querySelector(".side-nav-toggler"),
sideBar = document.querySelector(".side-bar");
navTogglerBtn.addEventListener("click", ()=>{
    sideBarSectionTogglerBtn();
})
function sideBarSectionTogglerBtn(){
    sideBar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }

}


// send email js


// let btn = document.getElementById("btn-submit"); 
// btn.addEventListener("click", function(e){
//     e.preventDefault()
//     let name = getElementById("name").value
//     let email = getElementById("email").value
//     let subject = getElementById("subject").value
//     let message = getElementById("message").value

//     let body = 'name: '+name + '<br/> email:' + email + '<br/> subject: ' +subject + '<br/> message: '+ message;

//     Email.send({
//         SecureToken : "eee9c013-e8b3-4298-b478-af8fe338b5a8",
//         To : 'ikponkedet@gmail.com',
//         From : "ikponkeedet84@gmail.com",
//         Subject : "Contact Message",
//         Body : "body"
//     }).then(
//       message => alert(message)
//     );
    
// })




function sendMail(){
    let mailDetails = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  
    };




const serviceID = "service_84lqw19 ";
const templateID = "template_0aue6wb";

emailjs.send(serviceID, templateID, mailDetails)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("your message as being sent")
        
    }

)
.catch(err =>console.log(err));

}

let popup = document.getElementById("popup");
// function openu