const net = require('net');
const { IP, PORT } = require('./constant');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: JAE');
  })
  
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: left")
  //   }, 100);
  // })
 
  conn.on('data', (data) => {
    console.log(`server says: ${data}`)
  });

  return conn;
};

module.exports = { connect };