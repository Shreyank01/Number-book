//number to local storage

function add_no1() {
    add_to_it1 = document.getElementById("no_text_1").value;
    localStorage.setItem(  "number_1" , add_to_it1);
    document.getElementById("no_text_1").value = "";
}

function add_no2() {
    add_to_it2 = document.getElementById("no_text_2").value;
    localStorage.setItem(  "number_2" , add_to_it2);
    document.getElementById("no_text_2").value = "";
}

function add_no3() {
    add_to_it3 = document.getElementById("no_text_3").value;
    localStorage.setItem(  "number_3" , add_to_it3);
    document.getElementById("no_text_3").value = "";
}

function add_no4() {
    add_to_it4 = document.getElementById("no_text_4").value;
    localStorage.setItem(  "number_4" , add_to_it4);
    document.getElementById("no_text_4").value = "";
}

function add_no5() {
    add_to_it5 = document.getElementById("no_text_5").value;
    localStorage.setItem(  "number_5" , add_to_it5);
    document.getElementById("no_text_5").value = "";
}

function add_no6() {
    add_to_it6 = document.getElementById("no_text_6").value;
    localStorage.setItem(  "number_6" , add_to_it6);
    document.getElementById("no_text_6").value = "";
}

//localstorage to web page

function get_no_1() {

    num1_show = localStorage.getItem("number_1");
    document.getElementById("no1").innerHTML = "<h2> Number 1 :" + num1_show + "</h2>";
}

function get_no_2() {

    num2_show = localStorage.getItem("number_2");
    document.getElementById("no2").innerHTML = "<h2> Number 2 :" + num2_show + "</h2>";
}

function get_no_3() {

    num3_show = localStorage.getItem("number_3");
    document.getElementById("no3").innerHTML = "<h2> Number 3 :" + num3_show + "</h2>";
}

function get_no_4() {

    num4_show = localStorage.getItem("number_4");
    document.getElementById("no4").innerHTML = "<h2> Number 4 :" + num4_show + "</h2>";
}

function get_no_5() {

    num5_show = localStorage.getItem("number_5");
    document.getElementById("no5").innerHTML = "<h2> Number 5 :" + num5_show + "</h2>";
}

function get_no_6() {

    num6_show = localStorage.getItem("number_6");
    document.getElementById("no6").innerHTML = "<h2> Number 6 :" + num6_show + "</h2>";
}

