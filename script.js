const uri = 'http://35.196.197.99/firstName'
let h = new Headers();
h.append('Accept', 'application/json');
h.values('kmPytcJCmgSqCe7RWpFCYmHk');

let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData) =>{
        console.log(jsonData);
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
let req2 = new Request(uri, {
    method: 'GET',
    headers: h,
    mode:'cors'
});

fetch(req2)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData2) =>{
        console.log(jsonData2);
    })

    let req3 = new Request(uri, {
        method: 'GET',
        headers: h,
        mode: 'cors'
    });
    fetch(req3)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData3) =>{
        console.log(jsonData3);
    })
