using Microsoft.AspNetCore.Mvc;
using Mission14_API.Controllers.Data;
using System.Collections;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        public MovieContext MovieContext { get; set; }
        public MovieController(MovieContext movieContext) 
        {
            MovieContext = movieContext;
        }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return MovieContext.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title);
        }
    }
}
