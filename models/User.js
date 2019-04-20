module.exports = function (sequelize,DataTypes){
  return sequelize.define('user',{
    id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: false},
    userName : {type:DataTypes.STRING},
    fname : {type:DataTypes.STRING},
    lname : {type:DataTypes.STRING},
  })
}

