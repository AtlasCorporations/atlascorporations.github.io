document.write(`
   <header>
      <div class="navigation">
         <img src="Images/icons/AriesTech.svg" onclick="window.location.href='index.html'" />
         <a href="news.html">NEWS</a>
         <a href="spartanos/home.html" target="_blank" rel="noopener noreferrer">SPARTANOS</a>
         <a href="spartanos/acfs.html" target="_blank" rel="noopener noreferrer">ACFS</a>
         <a href="otherprojects.html">OTHER PROJECTS</a>
         <a href="store/home.html" target="_blank" rel="noopener noreferrer">STORE</a>
         <a href="support.html">SUPPORT</a>
      </div>

      <!-- For Mobile -->
      <div class="topnav">
         <!--<img src="Images/icons/AriesTech.svg" class="active" />-->
         <!--<a href="#home" class="active">LOGO</a>-->
         <a href="javascript:void(0);" id="menu" class="icon">
            <i class="fa fa-bars"></i>
         </a>
         <div id="links">
            <a href="index.html">HOME</a>
            <a href="news.html">NEWS</a>
            <a href="spartanos/home.html" target="_blank" rel="noopener noreferrer">SPARTANOS</a>
            <a href="spartanos/acfs.html" target="_blank" rel="noopener noreferrer">ACFS</a>
            <a href="otherprojects.html">OTHER PROJECTS</a>
            <a href="store/home.html" target="_blank" rel="noopener noreferrer">STORE</a>
            <a href="support.html">SUPPORT</a>
         </div>
      </div>
   </header>
   `);

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Hamburger Menu
   document.querySelector('#menu').addEventListener('click', function () {
      const x = document.getElementById("links");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
   });
});
