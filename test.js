const search = (num) => {
    let c_num = []
    let floor = 0;
    let idx = 0;
    const z = [5,6,7]
    for(var i = 1; i <= num; i++)
    {
        c_num.push(i)
    }

    do {
        floor+=1
        c_num.splice(0, z[idx]);
        idx+=1;
        if(idx == 3) idx = 0
    } while (c_num.length > 0);
    console.log(`Berada di lantai ${floor}`)
    return floor;
}

search(1000)