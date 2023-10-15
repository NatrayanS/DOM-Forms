// Title
let maincontainer = setTitle("div", "class", "container-fluid");
let formLayout = setTitle("main", "id", "form-layout");
let titlecontent = setTitle("form", "id", "form");
function setTitle(tagname, attname, attvalue) {
  let formbody = document.createElement(tagname);
  formbody.setAttribute(attname, attvalue);
  return formbody;
}

//-----------------------------------------

let maindiv = document.createElement("div");
maindiv.classList.add(
  "div",
  "form-row",
  "d-flex",
  "justify-content-center",
  "col-md-8"
);

let titlediv1 = document.createElement("div");
titlediv1.classList.add("form-group", "col-md-10");

//---------------------------------------------

let div1h1 = titledivchild("h1", "id", "title", "DOM HTML-FORM :");
let div1p = titledivchild(
  "p",
  "id",
  "description",
  " Kindly fill this form given below and choose the favourite Food items of Minimum Two:-"
);
function titledivchild(tagname, attname, attvalue, contenttext) {
  let titledivchild = document.createElement(tagname);
  titledivchild.setAttribute(attname, attvalue);
  titledivchild.innerHTML = contenttext;
  return titledivchild;
}

//-----------------------------------------------------

let fname_div = sixdiv("div", "form-group", "col-md-5");
let lname_div = sixdiv("div", "form-group", "col-md-5");
let address_div = sixdiv("div", "form-group", "col-md-10");
let state_div = sixdiv("div", "form-group", "col-md-5");
let country_div = sixdiv("div", "form-group", "col-md-5");
let pincode_div = sixdiv("div", "form-group", "col-md-5");
let gender_div = sixdiv("div", "form-group", "col-md-5");
let food_div = sixdiv("div", "form-group", "col-md-10");

function sixdiv(tagname, divclass1, divclass2) {
  let six_div_element = document.createElement(tagname);
  six_div_element.classList.add(divclass1, divclass2);
  return six_div_element;
}

//---------------------------------------------------

let fname_label = sixlabel("label", "for", "firstname", "FIRST NAME:");
let lname_label = sixlabel("label", "for", "lastname", "LAST NAME:");
let address_label = sixlabel("label", "for", "address", "ADDRESS:");
let state_label = sixlabel("label", "for", "state", "STATE:");
let country_label = sixlabel("label", "for", "country", "COUNTRY:");
let pincode_label = sixlabel("label", "for", "pincode", "PINCODE:");

function sixlabel(tagname, attname, attvalue, contenttext) {
  let six_label_element = document.createElement(tagname);
  six_label_element.setAttribute(attname, attvalue);
  six_label_element.innerHTML = contenttext;
  return six_label_element;
}

//------------------------------------------------------------------

let fname_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "first-name",
  "placeholder",
  "ENTER YOUR FIRSTNAME",
  "required"
);

let lname_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "last-name",
  "placeholder",
  "ENTER YOUR LASTNAME",
  "required"
);
let address_input = sixinput(
  "textarea",
  "type",
  "textarea",
  "class",
  "form-control",
  "id",
  "address",
  "placeholder",
  "ENTER YOUR ADDRESS",
  "required"
);
let state_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "state",
  "placeholder",
  "ENTER YOUR STATE",
  "required"
);
let country_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "country",
  "placeholder",
  "ENTER YOUR COUNTRY",
  "required"
);
let pincode_input = sixinput(
  "input",
  "type",
  "text",
  "class",
  "form-control",
  "id",
  "pincode",
  "placeholder",
  "ENTER YOUR PINCODE",
  "required"
);

function sixinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  attname5
) {
  let six_inputtype = document.createElement(tagname);
  six_inputtype.setAttribute(attname1, attvalue1);
  six_inputtype.setAttribute(attname2, attvalue2);
  six_inputtype.setAttribute(attname3, attvalue3);
  six_inputtype.setAttribute(attname4, attvalue4);
  six_inputtype.setAttribute(attname5, "");
  return six_inputtype;
}

//----------------------------------------------------------------

let gender_p = document.createElement("p");
gender_p.innerText = "GENDER:";

//----------------------------------------------------------------

let gender_div1 = genderdiv("div", "class", "gender");
let gender_div2 = genderdiv("div", "class", "gender");
let gender_div3 = genderdiv("div", "class", "gender");

function genderdiv(tagname, attname, attvalue) {
  let gender = document.createElement(tagname);
  gender.setAttribute(attname, attvalue);
  return gender;
}

//----------------------------------------------------------------

let inputmale = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "male",
  "name",
  "gender",
  "id",
  "male",
  "required"
);
let inputfemale = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "female",
  "name",
  "gender",
  "id",
  "female",
  "required"
);
let inputothers = genderinput(
  "input",
  "type",
  "radio",
  "value",
  "others",
  "name",
  "gender",
  "id",
  "others",
  "required"
);

function genderinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  attname5
) {
  let gendertype = document.createElement(tagname);
  gendertype.setAttribute(attname1, attvalue1);
  gendertype.setAttribute(attname2, attvalue2);
  gendertype.setAttribute(attname3, attvalue3);
  gendertype.setAttribute(attname4, attvalue4);
  gendertype.setAttribute(attname5, "");
  return gendertype;
}

//----------------------------------------------------------------

let malelabel = genderlabel("label", "for", "male", "MALE");
let femalelabel = genderlabel("label", "for", "female", "FEMALE");
let otherslabel = genderlabel("label", "for", "others", "OTHERS");

function genderlabel(tagname, attname1, attvalue1, contenttext) {
  let genderLabel = document.createElement(tagname);
  genderLabel.setAttribute(attname1, attvalue1);
  genderLabel.innerHTML = contenttext;
  return genderLabel;
}

//----------------------------------------------------------------

let food_label = document.createElement("label");
food_label.setAttribute("for", "food");
food_label.innerHTML = "FOOD ITEMS:";

//----------------------------------------------------------------

let food_div1 = fooditemsdiv("div");
let food_div2 = fooditemsdiv("div");
let food_div3 = fooditemsdiv("div");
let food_div4 = fooditemsdiv("div");
let food_div5 = fooditemsdiv("div");

function fooditemsdiv(tagname) {
  let foodItems = document.createElement(tagname);

  return foodItems;
}

//------------------------------------------------------------------

let food_input1 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "1) Dindigul traditional Biriyani.  ",
  "class",
  "checkbox"
);
let food_input2 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "2) Chennai Style Biriyani.  ",
  "class",
  "checkbox"
);
let food_input3 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "3) Ambur Biriyani.  ",
  "class",
  "checkbox"
);
let food_input4 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "4) Hyderabad Hiryani.  ",
  "class",
  "checkbox"
);
let food_input5 = fooditemsinput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "value",
  "5) Arabic Style mandi biryani.  ",
  "class",
  "checkbox"
);

function fooditemsinput(
  tagname,
  attname1,
  attvalue1,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4
) {
  let foodinput = document.createElement(tagname);
  foodinput.setAttribute(attname1, attvalue1);
  foodinput.setAttribute(attname2, attvalue2);
  foodinput.setAttribute(attname3, attvalue3);
  foodinput.setAttribute(attname4, attvalue4);
  return foodinput;
}

//----------------------------------------------------------------
let food_label1 = fooditemslabel("label", "for", "food", "Dindigul traditional Biriyani.");
let food_label2 = fooditemslabel("label", "for", "food", "Chennai Style Biriyani.");
let food_label3 = fooditemslabel("label", "for", "food", "Ambur Biriyani.");
let food_label4 = fooditemslabel(
  "label",
  "for",
  "food",
  "Hyderabad Hiryani."
);
let food_label5 = fooditemslabel(
  "label",
  "for",
  "food",
  "Arabic Style mandi biryani."
);

function fooditemslabel(tagname, attname, attvalue, contenttext) {
  let foodlabel = document.createElement(tagname);
  foodlabel.setAttribute(attname, attvalue);
  foodlabel.innerHTML = contenttext;
  return foodlabel;
}

//----------------------------------------------------------------

let button_div = document.createElement("div");
button_div.classList.add("form-group", "col-md-10", "buttonstyle");

//----------------------------------------------------------------
let button1 = buttonele(
  "button",
  "btn",
  "btn-primary",
  "innerbutton",
  "type",
  "submit",
  "id",
  "submit",
  "value",
  "SUBMIT",
  "SUBMIT"
);
let button2 = buttonele(
  "button",
  "btn",
  "btn-primary",
  "innerbutton",
  "type",
  "reset",
  "id",
  "reset",
  "value",
  "RESET",
  "RESET"
);

function buttonele(
  tagname,
  class1,
  class2,
  class3,
  attname2,
  attvalue2,
  attname3,
  attvalue3,
  attname4,
  attvalue4,
  contenttext
) {
  let buttons = document.createElement(tagname);
  buttons.classList.add(class1, class2, class3);
  buttons.setAttribute(attname2, attvalue2);
  buttons.setAttribute(attname3, attvalue3);
  buttons.setAttribute(attname4, attvalue4);
  buttons.innerHTML = contenttext;
  return buttons;
}
//----------------------------------------------------------------

let table_div = document.createElement("div");
table_div.classList.add("form-group", "col-md-10");

let tabletag = document.createElement("table");
tabletag.setAttribute("class", "table");
tabletag.setAttribute("border", "1");
tabletag.setAttribute("cellspacing", "0");
tabletag.setAttribute("cellpadding", "");

let tablehead = document.createElement("thead");
tablehead.setAttribute("class", "thead-dark");
tablehead.setAttribute("id", "thead-head");

let tablerow = document.createElement("tr");
tablerow.setAttribute("id", "rowalign");

let table_body = document.createElement("tbody");
table_body.setAttribute("id", "table-styles");

//----------------------------------------------------------------

let th1 = tableheader("th", "scope", "col", "FIRST_NAME");
let th2 = tableheader("th", "scope", "col", "LAST_NAME");
let th3 = tableheader("th", "scope", "col", "ADDRESS");
let th4 = tableheader("th", "scope", "col", "STATE");
let th5 = tableheader("th", "scope", "col", "COUNTRY");
let th6 = tableheader("th", "scope", "col", "PINCODE");
let th7 = tableheader("th", "scope", "col", "GENDER");
let th8 = tableheader("th", "scope", "col", "FOOD");

function tableheader(tagname, attname, attvalue, contenttext) {
  let tablecol = document.createElement(tagname);
  tablecol.setAttribute(attname, attvalue);
  tablecol.innerHTML = contenttext;
  return tablecol;
}
//------------------------------------------------------------

//? appending...

document.body.append(maincontainer);
maincontainer.append(formLayout);
formLayout.append(titlecontent);
titlecontent.append(maindiv);
titlediv1.append(div1h1, div1p);

maindiv.append(
  titlediv1,
  fname_div,
  lname_div,
  address_div,
  state_div,
  country_div,
  pincode_div,
  gender_div,
  food_div,

  button_div,
  table_div
);

fname_div.append(fname_label, fname_input);
lname_div.append(lname_label, lname_input);
address_div.append(address_label, address_input);
state_div.append(state_label, state_input);
country_div.append(country_label, country_input);
pincode_div.append(pincode_label, pincode_input);

gender_div.append(gender_p, gender_div1, gender_div2, gender_div3);
gender_div1.append(inputmale, malelabel);
gender_div2.append(inputfemale, femalelabel);
gender_div3.append(inputothers, otherslabel);

food_div.append(
  food_label,
  food_div1,
  food_div2,
  food_div3,
  food_div4,
  food_div5
);
food_div1.append(food_input1, food_label1);
food_div2.append(food_input2, food_label2);
food_div3.append(food_input3, food_label3);
food_div4.append(food_input4, food_label4);
food_div5.append(food_input5, food_label5);

button_div.append(button1, button2);

table_div.append(tabletag);
tabletag.append(tablehead, table_body);
tablehead.append(tablerow);
tablerow.append(th1, th2, th3, th4, th5, th6, th7, th8);

//----------------------------------------------------------------

//? Submit button preventing:-

let prevent_button = document.getElementById("submit");
prevent_button.addEventListener("click", (ele) => {
  ele.preventDefault();
});

//----------------------------------------------------------------
//? SUBMIT BUTTON function:-

button1.addEventListener("click", btnname);

function btnname() {
  let firstname_value = document.getElementById("first-name").value;
  let lastname_value = document.getElementById("last-name").value;
  let address_value = document.getElementById("address").value;
  let state_value = document.getElementById("state").value;
  let country_value = document.getElementById("country").value;
  let pincode_value = document.getElementById("pincode").value;

  //----------------------------------------------------------------

  //? creating row for table data:-

  let row1 = document.createElement("tr");
  table_body.append(row1);

  //----------------------------------------------------------------

  let res = [];
  let male_value;
  let female_value;
  let others_value;

  //----------------------------------------------------------

  //? null input means..

  let null_value = [];
  let checkbox_value = document.getElementsByClassName("checkbox");
  for (let k = 0; k < checkbox_value.length; k++) {
    if (checkbox_value[k].checked) {
      null_value.push(checkbox_value[k]);
    }
  }

  if (
    firstname_value == "" ||
    lastname_value == "" ||
    address_value == "" ||
    state_value == "" ||
    country_value == "" ||
    pincode_value == "" ||
    (male_value == "" && female_value == "" && others_value == "") ||
    null_value.length == 0
  ) {
    alert("<< Please, Fill all the input fields >>");
  }
  //-------------------------------------------------------------------------

  //? Food items alert when less than 2:-

  if (null_value.length < 2) {
    alert("<<Please select minimum 2 Food items Out of 5>>");
  }

  //------------------------------------------------------------------
  //? Checking the input fields are filled and then appending them to the table...
  if (
    firstname_value !== "" &&
    lastname_value !== "" &&
    address_value !== "" &&
    state_value !== "" &&
    country_value !== "" &&
    pincode_value !== "" &&
    (male_value !== "" || female_value !== "") &&
    null_value.length === 2
  ) {
    //-------------------------------------------------------------------
    //? creating the td elements:-
    for (let i = 0; i < 8; i++) {
      let data = document.createElement("td");
      res.push(data);
    }
    //-------------------------------------------------------------------
    res[0].append(firstname_value);
    res[1].append(lastname_value);
    res[2].append(address_value);
    res[3].append(state_value);
    res[4].append(country_value);
    res[5].append(pincode_value);
    //-------------------------------------------------------------------
    //? gender function:-

    if (male.checked) {
      male_value = document.getElementById("male").value;
      res[6].append(male_value);
    }
    if (female.checked) {
      female_value = document.getElementById("female").value;
      res[6].append(female_value);
    }
    if (others.checked) {
      others_value = document.getElementById("others").value;
      res[6].append(others_value);
    }
    //-------------------------------------------------------------------
    //? food items function:-

    for (let j = 0; j < checkbox_value.length; j++) {
      if (checkbox_value[j].checked) {
        res[7].append(checkbox_value[j].value);
      }
    }
    //-------------------------------------------------------------------
    //? td appending...

    row1.append(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]);
  }

  //-------------------------------------------------------------------
}