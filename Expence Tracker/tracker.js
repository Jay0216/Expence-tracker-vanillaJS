


//get already created table div area using css selector
const table_div = document.querySelector(".table-div");


//create table tag and after it(element) added(append) into the table-div(already created div area)
const table = document.createElement("table");
table.className = "table"
table_div.append(table)


//create thead tag and added(append) into the table tag
const table_header = document.createElement("thead");
table.append(table_header)


//create tr tag and added(append) into the thead tag
const tabel_rows = document.createElement("tr");
table_header.append(tabel_rows)



//for loop for creating for (th) elements and added(append) into the tr tag

for(iteration = 1; iteration <= 4; iteration++){

    const create_table_headers = document.createElement("th")
    create_table_headers.className = "table-headers"


    tabel_rows.append(create_table_headers)


    
}





//set names for the tr tag's childNodes(th tags names)
tabel_rows.childNodes[0].textContent = "Expence"
tabel_rows.childNodes[1].textContent = "Amount"
tabel_rows.childNodes[2].textContent = "Date"
tabel_rows.childNodes[3].textContent = "Status"
 

    


    

   













//get html inputs and buttons(already created elements) by it's ID
const expence_name_input = document.getElementById("expence-name")
const expence_amount_input = document.getElementById("expence-amount")
const expence_added_date = document.getElementById("added-date")
const add_button = document.getElementById("add-btn");




//input field reset
const reset_input_field = () => {
    
    return expence_name_input.value = '', expence_added_date.value = '', expence_amount_input.value = ''

    
}


const add_expenses = () => {




    //check all inputs(if inputs are not filled raise a alert after button clicked)
    if(expence_name_input.value == "" || expence_amount_input.value == "" || expence_added_date.value == ""){
        alert("Please fill Expence Details...")
    }


    //and all inputs are correct then creating elements (after button clicked) for show the input data(values)
    else{
       

       //create table body element(tbody) and after it(element) added(append) into the table element
       const table_body = document.createElement("tbody")
       table.append(table_body)



       //create table row element(tr) and after it(element) added(append) into the table body element
       const table_body_row = document.createElement("tr")
       table_body.append(table_body_row)

       


       //for loop for creating four table details elements(td) and after it(element) added(append) into the table row element
       for(iteration = 1; iteration <= 4; iteration++){

           const table_details = document.createElement("td")
           table_details.style.paddingTop = "30px";
           table_details.style.paddingBottom = "10px";
           table_body_row.append(table_details)
       }



        //get input values(data) and add into the  table row(inside table body element) element's childNodes(inside tags of tr element)
        table_body_row.childNodes[0].textContent = expence_name_input.value;
        table_body_row.childNodes[1].textContent = expence_amount_input.value;
        table_body_row.childNodes[2].textContent = expence_added_date.value;



        //create button element for button
        const mark_btn = document.createElement("button");
        mark_btn.textContent = "Mark";
        mark_btn.className = "mark-btn";


        //then added(append) into the table row element's childNode(fourth element of the tr tag's inside)
        table_body_row.childNodes[3].append(mark_btn)


        //after added all details into the all created element will print this message on the console
        console.log("Expence Added..!!")

        //reset inputs
        reset_input_field()
        



        //create event listener(click event) for mark the expence details(after click this mark_btn will change color of the table row(inside the tbody))
        mark_btn.addEventListener("click", function(){
            table_body_row.style.textDecoration = "line-through";
            table_body_row.style.backgroundColor = "green";

            mark_btn.style.backgroundColor = "yellow";
            mark_btn.textContent = "Done";
        })


        
        


        

    }

}

add_button.addEventListener("click", add_expenses)





    


    
console.log(table_div)
















