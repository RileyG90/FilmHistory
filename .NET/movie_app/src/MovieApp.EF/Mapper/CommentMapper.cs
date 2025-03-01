﻿using MovieApp.Core.Model;
using MovieApp.EF.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.EF.Mapper
{
    public class CommentMapper
    {
        public static Comments From(CommentsEntity commentoEntity)
        {
            return new()
            {
                Id = commentoEntity.Id,
                User_Id = commentoEntity.User_Id,
                Movie_Id = commentoEntity.Movie_Id,
                Comment = commentoEntity.Comment
            };
        }
    }
}
