let printData = async () => {

    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    let emtyStr = ' ';
    console.log(data);
    data.forEach((value, index) => {

        emtyStr += '<li>' + value.title + '</li><img src="' + value.image + '"/><h1>' + value.price + '</h1>';
    })
    document.getElementById('container').innerHTML += emtyStr;
}
printData(); 