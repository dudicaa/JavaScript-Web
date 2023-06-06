<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Variáveis JavaScript</title>
    </head>
    <body>
        <script>
            //global
            var nome = "Rafael";
            var idade = 30;

            if(true){
            //local 
               let c = "João";
               let d = 20;
            }

            function teste(){
            //local
                const PI= 3.14;
                console.log(PI);
                var e = "Maria"
                var f = 40;
            }
            console.log (nome);
            console.log (idade);
            console.log (c);
            console.log (d);
            // var só respeita function 
            // let respeita todos 
            console.log (e);
            console.log (f);
            // const só é enxergado dentro do bloco


            alert("Meu nome é" + nome + "e tenho" + idade + "anos");
        </script>
    </body>
