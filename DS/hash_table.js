class HashTable{
    constructor(size = 53){
        this.keymap = Array(size)
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i= 0 ; i < Math.min(key.length , 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = Math.abs((total * WEIRD_PRIME + value) % this.keymap.length);
        }
        return total;
    }
    
    set(key,value){
        let index = this._hash(key);
        if(!this.keymap[index]){
            this.keymap[index] = [];
        }
        this.keymap[index].push([key,value]);
    }
    
    get(key){
        let index = this._hash(key);
        if(this.keymap[index]){
            for(let i = 0; i < this.keymap[index].length ; i++){
                if(this.keymap[index][i][0] == key){
                    return this.keymap[index][i][1];
                }
            }
        }else{
            return undefined;
        }

    }
    
    keys(){
        let keyArr = [];
        this.keymap.forEach(element => {
                element.forEach(item => {
                if(!valuesArr.includes(item[0]))
                    keyArr.push(item[0]);
                })
        });
        return keyArr;
    }

    values(){
        let valuesArr = [];
        this.keymap.forEach(element => {
            element.forEach(item => {
                if(!valuesArr.includes(item[1]))
                    valuesArr.push(item[1]);
            })
        });

        return valuesArr;
    }
}

let ht = new HashTable(4);

ht.set("yellow","#656");
ht.set("blue","#101");
ht.set("pink","#000");
ht.set("orange","#998");
ht.set("maron","#332");
ht.set("dark blue","#110");
ht.set("purple","#110");
ht.set("Cyan","#110");

console.log(ht.values());
