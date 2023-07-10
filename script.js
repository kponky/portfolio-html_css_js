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
    for(let n=0; n<totalNavList; n++ )
{
    navList[n].querySelector("a").classList.remove("active")
}    this.classList.add("active")
    viewSection(this)

   })
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