let objects = [
    { name: 'Андрей',
      surname: 'Андреевич' },
    { name: 'Данил',
      surname: 'Данилов' },
    { name: 'Кирилл',
      surname: 'Кириллов' }
  ];
  
  function filterObjValues(objects, key, value) {
   
    const result = [];
  
    
    for (let i = 0; i < objects.length; i++) {
      
      const obj = objects[i];
  
     
      if (obj[key] === value) result.push(obj);
    }
  
    
    return result;
  }
  
  const filteredArray = filterObjValues(objects, 'name', 'Пётр');
  
  console.log(filteredArray);