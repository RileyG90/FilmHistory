using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MovieApp.Core.Model
{
    public class Comments
    {
        public const int MIN_LENGHT_COMMENTS = 10;

        //private readonly int _id;
        
        public int Id { get; set; }//{ get { return _id; } }
        [JsonPropertyName("user_Id")]
        public int User_Id { get; set; }
        [JsonPropertyName("movie_Id")]
        public int Movie_Id { get; set; }
        [JsonPropertyName("comment")]
        public string Comment { get; set; }

        public Comments(int id, int user_Id, int movie_Id, string comment)
        {
            Id = id;
            User_Id = user_Id;
            Movie_Id = movie_Id;
            Comment = comment;
        }

        public Comments()
        {
        }
    }
}
