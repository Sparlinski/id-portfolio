# id-portfolio

project template html

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Portfolio</title>
    <link rel="stylesheet" a href="../style.css"> 

    <!-- FONTS -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet">

</head>

<body>

    <header>

        <div class="main_h_container">
            <a href="../index.html">
                <h1 class="main_h">Darren Costelloe</h1>   
            </a>
        </div>
        <div class="menu_btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="os_menu">
            <nav class="os_nav">
                <ul class="menu_items">
                    <li><a href="../index.html">PROJECTS</a></li>
                    <li><a href="../about.html">ABOUT</a></li>
                    <li><a href="../contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <button class="os_menu_btn">X</button>
        </div>
        
    </header>

    <main>

        <section class="project_section">
            <h3 class="project_title">Project Name</h3>

            <p class="project_line_tag">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
            <img src="../images/321-coffee/321-location.png" alt="321 Coffee location" loading="eager" class="project_slide">
    
            <p class="project_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, cupiditate? Itaque ducimus odit quae recusandae delectus est provident laudantium labore, culpa possimus molestiae repellat aperiam, deserunt impedit veritatis in obcaecati?</p>

            <img src="../images/321-coffee/321-location.png" alt="321 Coffee location" loading="eager" class="project_slide">

            <h3 class="project_phase">Ideation</h3>

        </section>

         <button class="to_top">BACK TO TOP</button>
        
    </main>

    <footer>

        <p class="footer_p">&#169; Darren Costelloe. All rights reserved</p>

    </footer>

</body>
<script src="../script.js"></script>
</html>

ANIMATION PROTOTYPES

@media (prefers-reduced-motion: no-preference) {
    section > img.project_slide.right_slide{
        transform: translateX(100%);
        animation: slide-in linear forwards;
        animation-timeline: view();
        animation-range: entry 50px;
    }   
}

@keyframes slide-in {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@media (prefers-reduced-motion: no-preference) {
    section > img.project_slide.left_slide{
        transform: translateX(100%);
        animation: slide-in linear forwards;
        animation-timeline: view();
        animation-range: entry 50px;
    }   
}

@keyframes slide-in {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}