import React from 'react'
import JavaComponent from './JavaComponent'

export default function JavaContent({javaactiveComponent}) {
    const JavaContentObj={
abstactclass:{
code: `
//Java file name should be AbstractDemo.java
import java.util.*;

abstract class shape {
    int x, y;
    abstract void area(double x,double y);
}

class Rectangle extends shape {
    void area(double x, double y) {
        System.out.println("Area of rectangle is :" + (x*y));
    }
}

class Circle extends shape {
    void area(double x,double y)
    {
        System.out.println("Area of circle is :" +(3.14*x*x));
    }
}

class Triangle extends shape {
    void area(double x, double y) {
        System.out.println("Area of triangle is :" + (0.5 * x * y));
    }
}

public class AbstractDemo
{
    public static void main(String[] args)
    {
        Rectangle r=new Rectangle();
        r.area(2,5);
        Circle c=new Circle();
        c.area(5,5);
        Triangle t=new Triangle();
        t.area(2,5);
    }
}
`,
output: `
Area of rectangle is :10.0
Area of circle is :78.5
Area of triangle is :5.0`,
heading:`Java program to create an abstract class named shape that contains two integers and an empty method named print Area(). Provide three classes named Rectangle, Triangle and Circle such that classes contain only the method print Area() that prints the area of the given shape.`
},

aoabstract:{
code: `
//Java file name should be abstarction.java
abstract class arithmetic_operation {
abstract void printInfo();
}

class add extends arithmetic_operation {
void printInfo() {
    {
        int a = 8;
        int b = 4;
        System.out.println(a+b);
    }
}
}

class sub extends arithmetic_operation {
void printInfo()
{
    int c = 12;
    int d = 2;
    System.out.println(c-d);
}
}

class abstraction {
public static void main(String args[]) {
    arithmetic_operation al = new add();
    al.printInfo();
    arithmetic_operation bl = new sub();
    bl.printInfo();
}
}`,
output:`10
12` ,
heading:`Java program to display method print the addition and subtraction by using abstract`
},

arithmetic:{
code:`
public class arithmetic{
    public static void main(String arg[]){
    int a = 20;
    int b = 30;
    int sum = a+b;
    int sub = a-b;
    int mul = a*b;
    int div = a/b;
    int mod = a%b;
    System.out.println("Sum :"+sum);
    System.out.println("Subtraction :"+sub);
    System.out.println("Multiplication :"+mul);
    System.out.println("Divide :"+div);
    System.out.println("Modulus :"+mod);
    }
    }` ,
output: `
Sum :50
Subtraction :-10
Multiplication :600
Divide :0
Modulus :20`,
heading:`Java Program to perform the arithemetic functions`
},

defaultmethods:{
code:`
//Java file name should be Main.java
interface Polygon
{
    void getArea();
    default void getSides()
    {
        System.out.println("I can get sides of a polygon");
    }
}
class Rectangle implements Polygon{
    public void getArea() {
        int length = 6;
        int breadth = 5;
        int area = length *breadth;
        System.out.println("the area of the rectangle is "+area);
        
    }
    public void getSides() {
        System.out.println("I have 4 sides.");
    }
}
class Square implements Polygon{
    public void getArea() {
        int length = 5;
        int area = length * length;
        System.out.println("The area of the square is "+area);
        
    }
}

public class Main {
    public static void main(String args[]) {
        Rectangle r1=new Rectangle();
        r1.getArea();
        r1.getSides();
        Square s1=new Square();
        s1.getArea();
        s1.getSides();
        
    }
}` ,
output: `the area of the rectangle is 30
I have 4 sides.
The area of the square is 25
I can get sides of a polygon`,
heading:`Java Program to print default methods in java interface`
},

excepttest:{
code: `
class ExceptionTest {
    public static void main(String[] args) {
            int a = 40, b = 4, c = 4;
            int result;
            try {
                result = a / (b - c);
            } catch (ArithmeticException ae) {
                System.out.println("Cannot divided by zero." + ae);
            } finally {
                System.out.println("finally block");
            }
    
            result = a / (b + c);
            System.out.println("Result: " + result);
        }
    }`,
output: `Cannot divided by zero.java.lang.ArithmeticException: / by zero
finally block
Result: 5`,
heading:`Write a java program to implement exception handling with finally block`
},

fabonacci:{
code:`
import java.util.Scanner;

public class fibo {
    public static void main(String args[]) {
        System.out.println("Enter Range Of Series : ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int f0,f1,f2=0;
        f0=0;
        f1=1;
        f2=f0+f1;
        System.out.println("Fibonacci Series : ");
        while (n>=f2) {
            System.out.print(f2+" ");
            f0=f1;
            f1=f2;
            f2=f0+f1;;
        }
    }
}` ,
output: `Enter Range Of Series : 
10
Fibonacci Series : 
1 2 3 5 8 `,
heading:`Java Program to display fabonacci series of numbers`
}
,
inheritance:{
code:`
// The java file name should be HybridInheritance.java
class A {
    int a=1;
}

class B extends A {
    int b=2;
}

class C extends B {
    int c=3,sum=a+b+c;
    public void display(){
        System.out.println("The value of a is "+a);
        System.out.println("The value of b is "+b);
        System.out.println("The value of c is "+c);
        System.out.println("The sum of a,b and c is "+sum);
    }
}

class D extends B {
    int d=4,sum=a+b+d;
    public void display(){
        System.out.println("The value of a is "+a);
        System.out.println("The value of b is "+b);
        System.out.println("The value of d is "+d);
        System.out.println("The sum of a,b and d is "+sum);
    }
}

public class HybridInheritance {
    public static void main(String[] args) {
        C c1=new C();
        c1.display();
        System.out.println();
        D d1 = new D();
        d1.display();
    }
}` ,
output: `The value of a is 1
The value of b is 2
The value of c is 3
The sum of a,b and c is 6

The value of a is 1
The value of b is 2
The value of d is 4
The sum of a,b and d is 7`,
heading:`Java Program to implement hybrid Inheritance using multiple and hierarchical inheritance`
}
,
finalclass:{
code: `
//Java file name should be FinalUse.java
import java.util.Scanner;

class Figure 
{
    final int length = 5;
    final int bredth = 4;
    final void area()
    {
    int a = length * bredth;
    System.out.println("Area:"+a);
    }
}

class Rectangle extends Figure 
{
    final void rect() 
    {
        System.out.println("This is rectangle");
    }
}

final public class FinalUse extends Rectangle 
{
    public static void main(String[] args)
    {
        FinalUse obj = new FinalUse();
        obj.rect();
        obj.area();
    }
}`,
output:`
This is rectangle
Area:20` ,
heading:`Java program to implement Final class in java`
},

innerclass:{
code: `
//Java file name should be Innerclassdemo.java
class Outer{
    public void display(int x, int y) {
        class Inner{
            public void add(int x,int y) {
                int z = x+y;
                System.out.println("Addition = "+z);

            }
        }
        Inner in=new Inner();
        in.add(x,y);
    }
}
public class Innerclassdemo {
    public static void main(String args[]) {
        Outer ob = new Outer();
        ob.display(23,56);        
    }
}`,
output: `Addition = 79`,
heading:`Java Program to demostrate inner class`
},

interface:{
code: `
//Java file name should be multipleinheritance2.java
interface Aiml{
    void read();
}
interface Datascience{
    void write();
}
class CSE implements Aiml,Datascience{
    public void read() {
        System.out.println("We are Belongs to AIML Students.");
    }
    public void write() {
        System.out.println("We are Belongs to DataScience Students.");
    }
}
public class multipleinheritance2 {
    public static void main(String args[]) {
        CSE s =new CSE();
        s.read();
        s.write();
    }
}`,
output:`We are Belongs to AIML Students.
We are Belongs to DataScience Students.` ,
heading:`Java Program to demonstrate interface concepts.(Implementation of multiple inheritance using interface)`
},


methodol:{
code: `
//Java file should be MethodOverloading.java
public class MethodOverloading {
    static int sum(int a, int b) {
        int s = 0;
        s = a + b;
        return s;
    }

    static int sum(int a, int b, int c)
    {
        int s = 0;
        s = a + b + c;
        return s;
    }

    static int sum(int a, int b, int c, int d) {
        int s = 0;
        s = a + b + c + d;
        return s;
    }

    public static void main(String[] args) {
        int result = 0;
        result = sum(10, 20);
        System.out.println("Sum: " + result);
        result = sum(10, 20, 30);
        System.out.println("Sum: " + result);
        result = sum(10, 20, 30, 40);
        System.out.println("Sum: " + result);
    }
}`,
output:`Sum: 30
Sum: 60
Sum: 100` ,
heading:`Java program to implement Method Overloading.`
},

methodor:{
code: `
//java file should be Student.java
class Mruh {
    public void move() {
        System.out.println("We are belongs to MRUH Students");
    }
}

class Soe extends Mruh {
    public void move() {
        System.out.println("We are belongs to School of Engg. Students");
    }
}

class Aiml extends Soe {
        public void move() {
            System.out.println("We are belongs to AIML Students");

        }
    }

public class Student{
    public static void main(String args[]){
        Mruh a = new Mruh();
        Mruh b = new Soe();
        Mruh c = new Aiml();
        a.move();
        b.move();
        c.move();
    }
}`,
output:`
We are belongs to MRUH Students
We are belongs to School of Engg. Students
We are belongs to AIML Students` ,
heading:`Java program to implement Method Overriding.`
},

multilevelinher:{
code:`
//Java file name should be Tester.java
class Shape{
    public void display() {
        System.out.println("Inside display");
        
    }
}
class Rectangle extends Shape{
    public void area(){
        System.out.println("Inside area");
    }
}
class Cube extends Rectangle{
    public void volume() {
        System.out.println("Inside volume");
        
    }
}
public class Tester {
    public static void main(String args[]) {
        Cube cube=new Cube();
        cube.display();
        cube.area();
        
    }
}` ,
output:`Inside display
Inside area` ,
heading:`Java Program for multilevel Inheritance`
},

palindrome:{
code: `
import java.util.Scanner;
public class palin {
    public static void main(String args[]) {
        System.out.println("Enter the String:");
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int i,j,length,count=0;
        length=str.length();
        for(i=0,j=length-1;i<length/2;i++,j--){
            if (str.charAt(i)!=str.charAt(j)) {
                count++;
                break;
            }
        }
        if (count>0) {
            System.out.println("The Entered string "+str+" is not palindrome");
        } else {
            System.out.println("The Entered string "+str+" is palindrome");
            
        }
    }
}`,
output:`Enter the String:
madam
The Entered string madam is palindrome` ,
heading:`Java Program to Find whether the given string is palindrome or not`
},

stringtoken:{
code: `
//java file should be StringTokenizerprgm.java
import java.util.StringTokenizer;
import java.io.*;
public class StringTokenizerprgm{
    public static void main(String args[])throws IOException
    {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter Values string with $ delimiter");
        String in = br.readLine();
        int sum=0;
        StringTokenizer st= new StringTokenizer(in,"$");
        while(st.hasMoreTokens()){
            int key = Integer.parseInt(st.nextToken());
            sum +=key;
            System.out.println(key);
        }
        System.out.println("sum is:"+sum);
    }
}`,
output: `Enter Values string with $ delimiter
10$20$30
10
20
30
sum is:60 `,
heading:`Java Program to implement String Tokenizer class`
},

superkeyword:{
code:`
//Java file name should be TestSuper2.java
class Animal {
    void eat() {
        System.out.println("Animal eating...");
    }
}

class Dog extends Animal {
    void eat() {
        System.out.println("Dog eating bread...");
    }
    void bark() {
        System.out.println("Dog barking...");
    }
    void work() {
        super.eat();
        bark();
    }
}

class TestSuper2 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.work();
    }
}` ,
output: `Animal eating...
Dog barking...`,
heading:`Java program to implement super keyword in java`
},

throwkey:{
code:`
import java.util.Scanner;

public class DivideExceptionThrows {
    public static void main(String[] args) {
        Scanner inputDevice = new Scanner(System.in);
        System.out.print("Please enter first number(numerator): ");
        int numerator = inputDevice.nextInt();
        System.out.print("Please enter second number(denominator): ");
        int denominator = inputDevice.nextInt();

        try {
            new DivideExceptionThrows().doDivide(numerator, denominator);
        } catch (Exception e) {
            System.out.println("Exception Condition Program is ending ");
        }
    }

    public void doDivide(int a, int b) throws Exception {
        float result = a / b;
        System.out.println("Division result of " + a + "/" + b + "=" + result);
    }
}` ,
output:`Input-1
Please enter first number(numerator): 10
Please enter second number(denominator): 0
Exception Condition Program is ending 

Input-2
Please enter first number(numerator): 12
Please enter second number(denominator): 6
Division result of 12/6=2.0` ,
heading:`Write a Java program that uses throws keyword in method declaration which will instruct the compiler to handle exception using try-catch block.`
},
collectionStack:{
    code: `import java.util.*;
    public class StackDemo {
        static void showpush(Stack st,int a){
            st.push(new Integer(a));
            System.out.println("push("+a+")");
            System.out.println("stack:"+st);
        }
    
        static void showpop(Stack st) {
            System.out.println("Pop =>");
            Integer a = (Integer) st.pop();
            System.out.println(a);
            System.out.println("Stack : "+st);
        }
        public static void main(String[] args) {
            Stack st = new Stack();
            System.out.println("stack : "+st);
            showpush(st,42);
            showpush(st,66);
            showpush(st,99);
            showpop(st);
            showpop(st);
            showpop(st);
            
        }
    }`,
    output:`stack : []
push(42)
stack:[42]push(66)
stack:[42, 66]
push(99)
stack:[42, 66, 99]
Pop =>
99
Stack : [42, 66]
Pop =>
66
Stack : [42]
Pop =>42
Stack : []`,
    heading:`Implement stack program using java collection.`
},

collectionArrayList:{
code:`import java.util.*;
public class Collection {
    public static void main(String[] args) {
        ArrayList list_1 = new ArrayList<>();
        ArrayList<String> list_2 = new ArrayList<String>();
        list_1.add(10);
        list_1.add(20);
        list_2.add("Btech");
        list_2.add("Smart");
        list_2.add("class");
        list_1.addAll(list_2);
        System.out.println("Elements of list_1 :"+list_1);
        System.out.println("search for Btech :"+list_1.contains("Btech"));
        System.out.println("serach for list_2 in list_1 :"+list_1.contains(list_2));
        System.out.println("check whether list1 and list2 are equal : "+list_1.equals(list_2));
        System.out.println("check the list_1 empty : "+list_1.isEmpty());
        System.out.println("size of list_1 :"+list_1.size());
        System.out.println("Hashcode of list_1 :"+list_1.hashCode());
        list_1.remove(0);
        System.out.println(list_1);
        list_1.retainAll(list_2);
        System.out.println(list_1);
        list_1.removeAll(list_2);
        System.out.println(list_1);
        list_2.clear();
        System.out.println(list_2);
    }
}`,
output:`Elements of list_1 :[10, 20, Btech, Smart, class]
search for Btech :true
serach for list_2 in list_1 :false
check whether list1 and list2 are equal : false
check the list_1 empty : falsesize of list_1 :5
Hashcode of list_1 :181129180
[20, Btech, Smart, class]
[Btech, Smart, class]
[]
[]`,
heading:`Implement ArrayList program using Collection Class`
},
ByteStreamDemo:{
    code:`import java.io.*;
    import java.util.*;
    public class ByteStreamDemo {
        public static void main(String[] args) throws Exception{
            String str,str1;
            Scanner in = new Scanner(System.in);
            System.out.println("Enter the filename to read the data :");
            str = in.next();
            System.out.println("Enter the filename to write the data :");
            str1 = in.next();
            FileInputStream fis = new FileInputStream(str);
            FileOutputStream fos = new FileOutputStream(str1);
            try{
                int x;
                while ((x=fis.read())!=-1)
                    fos.write(x);
                System.out.println("Data written into file...!");
                
            }
            catch(Exception e){
                System.out.println(e);
            }
            finally{
                fis.close();
                fos.close();
            }
    
        }
    }`,
    output:`Enter the filename to read the data
ByteStreamDemo.java
Enter the filename to write the data
bytestream.txt
Data is written into file`,
    heading:`Write a program using byteStream`
},
FileDemo:{
    code:`import java.util.*;
    import java.io.*;
    public class FileDemo {
        public static void main(String[] args) {
            String s =args[0];
            File f=new File(s);
            if(f.exists()){
                System.out.println("File Exists ");
                System.out.println("File name: "+f.getName());
                System.out.println("path : "+f.getPath());
                System.out.println("Absolute path : "+f.getAbsolutePath());
                System.out.println("File is readable : "+f.canRead());
                System.out.println("File is writeable : "+f.canWrite());
                System.out.println("File length :"+f.length());
            }
            else{
                System.out.println("file doesnot exsist");
            }
        }
    }`,
    output:`File Exists
Filename:filedemo.txt
path:filedemo.txt
Absolute path:D:Apha49filedemo.txt
File is readable:true
File is writeable:true
File length:36`,
    heading:`write a program using File class`
},
CharacterStreamDemo:{
    code:`import java.io.*;
    import java.util.*;
    public class CharacterStreamDemo {
        public static void main(String[] args) {
            Scanner in = new Scanner(System.in);
            String strread,strwrite;
            System.out.println("Enter the filename to read :");
            strread = in.next();
            System.out.println("Enter the filename to write :");
            strwrite = in.next();
            FileReader fr = new FileReader(strread);
            FileWriter fw = new FileWriter(strwrite);
            try{
                int x;
                while ((x=fr.read()!=-1))
                    fw.write(x);
                System.out.println("data written into file..!!");
            }                
            catch(Exception e){
                System.out.println(e);
            }
            finally{
                fr.close();
                fw.close();
            }
        }
    }`,
    output:`Enter the filename to read the data
characterStreamDemo.java
Enter the filename to write the data
CDS.txt
Data is written into file`,
    heading:`Write a program using CharacterStream Class`
}



    }
  return (
    <div>
    {javaactiveComponent === "ComponentA" && <JavaComponent propsContent={JavaContentObj.palindrome}/>}
    {javaactiveComponent === "ComponentB" && <JavaComponent propsContent={JavaContentObj.fabonacci}/>}
    {javaactiveComponent === "ComponentC" && <JavaComponent propsContent={JavaContentObj.arithmetic}/>}
    {javaactiveComponent === "ComponentCA" && <JavaComponent propsContent={JavaContentObj.stringtoken}/>}
    {javaactiveComponent === "ComponentD" && <JavaComponent propsContent={JavaContentObj.inheritance}/>}
    {javaactiveComponent === "ComponentE" && <JavaComponent propsContent={JavaContentObj.superkeyword}/>}
    {javaactiveComponent === "ComponentF" && <JavaComponent propsContent={JavaContentObj.finalclass}/>}
    {javaactiveComponent === "ComponentG" && <JavaComponent propsContent={JavaContentObj.methodol}/>}
    {javaactiveComponent === "ComponentH" && <JavaComponent propsContent={JavaContentObj.methodor}/>}
    {javaactiveComponent === "ComponentI" && <JavaComponent propsContent={JavaContentObj.abstactclass}/>}
    {javaactiveComponent === "ComponentJ" && <JavaComponent propsContent={JavaContentObj.aoabstract}/>}
    {javaactiveComponent === "ComponentK" && <JavaComponent propsContent={JavaContentObj.interface}/>}
    {javaactiveComponent === "ComponentL" && <JavaComponent propsContent={JavaContentObj.innerclass}/>}
    {javaactiveComponent === "ComponentM" && <JavaComponent propsContent={JavaContentObj.multilevelinher}/>}
    {javaactiveComponent === "ComponentN" && <JavaComponent propsContent={JavaContentObj.defaultmethods}/>}
    {javaactiveComponent === "ComponentQ" && <JavaComponent propsContent={JavaContentObj.excepttest}/>}
    {javaactiveComponent === "ComponentR" && <JavaComponent propsContent={JavaContentObj.throwkey}/>}
    {javaactiveComponent === "ComponentS" && <JavaComponent propsContent={JavaContentObj.collectionStack}/>}
    {javaactiveComponent === "ComponentT" && <JavaComponent propsContent={JavaContentObj.collectionArrayList}/>}
    {javaactiveComponent === "ComponentU" && <JavaComponent propsContent={JavaContentObj.ByteStreamDemo}/>}
    {javaactiveComponent === "ComponentV" && <JavaComponent propsContent={JavaContentObj.FileDemo}/>}
    {javaactiveComponent === "ComponentW" && <JavaComponent propsContent={JavaContentObj.CharacterStreamDemo}/>}
    </div>
  )
}