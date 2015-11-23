function loopy(timeout){
  console.log('Im back...bye for 3 seconds...')
  setTimeout(loopy, 3000);
}

loopy();
