function time(sek){
sek=Math.floor(sek);
var min = sek / 60;
var s = sek % 60;
s = s.toString();
min=Math.floor(min);
var h = min / 60;
var m = min % 60;
m = m.toString();
h = Math.floor(h);
h = h.toString();
//console.log(h , ' godzin ', m ,' minut ', s,' sekund'); da się zrobić, żeby wypisywało bez cudzysłowów?
process.stdout.write(h);
process.stdout.write(' godzin ');
process.stdout.write(m);
process.stdout.write(' minut ');
process.stdout.write(s);
process.stdout.write(' sekund\n');
}

exports.time=time;