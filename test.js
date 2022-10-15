let number = Math.floor(Math.random() * 10 ) + 1; //arvuti toodab numbri 1-10
console.log(number);    //kontroll mis number on
for (let i = 0; i < 3; i++) /*loop, mis kordab küsimust kuni 3ni*/{
    let guess = prompt('Sisesta üks number 1-10-ni');
    if (number == guess) /*võrdleb arve*/{
        console.log('Yay! arvasid numbri ära!')
        break; //lõpetab loopi
    }
    else {
        if (number != guess) /*arvud EI ole võrdsed*/{
            console.log(`Sorry, ${guess} ei ole õige number.`);
         if (Math.abs(number - guess) == 1 ) /*arv on +/-1 arvuti genereeritust*/{
                console.log('Ai, sa pakkusid väga lähedale.');
            }
        }
    }
}