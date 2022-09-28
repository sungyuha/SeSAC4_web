function class62() {
    return (
        <div className="class62">
        </div>
    );
  }

    export default class62;

    class Student {
        constructor(n, s, a, c) {
            this.n = n;
            this.s = s;
            this.a = a;
            this.c = c;
        }
        getArea() {
            return this.n + this.s + this.a + this.c;
        }
    }
    
    class Kim extends Student {
        constructor(getInfo) {
            super(n1, s1, a1, c1);
            this.n1 = n1;
            this.s1 = s1;
            this.a1 = a1;
            this.c1 = c1;
        }
    }
    class Lee extends Student {
        constructor(getInfo) {
            super(n2, s2, a2, c2);
            this.n2 = n2;
            this.s2 = y2;
            this.a2 = a2;
            this.c2 = c2;
        }
    }

    let Student1 = new Student("전씨" + "학교1" + "22," + "20");
    console.log( Student1.getArea() );

    let Student2 = new Student("윤씨" + "학교2" + "19," + "19");
    console.log( Student2.getArea() );