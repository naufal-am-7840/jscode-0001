let durasiParkir = 10;
let durasiTemportal = 2
let totalone = 0
if (durasiTemportal < 2) {
    tarifTemporalJam = 1000;
    return durasiTemportal * tarifTemporalJam;
}
let tarifParkirPerJam = 2000;
let durasiTemportal2 = durasiParkir - durasiTemportal;
let totaltwo = durasiTemportal2 * tarifParkirPerJam;
let final = totalone + totaltwo;
console.log(`Anda parkir selama ${durasiParkir} jam dengan total biaya sejumlah Rp${final}`)
console.log(totalone)