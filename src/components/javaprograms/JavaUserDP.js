import React from 'react'
import "../css/javaprgm.css";
import Copybtnjava from './Copybtnjava';

export default function JavaUserDP() {
  const text =(`
package data;

public class Demo {
    public void show() {
        System.out.println("Hi Everyone");
    }
    public void view() {
        System.out.println("Hello");
    }
}
  `);
  const text1=(`
import data.Demo;
public class der {
    public static void main(String args[]) {
        Demo d=new Demo();
        d.show();
        d.view();
        
    }
}
  `);
    return (
        <div>

          <div className="java-rightcon-1">
            <div className="java-rc-1headingcon">
              <p>Java Program to create user defined package called data</p>
            </div>
            <div className="java-right-prgmcon">
              <Copybtnjava text={text}/>
              <pre>
                <code className='font-monospace'>
                  {`
/*save the code file as Demo.java*/                  
package data;

public class Demo {
    public void show() {
        System.out.println("Hi Everyone");
    }
    public void view() {
        System.out.println("Hello");
    }
}
                `}
                </code>
              </pre>
            </div>

           <div className='udpstyleing-con'>&nbsp;</div>

            <div className="java-right-prgmcon">
              <Copybtnjava text={text1}/>
              <pre>
                <code className='font-monospace'>
                  {`
/*save the code file as der.jav*/
import data.Demo;

public class der {
    public static void main(String args[]) {
        Demo d=new Demo();
        d.show();
        d.view();
        
    }
}
                `}
                </code>
              </pre>
            </div>
            <div className='udpstyleing-con'><p className='udpstyleing' >
            1.Save the 2 code files with given names <br/>
            2.Go to cmd and run " javac -d  . Demo.java "<br/>
            3.The 2nd step command create the New folder with data<br/>
            4.Then run " javac der.java "<br/>
            5.Again run " java der " </p></div>
    


            <div className="java-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="java-right-outputcon">
              <pre className='font-monospace'>
                {`
Hi Everyone
Hello
                    `}
              </pre>
            </div>
          </div>
        </div>
      );
}
