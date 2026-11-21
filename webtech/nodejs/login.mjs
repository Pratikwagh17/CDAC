import prompt from "prompt";
prompt.start();
prompt.get(['username', 'password'], function (err, result) {
    
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.password);
  });