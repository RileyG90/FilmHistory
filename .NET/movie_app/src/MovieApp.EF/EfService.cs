using MovieApp.Core.BL.Service;
using MovieApp.Core.Model;
using MovieApp.EF.Entities;
using MovieApp.EF.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.EF
{
    public class EfService : IStorageService
    {
        private ApplicationDbContext _context;

        public EfService()
        {
            _context = new();
            _context.Database.EnsureCreated();
        }

        public List<Comments> GetAllComments()
        {
            List<CommentsEntity> all = _context.Comments.ToList();
            List<Comments> commenti = new();
            foreach (CommentsEntity entity in all)
            {
                Comments commento = CommentMapper.From(entity);
                commenti.Add(commento);
            }
            return commenti;
        }

        public Comments CommentGetById(int commentId)
        {
            var commentoById = _context.Comments.Find(commentId);
            return CommentMapper.From(commentoById);
        }

        public Comments CreateComment(int user_Id, int movie_Id, string Comment)
        {
            CommentsEntity commentoToCreate = new CommentsEntity()
            {
                Id = GetNextCommentId(),
                User_Id = user_Id,
                Movie_Id = movie_Id,
                Comment = Comment
            };

            _context.Add(commentoToCreate);
            _context.SaveChanges();
            return CommentMapper.From(commentoToCreate);
        }

        public Comments UpdateCommentById(int commentId, string comment)
        {
            var commentoToUpdate = _context.Comments.Find(commentId);
            {
                commentoToUpdate.Comment = comment;
            }

            _context.Update(commentoToUpdate);
            _context.SaveChanges();

            return CommentMapper.From(commentoToUpdate);
        }

        public bool DeleteCommentById(int commentId)
        {
            var commentToDelite = _context.Comments.Find(commentId);
            _context.Remove(commentToDelite);
            _context.SaveChanges();
            
            CommentMapper.From(commentToDelite);
            
            return true;
        }

        private int GetNextCommentId()
        {
            int id = _context.Comments.Count();

            if (id == 0)
            {
                return 1;
            }
            return _context.Comments.Select(id => id.Id).Max() + 1;
        }
    }
}
