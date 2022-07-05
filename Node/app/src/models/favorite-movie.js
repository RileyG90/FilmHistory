import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const FavoriteMovies = db.define('favorites', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});
 
export default FavoriteMovies;