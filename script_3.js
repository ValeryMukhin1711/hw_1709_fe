
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const mark = document.getElementById('mark').value;

    
    const user = {
        name: name,
        subject: subject,
        mark: mark
    };

    
    localStorage.setItem('userData', JSON.stringify(user));

    alert('Data saved!');
});


document.getElementById('loadData').addEventListener('click', function() {
    
    const userData = localStorage.getItem('userData');

    
    if (userData) {
        const user = JSON.parse(userData);
        document.getElementById('output').innerHTML = `Name: ${user.name}, Subject: ${user.subject}, Mark: ${user.mark}`;
    } else {
        document.getElementById('output').innerHTML = 'No data found!';
    }
});