        const chaine1 = prompt("entrer la première chaine");
        const chaine2 = prompt("entrer la deuxième chaine");
    
        function distance_hamming(ch1,ch2){      
            let d = 0
            if(chaine1.length !== chaine2.length){
                console.log("les 2 chaines doivent etre de la meme longueur")
                return -1
            }
            else{
                
                for (let i = ch1.length - 1; i >= 0; i--) 
                {
                    if(ch1[i] != ch2[i])
                        d++;
                }
                return d
            }
        }

        let dist = distance_hamming(chaine1,chaine2);
        console.log("la distance de haming est égale à : " + dist);