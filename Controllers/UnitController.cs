using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnitController : ControllerBase
    {
        private readonly IUnitService _unitService;

        public UnitController(IUnitService unitService)
        {
            _unitService = unitService;
        }

        // GET: api/Units
        [HttpGet]
        public async Task<IEnumerable<Unit>> Get()
        {
            return await _unitService.GetUnitsList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Unit>> Get(int id)
        {
            var unit = await _unitService.GetUnitById(id);

            if (unit == null)
            {
                return NotFound();
            }

            return Ok(unit);
        }

        // POST: api/Units
        [HttpPost]
        public async Task<ActionResult<Unit>> Post(Unit unit)
        {
            await _unitService.CreateUnit(unit);

            return CreatedAtAction("Post", new { id = unit.Id }, unit);
        }

        // PUT: api/Units/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Unit unit)
        {
            if (id != unit.Id)
            {
                return BadRequest("Not a valid Unit id");
            }

            await _unitService.UpdateUnit(unit);

            return NoContent();
        }

        // DELETE: api/Units/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Unit id");

            var unit = await _unitService.GetUnitById(id);
            if (unit == null)
            {
                return NotFound();
            }

            await _unitService.DeleteUnit(unit);

            return NoContent();
        }
    }
}
