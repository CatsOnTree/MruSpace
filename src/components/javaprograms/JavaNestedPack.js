import React from 'react'
import "../css/javaprgm.css";
import Copybtnjava from './Copybtnjava';

export default function JavaNestedPack() {
  const text =(`
package aiml;

public class abc 
{
    public int no = 22, ml = 85, m2 = 75, m3 = 70, total, avg;
    public void disp() {
        System.out.println("the student number is:" + no);
        System.out.println("the student marks are:" + ml + " " + m2 + " " + m2 + " " + m3);
    }
}
  `);
  const text1=(`
package aiml1;
import aiml.abc;

public class xyz extends abc {
    public void data() {
        disp();
    }

    public void add() {
        total = ml + m2 + m3;
        System.out.println("the total marks are :" + total);
    }

public void average()
{
    avg=(ml+m2+m3)/3;
    System.out.println("the average marks are :"+avg);
}
}
  `);
  const text2=(`
import aiml.abc;
import aiml1.xyz;
public class pack {
    public static void main(String artgs[]) {
        xyz obj1=new xyz();
        obj1.data();
        obj1.add();
        obj1.average();
        
    }
}
  `);
    return (
        <div>

          <div className="java-rightcon-1">
            <div className="java-rc-1headingcon">
              <p>Java Program to implementation nested packages</p>
            </div>
            <div className="java-right-prgmcon">
              <Copybtnjava text={text}/>
              <pre>
                <code className='font-monospace'>
                  {`
/* save the code with abc.java*/
package aiml;

public class abc 
{
    public int no = 22, ml = 85, m2 = 75, m3 = 70, total, avg;
    public void disp() {
        System.out.println("the student number is:" + no);
        System.out.println("the student marks are:" + ml + " " + m2 + " " + m2 + " " + m3);
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
/* save the code with xyz.java*/
package aiml1;
import aiml.abc;

public class xyz extends abc {
    public void data() {
        disp();
    }

    public void add() {
        total = ml + m2 + m3;
        System.out.println("the total marks are :" + total);
    }

public void average()
{
    avg=(ml+m2+m3)/3;
    System.out.println("the average marks are :"+avg);
}
}
                `}
                </code>
              </pre>
            </div>
            <div className='udpstyleing-con'>&nbsp;</div>
    
            <div className="java-right-prgmcon">
              <Copybtnjava text={text2}/>
              <pre>
                <code className='font-monospace'>
                  {`
/* save the code with pack.java*/
import aiml.abc;
import aiml1.xyz;
public class pack {
    public static void main(String artgs[]) {
        xyz obj1=new xyz();
        obj1.data();
        obj1.add();
        obj1.average();
        
    }
}

                `}
                </code>
              </pre>
            </div>

            <div className="udpstyleing-con"><p className='udpstyleing'>
                Steps for execution<br/>
                1. Save the 3 code files with given names<br/>
                2. Then go to cmd and run below commands<br/>
                3. " javac -d . abc.java "<br/>
                4. " javac -d . xyz.java "<br/>
                5. " javac pack.java "<br/>
                6. " java pack "
                </p></div>

            <div className="java-rc-1headingcon">
              <p>Output</p>
            </div>
            <div className="java-right-outputcon">
              <pre className='font-monospace'>
                {`
the student number is:22
the student marks are:85 75 75 70
the total marks are :230
the average marks are :76

                    `}
              </pre>
            </div>
          </div>
        </div>
      );
}
