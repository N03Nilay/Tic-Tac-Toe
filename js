 let c = 1, x = 0, o = 0,m=0;
        function tapped(control) {
            if (c <= 9) {
                if (c % 2 == 0) {
                    document.getElementById(control.id).innerHTML = "O";
                }
                else {
                    document.getElementById(control.id).innerHTML = "X";
                }
                c++;
                checkWin();
            }
            else {
                alert("match draw");
            }
        }
        function checkWin() {
            if (getdata('div1') != "" && getdata('div2') != "" && getdata('div3') != "" && getdata('div1') == getdata('div2') && getdata('div2') == getdata('div3')) {
                if (getdata('div3') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div3') != "" && getdata('div6') != "" && getdata('div9') != "" && getdata('div3') == getdata('div6') && getdata('div6') == getdata('div9')) {
                if (getdata('div9') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div7') != "" && getdata('div8') != "" && getdata('div9') != "" && getdata('div7') == getdata('div8') && getdata('div8') == getdata('div9')) {
                if (getdata('div9') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div1') != "" && getdata('div4') != "" && getdata('div7') != "" && getdata('div1') == getdata('div4') && getdata('div4') == getdata('div7')) {
                if (getdata('div7') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div1') != "" && getdata('div5') != "" && getdata('div9') != "" && getdata('div1') == getdata('div5') && getdata('div5') == getdata('div9')) {
                if (getdata('div9') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div3') != "" && getdata('div5') != "" && getdata('div7') != "" && getdata('div3') == getdata('div5') && getdata('div5') == getdata('div7')) {
                if (getdata('div7') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }

            else if (getdata('div2') != "" && getdata('div5') != "" && getdata('div8') != "" && getdata('div2') == getdata('div5') && getdata('div5') == getdata('div8')) {
                if (getdata('div8') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            else if (getdata('div4') != "" && getdata('div5') != "" && getdata('div6') != "" && getdata('div4') == getdata('div5') && getdata('div5') == getdata('div6')) {
                if (getdata('div6') == 'X') {
                    alert("X wins"); x++;
                }
                else {
                    alert("O wins"); o++;
                }
                m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }

            else if (getdata('div1') != "" && getdata('div2') != "" && getdata('div3') != "" && getdata('div4') != "" && getdata('div5') != "" && getdata('div6') != "" && getdata('div7') != "" && getdata('div8') != "" && getdata('div9') != "")
            {
                alert("match draw");m++;
                for(var i=1;i<=9;i++)
                {
                    document.getElementById('div'+i).innerHTML = "";
                }
                c=1;
            }
            document.getElementById('xwins').innerHTML = x;
            document.getElementById('owins').innerHTML = o;
            document.getElementById('matches').innerHTML = m;
        } // function ends
        function getdata(div) {
            return document.getElementById(div).innerHTML;
        }
