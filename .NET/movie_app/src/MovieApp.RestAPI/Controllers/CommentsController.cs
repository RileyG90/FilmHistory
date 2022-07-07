using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Core.BL;
using MovieApp.Core.BL.Service;
using MovieApp.Core.Model;
using MovieApp.RestAPI.Mapper;
using MovieApp.RestAPI.Model;

namespace MovieApp.RestAPI.Controllers
{
    [ApiController]
    [Route("api/comments")]
    public class CommentsController : ControllerBase
    {
        ApplicationManager _applicationManager;

        public CommentsController(IStorageService storageService)
        {
            _applicationManager = new ApplicationManager(storageService);
        }

        [EnableCors("Policy1")]
        [HttpGet]
        public ActionResult<List<CommentContract>> GetAllComments()
        {
            var comments = _applicationManager
                .GetAllComments()
                .Select(c => CommentMapper.From(c));
            return Ok(comments);
        }

        [EnableCors("Policy1")]
        [HttpGet]
        [Route("{comment-id}")]
        public ActionResult<CommentContract> GetCommentById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {

                var comment = _applicationManager.GetAllComments().First(com => com.Movie_Id == commentId);
                return Ok(CommentMapper.From(comment));
            }
            catch (Exception ex)
            {
                var errorMessage = new ErrorResponse()
                {
                    Message = $"Non esiste un commento con id {commentId}"
                };
                return NotFound(errorMessage);
            }
        }

        [EnableCors("Policy1")]
        [HttpDelete]
        [Route("{comment-id}")]
        public ActionResult<CommentContract> DeleteCommentById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                var comment = _applicationManager.GetAllComments().First(com => com.Id == commentId);
                var commentDeleted = _applicationManager.DeleteCommentById(commentId);

                return Ok(CommentMapper.From(comment));
            }
            catch (Exception ex)
            {
                var errorMessage = new ErrorResponse()
                {
                    Message = $"Non esiste un commento con id {commentId}"
                };
                return NotFound(errorMessage);
            }
        }

        [EnableCors("Policy1")]
        [HttpPatch]
        [Route("{comment-id}")]
        public ActionResult<CommentContract> UpdateCommentById(
            [FromRoute(Name = "comment-id")] int commentId, 
            [FromBody] UpdateCommentContract commentUpdateInfo)
        {
            try
            {
                var updatedComment = _applicationManager.UpdateCommentById(commentId, commentUpdateInfo.Comment);
                return Ok(CommentMapper.From(updatedComment));
            }
            catch (Exception ex)
            {
                var errorMessage = new ErrorResponse()
                {
                    Message = $"Non esiste un commento con id {commentId}"
                };
                return NotFound(errorMessage);
            }
        }

        [EnableCors("Policy1")]
        [HttpPatch]
        public ActionResult<CommentContract> CreateNewComment([FromBody] Comments newComment)
        {
            try
            {
                var CommentToCreate = _applicationManager.CreateComment(newComment.User_Id, newComment.Movie_Id, newComment.Comment);

                return Ok(CommentMapper.From(CommentToCreate));
            }
            catch (Exception ex)
            {
                var errorMessage = new ErrorResponse()
                {
                    Message = $"Il commento deve avere almeno {Comments.MIN_LENGHT_COMMENTS} caratteri"
                };
                return NotFound(errorMessage);
            }

        }
    }
}
