const request = require('postman-request');

const getAllProducts = (callback) => {
    request('localhost:3001/products', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}

const getAllCategories = (callback) => {
  request('localhost:3001/categories', (error, res, body) => {
      if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron categorias.", undefined);
      }
  });
}

const getAllSelectionServ = (callback) => {
  request('localhost:3001/selectionServ', (error, res, body) => {
      if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron servicios.", undefined);
      }
  });
}

const getAllServices = (callback) => {
  request('localhost:3001/services', (error, res, body) => {
      if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron servicios.", undefined);
      }
  });
}

const getAllSlidesEM = (callback) => {
  request('localhost:3001/slidesEM', (error, res, body) => {
      if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron servicios.", undefined);
      }
  });
}

const getAllSlidesME = (callback) => {
  request('localhost:3001/slidesME', (error, res, body) => {
      if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron servicios.", undefined);
      }
  });
}


module.exports= {
 
  getAllCategories,
  getAllProducts,
  getAllSelectionServ,
  getAllServices,
  getAllSlidesEM,
  getAllSlidesME
}