/*This function succinctly implements the parasitic combination inheritance for us. We pass in the parent object 
(or Super Class) and the child object (or Sub Class), and the function does the parasitic combination inheritance: 
makes the child object inherits from the parent object.*/

function inheritPrototype(childObject, parentObject) {
    // We use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
​    // So the copyOfParent object now has everything the parentObject has ​
    var copyOfParent = Object.create(parentObject.prototype);
​
    // Then we set the constructor of this new object to point to the childObject.​
​    // Why do we manually set the copyOfParent constructor here, because in the preceding step We made a new object 
    // and overwrote its prototype with the parentObject prototype. So, this new object, which we assigned to 
    // copyOfParent, doesn’t have a constructor property anymore because we overwrote its entire prototype. Whenever 
    // you overwrite an object’s prototype (object.prototype = someVal), you also overwrite the object’s constructor 
    // property. 
    copyOfParent.constructor = childObject;
​
    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything 
    // from copyOfParent (from parentObject)​
   childObject.prototype = copyOfParent;
}