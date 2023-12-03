# Roboger
#### By _**Mark Courtney**_
#### _This is my first from scratch interactive html page that gets input from the user to output a specific outcome._
https://genecourtney7.github.io/3rd.code.review/
## Technologies used
* _HTML_
* _CSS_
* _JavaScript_
* _developer.mozilla.org_
* _learnhowtocode.com lessons_
* _google.com_
* _vs code terminal_
## Description
* Gather a number input for Mr.Roboger to output what Mr. Roboger will say.
## Setup/Installation Requirements
* Clone this repository to your desktop.
* open the html file and open with compatible browser. 
* Input number in input box.
* Click the generate button to output what Mr. Roboger says.
## Tests
* Describe: generateList ()

    Test: "returns an array of numbers from 0 to the user\'s inputted number."

    Code: generateList([0,0]);

    Expected Output:[generateList(0).toEqual([0])]

* Describe: replaceOnes ()
    
    Test: "replaces numbers that contain a '1' with 'Beep!'"

    Code: replaceOnes([0,1]);

    Expected Output: [0,"beep!"]

* Describe: replaceTwos()

    Test: "It should replace all numbers that contain "2" with "boop!""

    Code: replaceTwos([0,1,2]);

    Expected Output: [0,1,"boop!"]

* Describe: replaceThrees()

    Test: "It should replace all numbers that contain "3" with "Won't you be my neighbor?""

    Code: replaceThrees([0,1,2,3,13,23]);

    Expected Output: [0,1,2,"Won't you be my neighbor?"]
    
## Known Bugs
* No known Bugs
## license  
MIT 

Copyright (c) _11-16-21_ Author: _Mark Courtney_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.