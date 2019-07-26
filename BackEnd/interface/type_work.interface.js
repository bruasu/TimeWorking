class Type_work{
    constructor(){
        this.id_type_work;
        this.name;
        this.data_insert;
    }
    setType_work(data){
        if(data.id_type_work){
            this.id_type_work = data.id_type_work;
        }
        if(data.name){
            this.name = data.name;
        }
        if(data.data_insert){
            this.data_insert = data.data_insert;
        }
    }
}

module.exports = Type_work;