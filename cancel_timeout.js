var timeout = setTimeout(function() { console.log('hello world');
}, 1000);
clearTimeout(timeout); // The timeout will no longer be executed
console.log(`setTimeout id ${timeout} has been cleared`);