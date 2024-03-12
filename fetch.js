const amount = document.getElementById('amount')
const category = document.getElementById('category')
const date = document.getElementById('date')
const submitButton = document.getElementById('add-entry')

async function addNewEntry() {
    const response = await fetch('https://expensetrackerapis-uf60.onrender.com/add-expense', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "amount" : amount.value,
            "category" : category.value,
            "date" : date.value
        })
    })
    const data = await response.json()
    console.log(data)
}

submitButton.addEventListener('click', addNewEntry)

async function getExpenseDetails(){
    // sending request : fetch, axios
    const response = await fetch('https://expensetrackerapis-uf60.onrender.com/get-expenses')
    const data = await response.json()
    console.log(data)
}
getExpenseDetails()
