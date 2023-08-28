window.onload = function(){
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});


	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
						no:1
					};
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping span');
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;


	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
	let tprice=0;

	if(JSON.parse(localStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{

		JSON.parse(localStorage.getItem('items')).map(data=>{
			tprice+=parseInt(data.price);
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" class="btn btn-info btn-sm" onclick=Delete(this);>Delete</a></th></tr>';
		});
		
	}
	let total='<tr><td colspan="3"><b class="offset-5">Grand Total</b></td><td colspan="2"> <b>$'+tprice+'</b></td></tr>'
	cardBoxTable.innerHTML = tableData+total;
	// document.querySelector("table").innerHTML=total;
}




function Delete(e){
	let items = [];
	JSON.parse(localStorage.getItem('items')).map(data=>{
		if(data.id != e.parentElement.parentElement.children[0].textContent){
			
			items.push(data);

		}
	});
	localStorage.setItem('items',JSON.stringify(items));
	window.location.reload();
};