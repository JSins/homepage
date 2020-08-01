<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kahnwald Multimedia</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css2?family=Heebo&family=Karla&family=Varta:wght@300&display=swap" rel="stylesheet">
</head>
<body>

    <div id="placeholder"></div>
    
    <header>
        <div id="logosmall"></div>
        <div id="navbar">
            <div id="title">
                <a href="home.html">Kahnwald Multimedia</a>
            </div>
            
            <nav>
                <a class="link" href="home.html">Arbeit</a>
                <a class="link" href="ubermich.html">Über mich</a>
                <a class="link" href="">Mein Team</a>
                <a class="link" href="">Presse</a>
                <a class="link" href="contact.html">Kontakt</a>
            </nav>
        </div>
    </header>
    
    <main>


        <section id="thanks">
            <h2>Danke für Ihr Vertrauen!</h2>
            <p>Ich werde mich in Kürze im Ihr Anliegen kümmern.</p>
            <a href="home.html" class="blackbutton">Startseite</a>
        </section>

        <?php

            $empf = "nutzlosundso@gmail.com";
            $betreff = $_POST['Betreff'];
            $from = "From: ";
            $from .= $_POST['Vorname']." ".$_POST['Name'];
            $from .= " <";
            $from .= $_POST['Email'];
            $from .= ">\n";
            $from .= "Reply-To: ";
            $from .= $_POST['Email'];
            $from .= "\n";
            $from .= "Content-Type: text/html\n";
            $text = $_POST['Nachricht'];

            mail($empf, $betreff, $text, $from);

        ?>


    </main>

    <footer>
        <h1>Impressum</h1>
        <div id="footerinfo">
            <div class="impr">
                Stadtfeldkamp 33<br>
                24114 Kiel<br>
                Deutschland
            </div>
            <div class="impr">
                +49 152 0352 0752<br>
                jkahnwald@gmail.com
            </div>
            <div class="impr">
                @97jonas<br>
                Jonas Kahnwald
            </div>
        </div>
    </footer>




    <script src="javascript.js"></script>    
</body>
</html>