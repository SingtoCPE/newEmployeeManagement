const listParent = document.getElementById('listOn');
    function submitAddAccount(form) {
        const errorMessage = form.querySelector('#errorMessage');
        const fullname = form['fullname'].value;
        const nameEmployeeSalary = Number(form['nameEmployeeSalary'].value);
        const namePosition =form['namePosition'].value;
        const nameExperience = Number(form['nameExperience'].value);
        const editButton        = document.createElement('button');
        const deleteButton      = document.createElement('button');
        const saveButton        = document.createElement('button');
        const list              = document.createElement('p');
        const checkBox          = document.createElement('input');
        const positiontext      = ' [Position] : ';
        const salarytext        = ' [Salaly] : ';
        const experiencetext    = ' [Experience] : ';
        

        checkBox.type           = 'checkbox'
        checkBox.id             = 'Checkbox';
        checkBox.onclick        = checkbox_changed
        editButton.innerText    = 'Edit';
        editButton.className    = 'edit';
        editButton.onclick      = editclick;
        editButton.type         = 'button';
	    deleteButton.innerText  = 'Delete';
        deleteButton.className  = 'delete';
        deleteButton.type       = 'button';
        deleteButton.onclick    = deleteclick;
        saveButton.type         = 'button';
        saveButton.innerText    = 'Save';
        saveButton.className    = 'save';
        saveButton.onclick      = saveclick;
        
        const editInputName     = document.createElement('input');
        editInputName.value     = fullname;
        editInputName.disabled  = 'disable';
        editInputName.type      = 'text';
        editInputName.id        = '1';

        const editInputPosition     = document.createElement('input');
        editInputPosition.value     = namePosition;
        editInputPosition.disabled  = 'disable';
        editInputPosition.type      = 'text';
        editInputPosition.id        = '2';

        const editInputSalary     = document.createElement('input');
        editInputSalary.value     = nameEmployeeSalary;
        editInputSalary.disabled  = 'disable';
        editInputSalary.type      = 'number';
        editInputSalary.id        = '3';

        const editInputExperience     = document.createElement('input');
        editInputExperience.value     = nameExperience;
        editInputExperience.disabled  = 'disable';
        editInputExperience.type      = 'number';
        editInputExperience.id        = '4';

        // check fullname length
        const fullnameLength = fullname.length;
        if (fullnameLength < 2 || fullnameLength > 50) {
            errorMessage.innerHTML = 'fullname must have length between 2 and 50';
            return false;
        }

        // check age value range
        if (nameEmployeeSalary < 15000 || nameEmployeeSalary > 100000) {
            errorMessage.innerHTML = 'age must between 15000 and 100000';
            return false;
        }

        // check age value range
        const namePositionLength = namePosition.length;
        if (namePositionLength < 2 || namePositionLength > 70) {
            errorMessage.innerHTML = 'please choose position';
            return false;
        }

        // check age value range
        if (nameExperience < 0 || nameExperience > 25) {
            errorMessage.innerHTML = 'please choose experience';
            return false;
        }

        listParent.appendChild(list);
        // add person
        // const person = document.createElement('li');
        // person.innerHTML = `[Name] : ${fullname} [Position] : ${namePosition} 
        //                     [Salary] : ${nameEmployeeSalary} [Experience] : ${nameExperience}`;
        // list.append(person);
        list.append(checkBox);
        list.append(editInputName);
        list.append(positiontext);
        list.append(editInputPosition);
        list.append(salarytext);
        list.append(editInputSalary);
        list.append(experiencetext);
        list.append(editInputExperience);
        list.append(editButton);
        list.append(deleteButton)
        list.append(saveButton);
        // remove error text
        errorMessage.innerHTML = '';
        // let the form submit pass...
        return true;
    }

    function editclick(){
        const ableInputName             = document.getElementById('1');
        ableInputName.disabled          = undefined;

        const ableInputPosition         = document.getElementById('2');
        ableInputPosition.disabled      = undefined;

        const ableInputSalary           = document.getElementById('3');
        ableInputSalary.disabled        = undefined;
    
        const ableInputExperience       = document.getElementById('4');
        ableInputExperience.disabled    = undefined;

    }

    function deleteclick(){
        const listParent    =this.parentNode;
        const ul            = listParent.parentNode;
		ul.removeChild(listParent);         

    }

    function saveclick(){
        const ableInputEdit         = document.getElementById('1');
        ableInputEdit.disabled      = 'disable';
    
        const ableInputPosition     = document.getElementById('2');
        ableInputPosition.disabled  = 'disable';
    
        const ableInputSalary       = document.getElementById('3');
        ableInputSalary.disabled    = 'disable';
    
        const ableInputExperience     = document.getElementById('4');
        ableInputExperience.disabled  = 'disable';
    }

    function checkbox_changed() {
        const checkboxItem      = document.getElementById("Checkbox");
            console.log(checkboxItem.checked);
        if (checkboxItem.checked==true) {
            console.log("Check!");
        }else{
            console.log("Uncheck!")
        }
    }