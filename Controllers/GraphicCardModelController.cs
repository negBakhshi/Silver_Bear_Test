using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GraphicCardModelController : ControllerBase
    {
        private readonly IGraphicCardModelService _graphicCardModelService;

        public GraphicCardModelController(IGraphicCardModelService gcModelService)
        {
            _graphicCardModelService = gcModelService;
        }

        // GET: api/GraphicCardModels
        [HttpGet]
        public async Task<IEnumerable<GraphicCardModel>> Get()
        {
            return await _graphicCardModelService.GetGraphicCardModelsList();
        }

        // GET: api/GraphicCardModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GraphicCardModel>> Get(int id)
        {
            var graphicCardModel = await _graphicCardModelService.GetGraphicCardModelById(id);

            if (graphicCardModel == null)
            {
                return NotFound();
            }

            return Ok(graphicCardModel);
        }

        // POST: api/GraphicCardModels
        [HttpPost]
        public async Task<ActionResult<GraphicCardModel>> Post(GraphicCardModel gcModel)
        {
            await _graphicCardModelService.CreateGraphicCardModel(gcModel);

            return CreatedAtAction("Post", new { id = gcModel.Id }, gcModel);
        }

        // PUT: api/GraphicCardModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, GraphicCardModel gcModel)
        {
            if (id != gcModel.Id)
            {
                return BadRequest("Not a valid GraphicCardModel id");
            }

            await _graphicCardModelService.UpdateGraphicCardModel(gcModel);

            return NoContent();
        }

        // DELETE: api/GraphicCardModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid GraphicCardModel id");

            var gcModel = await _graphicCardModelService.GetGraphicCardModelById(id);
            if (gcModel == null)
            {
                return NotFound();
            }

            await _graphicCardModelService.DeleteGraphicCardModel(gcModel);

            return NoContent();
        }
    }
}
