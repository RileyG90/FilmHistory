using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.EF.Entities
{
    [Table("comments")]
    public class CommentsEntity
    {
        [Column("id"), Key]
        public int Id { get; set; }

        [Column("user_id"), Required]
        public int User_Id { get; set; } 

        [Column("movie_id"), Required]
        public int Movie_Id { get; set; }

        [Column("comment"), Required, StringLength(500), DataType(DataType.Text)]
        public string Comment { get; set; }

    }
}
