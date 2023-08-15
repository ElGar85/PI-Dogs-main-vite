const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', 
  {
    // Se definen los atributos del modelo
    ID: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Años_de_vida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false }
  );
};
