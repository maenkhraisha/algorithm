function timeConversion(s) {
    let timetye = s.slice(8,10);
    s = s.replace('PM','');
    s = s.replace('AM','');
    let time = s.split(':');
       
    
    if(timetye =='PM'){
        if(time[0] == '12'){
            time[0] = '12';
        }else{
            let temp = Number.parseInt(time[0]) + 12
            temp = temp % 24;
            (temp < 10 )? temp= '0'+temp :'';
            time[0] = temp;
        }
    }else{
        if(time[0] == '12'){
            time[0] = '00';
        }
    }
    
    return time[0]+":"+time[1]+":"+time[2]
}

console.log(timeConversion('12:00:00AM'))