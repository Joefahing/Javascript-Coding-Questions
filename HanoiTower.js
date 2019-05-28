//Tower of Hanoi
function Hanoi(n, source, inter, dest){
    if(n === 1){
        console.log(`Moving disk ${n} from ${source} to ${dest}`);
        return;
    }
    
    Hanoi(n-1, source, dest, inter);
    console.log(`Moving disk  ${n} from ${source} to ${dest}`);
    Hanoi(n-1, inter, source, dest);
}

Hanoi(8, 'A', 'B', 'C');