import colors from 'colors';
import server from './server';

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(colors.blue.bold(`Servidor funcionando en el puerto: ${port}`));
});
