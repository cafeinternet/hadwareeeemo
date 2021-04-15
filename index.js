//Script is internal on the HTML tab :p

//Hello, how are you doing?
//I hope you have a nice day :3 <

window.onload = function() {
    //As the window loads, all the stuff below this becomes functional
    
        //Variables and objects!
        var money = 0; //The player's money
        var moneyclock = setInterval(getMoney, 500); //Money increment speed
        var hunger = 100; //Hunger stat
        var clock1 = setInterval(depleteH, 350); //Hunger decrement speed
        var bladder = 100; //Bladder stat
        var clock2 = setInterval(depleteB, 360); //Bladder decrement speed
        var fun = 100; //Fun stat
        var clock3 = setInterval(depleteF, 370); //Fun decrement stat
        var cap = false; //Boolean to check if pet has the cap
        var crown = false; //Boolean to check if pet has the crown
        var gameover = 0; //Gameover checker, should've been a boolean instead
        
        
        //These are event thingies for the buttons
        //The buttons don't work without them
        
        //These are for the buttons that refill the needs
        document.getElementById("BtnHunger").onclick = fillHunger;
        document.getElementById("BtnBladder").onclick = fillBladder;
        document.getElementById("BtnFun").onclick = fillFun;
        
        //These are for the items
        document.getElementById("item1").onclick = nuggetsEffect;
        document.getElementById("item2").onclick = medicineEffect;
        document.getElementById("item3").onclick = antidepressantsEffect;
        
        //Boutique buttons
        document.getElementById("boutique1").onclick = fCap;
        document.getElementById("boutique2").onclick = fCrown;
        
        //Functions galore!
        
        //This function checks if all your stats are at zero
        //If so, the Game Over pop-up appears
        function gameovercheck(){
            if(hunger==0&&bladder==0&&fun==0&&gameover==0){
                // alert("Game Over!");
                gameover++;
                spriteHandler();
            }
            else{
                spriteHandler();
            }
        }
        
        //This function handles you pet's image
        function spriteHandler(){
            if(hunger==0&&bladder==0&&fun==0){
                document.getElementById("Sprite").src = "./laptops/laptop_muerta.svg";
            }
            else if(cap==false&&crown==false){
                document.getElementById("Sprite").src = "./laptops/laptop_trabajando.svg";
            }
            else if(cap==true&&crown==false){
                document.getElementById("Sprite").src = "./laptops/laptop_antivirus.svg"
            }
            else if(cap==true&&crown==true){
                document.getElementById("Sprite").src = "./laptops/laptop_incognito.svg"
            }
        }
        
        //This function adds money if all your stats are above zero
        //Otherwise, no new money is generated, sadly
        function getMoney(){
            if(hunger>0&&bladder>0&&fun>0){
                document.getElementById("MoneyValue").value = money;
                money++;
            }
        }
        
        //Yeah, nugget function, and here I wanted to be a serious programmer xD
        //This function applies the Chicken Nuggets effect, re-filling Hunger
        function nuggetsEffect(){
            if(hunger==0&&money>=150&&gameover==0){
                money-=150;
                hunger+=50;
                clock1 = setInterval(depleteH, 350);
                depleteH();
                spriteHandler();
            }
        }
        
        //This function applies the Medicine Item effect
        function medicineEffect(){
            if(bladder==0&&money>=200&&gameover==0){
                money-=200;
                bladder+=50;
                clock2 = setInterval(depleteB, 360);
                depleteB();
                spriteHandler();
            }
        }
        
        //This function applies the Antidepressants effect
        //Giving xanax to animals is probably not a good idea
        //Is this thing an animal though?
        function antidepressantsEffect(){
            if(fun==0&&money>=300&&gameover==0){
                money-=300;
                fun+=50;
                clock3 = setInterval(depleteF, 370);
                depleteF();
                spriteHandler();
            }
        }
        
        //Buy Cap function
        function fCap(){
            if(cap==false&&money>=250){
                money-=250;
                cap=true;
                spriteHandler();
                clearInterval(moneyclock);
                moneyclock = setInterval(getMoney,100);
            }
        }
        
        //Buy Crown function
        function fCrown(){
            if(cap==true&&crown==false&&money>=1000){
                money-=1000;
                crown=true;
                spriteHandler();
                clearInterval(clock1);
                clearInterval(clock2);
                clearInterval(clock3);
                clearInterval(moneyclock);
                alert("Congratulations! You win!");
            }
        }
        
        //Feed button effect
        function fillHunger(){
            if(hunger<=99&&hunger!=0){
                hunger += 2;
            }
            else if(hunger==0){
                hunger+=0;
            }
        }
        
        //Bathroom button effect
        function fillBladder(){
            if(bladder<=99&&bladder!=0){
                bladder += 2;
            }
            else if(bladder==0){
                bladder+=0;
            }
        }
        
        //Play button effect
        function fillFun(){
            if(fun<=99&&bladder!=0){
                fun += 2;
            }
            else if(fun==0){
                fun+=0;
            }
        }
        
        //This is what makes your hunger go down
        function depleteH(){
            if(hunger == 0){
                clearInterval(clock1);
                // alert("Your pet is starving!");
                gameovercheck();
            }
            else{
                hunger--;
                document.getElementById("HungerBar").value = hunger;
            }
        }
        
        //Makes bladder go down
        function depleteB(){
            if(bladder == 0){
                clearInterval(clock2);
                // alert("Your pet has become sick!");
                gameovercheck();
            }
            else{
                bladder--;
                document.getElementById("BladderBar").value = bladder;					
            }
        }
        
        //Makes fun go down
        function depleteF(){
            if(fun == 0){
                clearInterval(clock3);
                // alert("Your pet is depressed!");
                gameovercheck();
            }
            else{
                fun--;
                document.getElementById("FunBar").value = fun;
            }
        }
    }