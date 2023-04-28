import React, { useState, useEffect } from "react";
import './project.css';
import Logo from './image/logo.jpg';

const Website = () => {
    const [total, settotal] = useState(0);

    const menu = () => {
        const menu = document.querySelector('.menu')
        const menuList = document.querySelector('nav ul')
        menu.addEventListener('click', () => {
            menuList.classList.toggle('showmenu')
        })
    }
    const html = () => {
        console.log('html');
        document.getElementById("no1").innerHTML = "HTML : RS : 5000";
        var x = parseInt(document.getElementById("html").value);
        if (total.value === 0) {
            document.getElementById("total").value = x;
        } else {
            document.getElementById("total").value = settotal(total + x);
        }
        document.getElementById('html').onClick = null;
    }
    const css = () => {
        document.getElementById('css').innerHTML = "CSS successfully added !!";
        document.getElementById("no2").innerHTML = "CSS &nbsp&nbsp: RS : 5000";
        var c = parseInt(document.getElementById("css1").value);
        if (total.value === 0) {
            document.getElementById("total").value = c;
        } else {
            document.getElementById("total").value = settotal(total + c);
        }
        document.getElementById('css').onClick = null;
    }
    const js = () => {
        document.getElementById('js').innerHTML = "Java successfully added !!";
        document.getElementById("no3").innerHTML = "&nbsp&nbsp  JS &nbsp&nbsp:  RS : 10000";
        var y = parseInt(document.getElementById("js1").value);
        if (total.value === 0) {
            document.getElementById("total").value = y;
        } else {
            document.getElementById("total").value = settotal(total + y);
        }
        document.getElementById('js').onClick = null;
    }
    const sql = () => {
        document.getElementById('sql1').innerHTML = "SQL successfully added !!";
        document.getElementById("no5").innerHTML = "SQL &nbsp&nbsp: RS : 10000";
        var sql1 = parseInt(document.getElementById("sql").value);
        if (total.value === 0) {
            document.getElementById("total").value = sql1;
        } else {
            document.getElementById("total").value = settotal(total + sql1);
        }
        document.getElementById('sql').onClick = null;
    }
    const python = () => {
        document.getElementById('python1').innerHTML = "Python successfully added !!";
        document.getElementById("no4").innerHTML = "PYTHON &nbsp&nbsp: 10000";
        var a1 = parseInt(document.getElementById("python").value);
        if (total.value === 0) {
            document.getElementById("total").value = a1;
        } else {
            document.getElementById("total").value = settotal(total + a1);
        }
        document.getElementById('python').onClick = null;
    }
    const cl = () => {
        alert("After Clear the coures Please Refresh The page then continue.")
        document.getElementById("ftotal").innerHTML = 0;

        document.getElementById("no1").innerHTML = "";
        document.getElementById("no2").innerHTML = "";
        document.getElementById("no3").innerHTML = "";
        document.getElementById("no4").innerHTML = "";
        document.getElementById("no5").innerHTML = "";
    }
    const fulltotal = () => {
        var f = total;
        document.getElementById("ftotal").innerHTML = f;
        console.log(f);
    }

    return (
        <>
            <div className="marq">
                <marquee>Think innovatively and code uniquely <span className="marquee">30 %</span> Special Offer for You !!</marquee>
            </div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul >
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="menu" onClick={menu}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
            </nav>

            <div className="learncode">
                <h1 className="a"><i>Learn to Code</i> </h1>
                <p className="b">With the world's Largest Web developer site</p>
                <input type="search" placeholder="Search" />
                <p className="c">Not Sure Where To Begin?</p>
            </div>
            <div className="course1">
                <div className="c1a">
                    <h1 className="ca">HTML</h1>
                    <p className="cb">The language for building web pages</p>.
                    <div className="btn"></div>
                    <button className="btn1" id="html" value="5000" onClick={html} name="html">HTML</button>
                    <button className="btn2" onClick={html}>RS : 5000</button>
                </div>
                <div className="c1b">
                    <div className="c1ba">
                        <h1 className="lag">HTML :</h1>
                        <div className="c1bb">
                            <h1>Price details :</h1>
                            <p id="no1"></p>
                            <p id="no2"></p>
                            <p id="no3"></p>
                            <p id="no4"></p>
                            <p id="no5"></p>
                            <p type="number" name="total" id="total" value="0"></p>
                            <p id="totalprice">Total Price : <span id="ftotal"></span></p>
                            <input type="button" onClick={cl} value="Clear" id="clear" />
                            <input type="button" onClick={fulltotal} value="Total Price" id="full" />
                        </div>
                        <button className="btnc1ba">Try It YourSelf</button>
                    </div>
                </div>
            </div>
            <div className="course1">
                <div className="c1a" id="color">
                    <h1 className="ca">CSS</h1>
                    <p className="cb">The language for building web pages</p>.
                    <div className="btn"></div>
                    <button className="btn1" id="css1" value="5000" onClick={css} name="css">CSS</button>
                    <button className="btn2" onClick={css}>RS : 5000</button>
                </div>
                <div className="c1b" id="color">
                    <div className="c1ba">
                        <h1 className="lag">CSS :</h1>
                        <div className="c1bb">
                            <h1 id="css"></h1>
                        </div>
                        <button className="btnc1ba">Try It YourSelf</button>
                    </div>
                </div>
            </div>
            <div className="course1">
                <div className="c1a" id="color2">
                    <h1 className="ca">JAVA</h1>
                    <p className="cb">The language for building web pages</p>.
                    <div className="btn"></div>
                    <button className="btn1" id="js1" value="10000" onClick={js} name="javascript">JAVA</button>
                    <button className="btn2" onClick={js}>RS : 10000</button>
                </div>
                <div className="c1b" id="color2">
                    <div className="c1ba">
                        <h1 className="lag">JAVA :</h1>
                        <div className="c1bb"><h1 id="js"></h1></div>
                        <button className="btnc1ba">Try It YourSelf</button>
                    </div>
                </div>
            </div>
            <div className="course1">
                <div className="c1a" id="color3">
                    <h1 className="ca">SQL</h1>
                    <p className="cb">The language for building web pages</p>.
                    <div className="btn"></div>
                    <button className="btn1" id="sql" value="10000" onClick={sql} name="sql">SQL</button>
                    <button className="btn2" onClick={sql}>RS : 10000</button>
                </div>
                <div className="c1b" id="color3">
                    <div className="c1ba">
                        <h1 className="lag">SQL :</h1>
                        <div className="c1bb"><h1 id="sql1"></h1></div>
                        <button className="btnc1ba">Try It YourSelf</button>
                    </div>
                </div>
            </div>
            <div className="course1">
                <div className="c1a" id="color4">
                    <h1 className="ca">Python</h1>
                    <p className="cb">The language for building web pages</p>.
                    <div className="btn"></div>
                    <button className="btn1" id="python" value="10000" onClick={python} name="python">PYTHON</button>
                    <button className="btn2" onClick={python}>RS : 10000</button>
                </div>
                <div className="c1b" id="color4">
                    <div className="c1ba">
                        <h1 className="lag">PYTHON :</h1>
                        <div className="c1bb"><h1 id="python1"></h1></div>
                        <button className="btnc1ba">Try It YourSelf</button>
                    </div>
                </div>
            </div>

            <div className="flex-container">
                <div className="flex-item">
                    <h1 className="twoa">JavaScript</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add JavaScript</button>
                </div>
                <div className="flex-item">
                    <h1 className="twoa">PHP</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add PHP</button>
                </div>
                <div className="flex-item">
                    <h1 className="twoa">SVG</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add SVG</button>
                </div>
                <div className="flex-item">
                    <h1 className="twoa">C++</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add C++</button>
                </div>
                <div className="flex-item">
                    <h1 className="twoa">Bootstrap</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add Bootstrap</button>
                </div>
                <div className="flex-item">
                    <h1 className="twoa">MongoDB</h1>
                    <p className="twob">programming language</p>
                    <button className="twoc">Add MongoDB</button>
                </div>
                <div className="flex-item2"></div>
                <div className="flex-item2"></div>
                <div className="flex-item2"></div>
            </div>

            <footer>
                <h2 className="f1">Sabari Nayagam</h2>
                <p className="f2">9952375090</p>
                <p className="f3">sabarinayagam@gmail.com</p>
            </footer>
        </>
    )
}
export default Website;