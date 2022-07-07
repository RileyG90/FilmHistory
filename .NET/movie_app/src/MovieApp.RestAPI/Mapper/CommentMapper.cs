using MovieApp.Core.Model;

namespace MovieApp.RestAPI.Mapper
{
    public class CommentMapper
    {
        public static CommentContract From(Comments comment)
        {
            return new()
            {
                Id = comment.Id,
                User_Id = comment.User_Id,
                Movie_Id = comment.Movie_Id,
                Comment = comment.Comment
            };
        }
    }
}
