
    function tableFromJson() {
		// the json data. (you can change the values for output.)
        var myBooks = [
            {'S.No': '1', 'Item': 'Rice',
                'Quantity': '5', 'Unit': 'kg','Category':'Grocery','Note':'Jaya'
            },
            {'S.No': '2', 'Item': 'Milk',
                'Quantity': '2', 'Unit': 'ml','Category':'Dairy','Note':'Milma'
            },
            {'S.No': '3', 'Item': 'Apple',
                'Quantity': '2', 'Unit': 'kg','Category':'Dairy','Note':'Pink Lady'
            },
            {'S.No': '4', 'Item': 'Curd',
                'Quantity': '1', 'Unit': 'L','Category':'Grocery','Note':'Amul'
            },
            {'S.No': '5', 'Item': 'Onion',
                'Quantity': '3', 'Unit': 'kg','Category':'Vegetables','Note':'None'
            },
            {'S.No': '6', 'Item': 'Brinjal',
                'Quantity': '2', 'Unit': 'kg','Category':'Vegetables','Note':'None'
            },
            {'S.No': '7', 'Item': 'Tomato',
                'Quantity': '1', 'Unit': 'kg','Category':'Vegetables','Note':'Medium'
            },
            {'S.No': '8', 'Item': 'Orange',
                'Quantity': '2', 'Unit': 'kg','Category':'Fruits','Note':'Mandarin Orange'
            },
            {'S.No': '9', 'Item': 'Ghee',
                'Quantity': '500', 'Unit': 'gm','Category':'Dairy','Note':'Amul'
            },
            {'S.No': '10', 'Item': 'Egg',
                'Quantity': '25', 'Unit': 'No','Category':'Non-Veg','Note':'Brown Eggs'
            }
        ]

       
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
    }