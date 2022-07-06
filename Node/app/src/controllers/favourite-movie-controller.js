import FavouriteMovie from "../models/favourite-movie.js";

export const getFavorite = async (req, res) => {
    try {
        const favorite = await FavouriteMovie.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getAllFavorite = async (req, res) => {
    try {
        const favorite = await FavouriteMovie.findAll({
            where: {
              userId: req.params.userId,
            }
          });
        
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createFavorite = async (req, res) => {
    try {
        const favorite = await FavouriteMovie.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Favorite Created",
            data: favorite
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteFavorite = async (req, res) => {
    try {
        await FavouriteMovie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Favorite Movie Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}
