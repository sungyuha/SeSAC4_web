function App() {
    return (
      <div className="App">
      </div>
    );
  }
  ​
  export default App;
  ​
  class Shape {
    constructor(w, h) {
      this.w = w;
      this.h = h;
    }
    getArea() {
      return this.w * this.h;
    }
  }
  class Square extends Shape { // extends가 있다는 것은 실행이 됨
  }
  class Triangle extends Shape { // 부모한테 상속 받지 않고 자식은 맘대로, 즉 부모를 덮어쓴거
    constructor(x,y,name) {
      super(x,y); // constructor는 덮어쓸 수 없음
      this.name = name;
    }
    getArea(){
      return this.w*this.h/2;
    }
  }
  ​
  let shape1 = new Shape(5,4);
  console.log( shape1.getArea() );
  ​
  let shape2 = new Shape(2,3);
  console.log( shape2.getArea() );
  ​
  let shape3 = new Square(4,8);
  console.log( shape3.getArea() );
  let shape4 = new Triangle(5,6, 'test');
  console.log( shape4.getArea());