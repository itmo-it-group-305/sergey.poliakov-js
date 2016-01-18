/**
 * Created by sergeypoliakov on 21.12.15.
 */
function Storage () {
    this.store: [],
    this.set: function(name,value) {
        this.store[name]=value;
    },
    this.get: function(name) {
        return this.store[name];
    }
}

storage.set('name','Piter');
storage.get('name');

storage.maxSize = 100;
storage.del=function(){this.store=[]};


var db = new Storage();
db.set('name','Piter');
var db2 = new Storage();

//другой варик
function Storage () {
    this.store = [];
}

Storage.prototype.set = function(name,value) {
    this.store[name]=value;
};
Storage.prototype.get = function(name) {
    return this.store[name];
};
Storage.prototype.del = function() {
    this.store = [];
};

var obj = new Storage();

//ещё варик

function Storage() {
    store=[];
    function.constract(){
        this.set=function(name,value) {
            store[name] = value;
        }
        this.get = function(name) {
            return store[name];
        }
    }
    return new constract();
}

var obj = new Storage();

obj.set('name', 'Peter');
obj.store
