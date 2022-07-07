using MovieApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.BL.Service
{
    public interface IStorageService
    {
        //Operazioni CRUD
        Comments CreateComment(int user_Id, int movie_Id, string comment);
        List<Comments> GetAllComments();
        List<Comments> CommentGetByMovieId(int movieId);
        bool DeleteCommentById(int commentId);
        Comments UpdateCommentById(int commentId, string comment);

    }
}
