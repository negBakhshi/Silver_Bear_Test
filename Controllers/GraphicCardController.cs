using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GraphicCardController : ControllerBase
    {
        private readonly IGraphicCardService _graphicCardService;

        public GraphicCardController(IGraphicCardService graphicCardService)
        {
            _graphicCardService = graphicCardService;
        }

        // GET: api/GraphicCards
        [HttpGet]
        public async Task<IEnumerable<GraphicCard>> Get()
        {
            return await _graphicCardService.GetGraphicCardsList();
        }

        // GET: api/GraphicCards/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GraphicCard>> Get(int id)
        {
            var graphicCard = await _graphicCardService.GetGraphicCardById(id);

            if (graphicCard == null)
            {
                return NotFound();
            }

            return Ok(graphicCard);
        }

        // POST: api/GraphicCards
        [HttpPost]
        public async Task<ActionResult<GraphicCard>> Post(GraphicCard graphicCard)
        {
            await _graphicCardService.CreateGraphicCard(graphicCard);

            return CreatedAtAction("Post", new { id = graphicCard.Id }, graphicCard);
        }

        // PUT: api/GraphicCards/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, GraphicCard graphicCard)
        {
            if (id != graphicCard.Id)
            {
                return BadRequest("Not a valid GraphicCard id");
            }

            await _graphicCardService.UpdateGraphicCard(graphicCard);

            return NoContent();
        }

        // DELETE: api/GraphicCards/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid GraphicCard id");

            var graphicCard = await _graphicCardService.GetGraphicCardById(id);
            if (graphicCard == null)
            {
                return NotFound();
            }

            await _graphicCardService.DeleteGraphicCard(graphicCard);

            return NoContent();
        }
    }
}
