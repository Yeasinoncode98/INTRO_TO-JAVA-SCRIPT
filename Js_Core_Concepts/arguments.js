function add(a, b) {
  console.log(arguments); //Array Like Objects
  const params = [...arguments];
  console.log(params.map);
}

add(5, 7, 8, 9);


// Ek er odhik parameter pass kore felle sheta fucntion catch korte parbena
// tai setake dhorar jnno ba shob parameter shobaike pawar jnno
// arguments dile shob parameter ke pawa jabe 