let botolMinum = 600;
let drink = 5;
let drinked = 50;
let plan = `Rudi meminum air dari botol sebanyak ${drinked}ml`;
for (let i = 0; i < drink; i++) {
    console.log(plan)
}
let pins = drink * drinked
botolMinum = botolMinum - pins
console.log(`Botol Minum Rudi sekarang berisi ${botolMinum}ml air.`)