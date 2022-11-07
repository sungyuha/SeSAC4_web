package first_project;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	// 클래스 안에 선언된 함수는 메소드
//	public static int number() {
//		return 5;
//	}
	
	//public static void hello() {
		// void는 반환값이 있으면 안됨
//		System.out.println("hello");
//	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*System.out.println("Hello");
		
		boolean logic = true;
		
		char ch = 'A';
		
		int number = 2135;
		
		double number2 = 5.6;
		
		System.out.println(logic);
		System.out.println(ch);
		
		String atr = "alsladsad";
		String str2 = new String("alsladsad");*/
		
		//System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
		// 김소연 99 163.5 false
		
		//Scanner scanner = new Scanner(System.in);
		// Scanner는 클래스 이름
		// scanner는 변수, 식별자/ 객체 이름
		// System.in는 인자. 입력 받는 값
		
		/*String name = scanner.next();
		int age = scanner.nextInt();
		double height = scanner.nextDouble();
		boolean married = scanner.nextBoolean();
		
		System.out.println(name);
		System.out.println(age);
		System.out.println(height);
		System.out.println(married);
		
		scanner.close();*/
		
		//double a = 5.2;
		//double b = 2.0;
		//System.out.println(a/b);
		
		//System.out.println(5.0/2.0);
		//System.out.println(5/2);
		//int c = 5;
		//int d = 2;
		//System.out.println((double)c/d); // 강제형 변환
		
		/*System.out.println("이름을 입력하세요");
		
		Scanner scanner = new Scanner(System.in);
		String name = scanner.next();
		System.out.println(name);*/
		
//		String str = new String("홍길동");
//		String str2 = "홍길동";
//		
//		if (str.equals("str2")) {
//			System.out.println("남자");
//		} 
//		else System.out.println("여자");
		
		//int number = 9;
		//String str = new String("홍길동");
		//if (number % 3 == 0) System.out.println("3의 배수");
		//else System.out.print("3의 배수 아님");
		
		/*switch(number % 3) {
		case 0:
			System.out.println("3의 배수");
			break;
		default:
			System.out.print("3의 배수 아님");
		}*/
		
		/*String str = new String("홍길동");
		switch(str) {
		case "홍길동":
			System.out.println("남자");
			break;
		default:
			System.out.print("3의 배수 아님");
		}*/
		
//		for(int i=0;i<10;i++) {
//			System.out.print(i+ " ");
//		}
//		
//		int i = 10;
//		while (i<10) {
//			System.out.print(i+ " ");
//			i++;
//		}
//		
//		int j = 10;
//		do {
//			System.out.print(j+ " ");
//			j++;
//		}
//		while (j<10);
		// 조건이 어떻든 한 번은 무조건 실행 시킴
		
//		Scanner scanner = new Scanner(System.in);
//		
//		while(true) {
//			System.out.println("숫자를 입력하세요. 0을 입력하면 종료");
//			int number = scanner.nextInt();
//			
//			if( number ==0 ) break;
//		}
		// 메소드 선언
//		hello();
//		
//		int a = number();
//		
//		System.out.println(a);
		
		// 기본실습
//		System.out.println("이름을 입력하세요");
//		Scanner scanner = new Scanner(System.in);
//		String name = scanner.next();
//		
//		System.out.println("나이를 입력하세요");
//		int age = scanner.nextInt();
//		
//		System.out.println("안녕하세요! 코딩온님(99세)");
		
		// 실습1
		/*System.out.println("나이를 입력하세요.");
		Scanner scanner = new Scanner(System.in);
		int age = scanner.nextInt();
		
		if (age>=20) {
			System.out.print("성인");
		}
		else if (age>=17 && age<=19) {
			System.out.print("고등학생");
		}
		else if (age>=14 && age<=16) {
			System.out.print("중학생");
		}
		else if (age>=8 && age<=13) {
			System.out.print("초등학생");
		}
		else if (age<=7) {
			System.out.print("유아");
		}*/
		
		// 실습2
		/*System.out.println("이름을 입력하세요.");
		Scanner scanner = new Scanner(System.in);
		String name = scanner.next();
		
		switch(name) {
		case "홍길동":
			System.out.println("남자");
			break;
		case "성춘향":
			System.out.println("여자");
			break;
		default:
			System.out.print("모르겠어요.");
		}*/
		
		// 배열
//		int[] intArray = new int[2];
//		
//		intArray[0] = 1;
//		intArray[1] = 2;
//		
//		int[] intArray2 = {1, 2};
//		
//		for(int i = 0; i<intArray2.length; i++) {
//			if(i == 0) System.out.print("[");
//			
//			System.out.print(intArray2[i]);
//			
//			if(i== intArray2.length-1) System.out.println("]");
//			else System.out.print(", ");
//		}
//		for ( int value: intArray2 ) {
//			System.out.print(value);
//		}
//		
//		System.out.println(Arrays.toString(intArray));
		
		// 배열에서 for문을 편리하게 작성
		//for-each문
		
		// ArrayList
		// 표준 배열보다 조금 느릴 수 있지만, 배열에서 많은 조작이 필요할 때 유용하게 사용되는 클래스
		// 크기를 미리 정하지 않아도 되는 배열
		
		ArrayList<Integer> arrayList1 = new ArrayList<>();
		ArrayList<Integer> arrayList2 = new ArrayList<>();
		for( int i=0; i<10; i++ ) {
			arrayList2.add(i);
		}
		//ArrayList<Dobule> arrayList2 = new ArrayList<>();
		//ArrayList<String> arrayList3 = new ArrayList<>();
		
		arrayList1.add(1);
		// [ 1 ]
		arrayList1.add(2);
		// [ 1, 2 ]
		
		arrayList1.add(0, 3);
		// [ 3, 1, 2 ] 
		
		arrayList1.addAll (arrayList2);
		// [3,1,2,0,1,2..........,9]
		
		arrayList1.remove(2);
		// [3,1,0,1,2,....,9]
		
		arrayList1.clear();
		// [] -> 처음에는 빈 배열
		
		for (int i=0;i<arrayList1.size();i++) {
			System.out.print(arrayList1.get(i) + " "); // 해당 인덱스에 해당하는 원소를 가져옴
		}
		
//		for(int value : arrayList1) {
//			System.out.print(value+ " ");
//		}
		
		System.out.println("\n"+arrayList1.size());
		System.out.println(arrayList1.indexOf(2));
		
	}

}
