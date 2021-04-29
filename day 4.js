function createUsername()  {
        

    let addUserList = document.createElement ('li')
    let inpValue = document.getElementById('value').value
    addUserList.innerText = inpValue
    let ul = document.getElementById('my List')
    ul.appendChild(addUserList)
    document.getElementById('value').value = ''
    
        }
        document.getElementById("button-addon2").addEventListener('click', createUsername)


        function createTeam()  {
        

            let addNumTeam = document.createElement ('li')
            let inpValue = document.getElementById('inputGroupSelect01').value
            addNumTeam.innerText = inpValue
            let ul = document.getElementById('my team')
            ul.appendChild(addNumTeam)
            document.getElementById('inputGroupSelect01').value = ''
            
                }
                document.getElementById("button-addon").addEventListener('click', createTeam)
    