console.log("hallo")

var data = {a: 1}
var vm = new vue({
    el: '#example',
    data: {
        halo: "okeeee",
        num: 6,
        input: ''
},
template: 
methods: {
    incrementNum(){
        let number =parseInt(this.input);
        this.num += number;
        console.log(typeof (this.num));
    },
    decrementNum(){
        this.num -= 3;
    }
}
})