var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
};

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
};

function deleteFromObjectByKey(object, key){
  let obj = {key: 'value'}
  let newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;

};
