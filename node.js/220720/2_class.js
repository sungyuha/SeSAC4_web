class Cat {
    constructor( name ){
        this.name = name; // this는 클래스 자체를 의미
    }
    mew(){
        console.log( this.name + "야옹" );
    }
}

var cat1 = new Cat("나비");
var cat2 = new Cat("냥이");
console.log( cat1 );
cat1.mew();
cat2.mew();