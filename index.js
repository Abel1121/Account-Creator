const howMany = document.getElementById("howMany").value;
const nicknameList = document.querySelector('.nickname_list');
const submit = document.querySelector('.submit');
const nickList = ['White', 'Red', 'Yellow', 'Blue', 'Black', 'Brown', 'Orange', 'Grey', 'Green', 'Gold', 'Silver', 'Bronze', 'Diamond', 'Platinium', 'Challenger', 'Knight', 'Tank', 'Archer', 'Palladin', 'Druid', 'Sorccer', 'Human', 'Goblin', 'Dragon', 'Angel', 'Unicorn', 'Minotaur', 'Golem', 'Devil', 'Demon', 'Giant', 'Titan', 'Energy', 'Power', 'Master', 'Slime', 'Orc',
'Minions', 'Tower'];
console.log(howMany);
console.log(nickList.length);
console.log(nickList[1]+nickList[15]);

submit.addEventListener('click', (e) => {
    for (let i = 0; i < document.getElementById("howMany").value; i++){
        let a = Math.random()*nickList.length;
        let b = Math.random()*nickList.length;
        fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickList[Math.round(a)]+nickList[Math.round(b)]}?api_key=RGAPI-12c7c38b-588f-4a1b-bc05-f4bc7e314d9c`)
        .then(resp => {
                console.log(resp)
        });
        console.log(nickList[Math.round(a)]+nickList[Math.round(b)])
        nicknameList.innerHTML += `<li>${nickList[Math.round(a)]+nickList[Math.round(b)]}</li>`
    }
});